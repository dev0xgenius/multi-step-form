import { FormControl } from "@mui/material";
import { useEffect, type FormEventHandler } from "react";
import { useNavigate, useOutletContext } from "react-router";
import AddOns from "~/components/AddOns";
import CustomCard from "~/components/CustomCard";
import type { OutletContext } from "~/lib/types";
import type { Route } from "./+types/extras";

export async function loader() {
  let data = [
    {
      name: "online-service",
      description: "Access to multiplayer games",
      price: { mo: 1, yr: 10 },
    },
    {
      name: "larger-storage",
      description: "Extra 1TB of cloud save",
      price: { mo: 2, yr: 20 },
    },
    {
      name: "customizable-profile",
      description: "Custom theme on your profile",
      price: { mo: 3, yr: 30 },
    },
  ];

  return { data };
}

export default function AddOnsPage({ loaderData }: Route.ComponentProps) {
  const { dispatch } = useOutletContext<OutletContext>();
  const navigate = useNavigate();
  let { data } = loaderData;

  const updateData = (form: HTMLFormElement | null) => {
    if (!form) return;

    const findDataEntry = (entryName: string) =>
      data.find((entry) => entry.name === entryName);

    let formData = new FormData(form ?? undefined);
    let results = formData.getAll("add-on");

    return {
      "online-service":
        results.includes("online-service") && findDataEntry("online-service"),
      "larger-storage":
        results.includes("larger-storage") && findDataEntry("larger-storage"),
      "customizable-profile":
        results.includes("customizable-profile") &&
        findDataEntry("customizable-profile"),
    };
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch({ type: "UPDATE_EXTRAS", data: updateData(evt.currentTarget) });

    navigate("/summary");
  };

  useEffect(() => {
    let form = document.querySelector<HTMLFormElement>("#currentForm");

    return () => {
      dispatch({
        type: "UPDATE_EXTRAS",
        data: updateData(form),
      });
    };
  }, []);

  return (
    <CustomCard
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience"
    >
      <form id="currentForm" onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <AddOns addOns={data} />
        </FormControl>
      </form>
    </CustomCard>
  );
}
