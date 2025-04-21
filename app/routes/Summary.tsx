import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router";
import type { Route } from "./+types/Summary";
import FormStep from "~/src/components/FormStep";

export default function Summary({ }: Route.ComponentProps) {
  return (
    <FormStep
      description="Double check everything looks OK before confirming"
      title="Finishing Up"
    >
      <Container sx={{ bgcolor: "whitesmoke", paddingY: 2, borderRadius: 1, mb: 2 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h5">Arcade</Typography>
            <Typography variant="caption">
              <Link to="/billing" viewTransition={true}>Change</Link>
            </Typography>
          </Box>
          <Typography variant="h6" component="span"
            sx={{ m: "auto", marginRight: "0rem" }}
          >
            $9/mo
          </Typography>
        </Stack>
        <Divider />
        <Stack component="ul" sx={{
          p: 0, listStyleType: "none",

          '& li': {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }
        }}>
          <Box component="li">
            <Typography>Online Service</Typography>
            <Typography>+$1/mo</Typography>
          </Box>
          <Box component="li">
            <Typography>Larger Storage</Typography>
            <Typography>+2/mo</Typography>
          </Box>
        </Stack>
      </Container>
    </FormStep>
  );
};
