import {
    FormControl
} from "@mui/material";
import { useEffect, type FormEventHandler } from "react";
import { useNavigate, useOutletContext } from "react-router";
import AddOns from "~/components/AddOns";
import CustomCard from "~/components/CustomCard";
import type { OutletContext } from "~/lib/types";
import type { Route } from "./+types/extras";


export async function loader({ request }: Route.LoaderArgs) {
    let url = new URLSearchParams(request.url);

    let data = [
        {
            name: "Online Service",
            description: "Access to multiplayer games",
            price: { "mo": 1, "yr": 4 }
        },
        {
            name: "Larger Storage",
            description: "Extra 1TB of cloud save",
            price: { "mo": 2, "yr": 8 }
        },
        {
            name: "Customizable Profile",
            description: "Custom theme on your profile",
            price: { "mo": 3, "yr": 12 }
        }
    ];

    return { data };
};

export default function Component({ loaderData }: Route.ComponentProps) {
    const { formState, dispatch } = useOutletContext<OutletContext>();
    const navigate = useNavigate();
    let { data } = loaderData;

    const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();
        let formData = new FormData(evt.currentTarget);

        let results = formData.getAll("add-on");
        dispatch({
            type: "UPDATE_EXTRAS",
            data: {
                "online-service": results.includes("online-service"),
                "larger-storage": results.includes("larger-storage"),
                "customizable-profile": results.includes("customizable-profile"),
            }
        });

        navigate("/summary", { viewTransition: true });
    };

    useEffect(() => {
        let form = document.querySelector<HTMLFormElement>("#currentForm");
        return () => {
            let results = new FormData(form ?? undefined).getAll("add-on");
            dispatch({
                type: "UPDATE_EXTRAS",
                data: {
                    "online-service": results.includes("online-service"),
                    "larger-storage": results.includes("larger-storage"),
                    "customizable-profile": results.includes("customizable-profile"),
                }
            })
        };
    }, []);

    return (
        <CustomCard
            title="Pick add-ons"
            description="Add-ons help enhance your gaming experience">
            <form id="currentForm" onSubmit={handleSubmit}>
                <FormControl>
                    <AddOns addOns={data} />
                </FormControl>
            </form>
        </CustomCard >
    );
};

