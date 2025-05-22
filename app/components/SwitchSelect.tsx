import {
    FormControlLabel,
    Stack,
    Switch,
    Typography
} from "@mui/material";

export interface SwitchSelectProps {
    value: string;
    optionLabels: [string, string];
    name: string;
    checked: boolean;
    onSwitchSelect: ((checked: boolean) => void);
};


export default function SwitchSelect(props: SwitchSelectProps) {
    const switchStyling = {
        width: "max-content",
        height: "max-content",
        '& .Mui-checked + .MuiSwitch-track': {
            opacity: "1 !important",
        },
        '& .Mui-checked .MuiSwitch-thumb': { bgcolor: "neutral.white" },
        '& .MuiSwitch-track': {
            width: 50,
            borderRadius: 10,
            opacity: 1,
            p: 1.6,
            bgcolor: "primary.main",
        },
        '& .MuiSwitch-thumb': { m: 1, mt: .7, transform: "scale(0.8)" }
    } as const;

    const handleSwitch = (_: React.SyntheticEvent, checked: boolean) => {
        props?.onSwitchSelect && props?.onSwitchSelect(checked);
    };

    return (
        <Stack direction="row" spacing={1} sx={theme => ({
            ...theme.mixins.centerStack,
            ...theme.mixins.highlightBorder,
            my: 4, mb: 0, p: 2,
        })}>
            <Typography>{props.optionLabels[0]}</Typography>
            <FormControlLabel sx={{ m: 0 }} label={null}
                control={<Switch sx={switchStyling} checked={props.checked} />}
                onChange={handleSwitch}
            />
            <Typography>{props.optionLabels[1]}</Typography>
            <input
                type="hidden" name={props.name} style={{ display: "none" }}
                value={props.value}
            />
        </Stack>
    );
}
