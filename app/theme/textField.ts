export const InputProps = {
    notched: false,
    size: "small",
    sx: {
        borderRadius: 0.618
    }
} as const;

export const InputLabelProps = {};

export const HelperTextProps = {
    sx: { position: "absolute", right: 0 }
} as const;

export const TextFieldDefaultProps = {
    margin: "dense",
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
        input: { ...InputProps },
        formHelperText: { ...HelperTextProps }
    }
} as const;

