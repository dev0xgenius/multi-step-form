import type { AppFormState, FormStateAction } from "./types";

export function reducer(state: AppFormState, action: FormStateAction) {
    const { data } = action;
    let updatedState: AppFormState;

    switch (action.type) {
        case "UPDATE_CONTACT":
            if (typeof data == "object") {
                updatedState = {
                    ...state,
                    contact: Object.assign({}, state.contact, data)
                };
            } else throw Error("Mumu!!! Check that thing...");
            break;
        case "UPDATE_BILLING":
            updatedState = {
                ...state,
                plan: Object.assign({}, state.plan, data)
            }
            break;
        default:
            return state;
    }

    return updatedState;
};

export function capitalize(str: string) {
    const sep = " ";
    const items = str.split(sep);

    return items.map(item => (
        item.replace(item[0], item[0].toUpperCase())
    )).join(sep);
}
