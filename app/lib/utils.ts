import {
  ContactFormSchema,
  type AppFormState,
  type FormStateAction,
} from "./types";

export function reducer(state: AppFormState, action: FormStateAction) {
  const { data } = action;
  let updatedState: AppFormState = { ...state };

  switch (action.type) {
    case "UPDATE_CONTACT":
      if (typeof data == "object") {
        updatedState = {
          ...state,
          contact: Object.assign({}, state.contact, data),
        };
      }
      break;
    case "UPDATE_BILLING":
      updatedState = {
        ...state,
        plan: Object.assign({}, state.plan, data),
      };
      break;
    case "UPDATE_EXTRAS":
      updatedState = {
        ...state,
        extras: Object.assign({}, state.extras, data),
      };
      break;
    case "VALIDATE_FORM":
      break;
  }

  return updatedState;
}

export function capitalize(str: string) {
  const sep = " ";
  const items = str.split(sep);

  return items
    .map((item) => item.replace(item[0], item[0].toUpperCase()))
    .join(sep);
}
