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

                return updatedState;
            } else throw Error("Mumu!!! Check that thing...");
        default:
            return state;
    }
}
