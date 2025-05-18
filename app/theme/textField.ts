export const InputProps = {
    notched: false,
    sx: {
        borderRadius: 0.618
    }
} as const;

export const InputLabelProps = {};

export const TextFieldDefaultProps = {
    slotProps: {
        inputLabel: {
            shrink: true,
            disableAnimation: true,
            sx: {
                position: "static",
                transform: "none",
                color: "primary.main"
            }
        },
        input: { ...InputProps }
    }
} as const;

