import {
  FormControl,
  FormGroup,
  Stack
} from "@mui/material";
import { useState, type ChangeEvent, type ChangeEventHandler, type FormEventHandler } from "react";
import AddOn from "~/src/components/AddOn";
import CustomCard from "~/src/components/CustomCard";
import type { Route } from "./+types/add-ons";
import { useFetcher } from "react-router";


export async function loader({ request }: Route.LoaderArgs) {
  let url = new URLSearchParams(request.url);

  let data = [
    {
      caption: "Online Service",
      description: "Access to multiplayer games",
      priceInfo: [1, "mo"]
    },
    {
      caption: "Larger Storage",
      description: "Extra 1TB of cloud save",
      priceInfo: [2, "mo"]
    },
    {
      caption: "Customizable Profile",
      description: "Custom theme on your profile",
      priceInfo: [2, "mo"]
    }
  ];

  return { data };
};

export async function clientAction({ request }: Route.ClientActionArgs) {
  const data = await request.formData();
  alert(data.get("online-service"));
};

export default function Component({ loaderData }: Route.ComponentProps) {
  let { data } = loaderData;
  const fetcher = useFetcher();

  const [extras, setExtras] = useState({
    "online-service": false,
    "customizable-profile": false,
    "larger-storage": false
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> =
    (evt) => {
      evt.preventDefault();
      fetcher.submit(extras, { method: "post" });
    }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const targetValue = evt.target.value;
    const checked = evt.target.checked;

    setExtras(prevExtras => {
      let extrasUpdated = Object.assign({}, { ...prevExtras });

      switch (targetValue) {
        case "online-service":
          extrasUpdated[targetValue] = checked;
          break;
        case "larger-storage":
          extrasUpdated[targetValue] = checked;
          break;
        case "customizable-profile":
          extrasUpdated[targetValue] = checked;
          break;
      }

      return extrasUpdated;
    });
  };

  return (
    <CustomCard
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience">
      <form id="currentForm" onSubmit={handleSubmit}>
        <FormControl>
          <FormGroup>
            {
              <Stack>
                {data.map((addOn, index) => (
                  <AddOn
                    caption={addOn.caption}
                    description={addOn.description}
                    priceInfo={addOn.priceInfo}
                    key={index}
                    handleChange={handleChange}
                  />))}
              </Stack>
            }
          </FormGroup>
        </FormControl>
      </form>
    </CustomCard >
  );
};

