import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router";
import type { Route } from "./+types/summary";
import CustomCard from "~/src/components/CustomCard";

export default function Component({ }: Route.ComponentProps) {
  return (
    <CustomCard
      description="Double check everything looks OK before confirming"
      title="Finishing Up"
    >
      <Container sx={{ bgcolor: "whitesmoke", paddingY: 2, borderRadius: 1, mb: 2 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box>
            <Typography fontWeight="500">Arcade (monthly)</Typography>
            <Typography>
              <Link to="/billing" viewTransition={true}>Change</Link>
            </Typography>
          </Box>
          <Typography component="span" sx={{
            m: "auto", marginRight: "0rem", alignSelf: "flex-start"
          }}>
            $9/mo
          </Typography>
        </Stack>
        <Divider sx={{ marginY: 2 }} />
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
      <Stack direction="row" paddingX={2} justifyContent="space-between">
        <Typography>Total (per year)</Typography>
        <Typography>$12/yr</Typography>
      </Stack>
    </CustomCard>
  );
};
