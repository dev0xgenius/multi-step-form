import { Button, Stack } from "@mui/material";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    const goBack = useCallback(() => { navigate(-1,) }, []);

    return (
        <Stack direction={"row"} sx={{ m: "auto", mb: 0 }}>
            <Button
                sx={location?.pathname == "/" ? { display: "none" } : undefined}
                onClick={goBack}
            >Go Back</Button>
            <Button type="submit" form="currentForm" id="submitBtn">
                {location?.pathname == "/summary" ? "Confirm" : "Next Step"}
            </Button>
        </Stack>
    );
}
