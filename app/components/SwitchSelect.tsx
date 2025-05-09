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
    const handleSwitch = (_: React.SyntheticEvent, checked: boolean) => {
        props?.onSwitchSelect && props?.onSwitchSelect(checked);
    };

    return (
        <Stack direction="row" spacing={1} sx={theme => ({
            ...theme.mixins.centerStack,
            ...theme.mixins.highlightBorder,
        })}>
            <Typography>{props.optionLabels[0]}</Typography>
            <FormControlLabel
                label={null}
                control={<Switch checked={props.checked} />}
                onChange={handleSwitch}
            />
            <Typography>{props.optionLabels[1]}</Typography>
            <input
                type="hidden"
                name={props.name}
                style={{ display: "none" }}
                value={props.value}
            />
        </Stack>
    );
}
