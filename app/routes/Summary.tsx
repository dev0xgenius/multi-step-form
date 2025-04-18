import { Box, Card, CardContent, CardHeader, Container, Divider, Stack, Typography } from "@mui/material";
import type { Route } from "./+types/Summary";
import { Link } from "react-router";

import { css } from "@emotion/react";

export default function Summary({ }: Route.ComponentProps) {
  return (
    <Card>
      <CardHeader
        title="Finishing Up"
        subheader="Double check everything looks OK before confirming"
      />
      <CardContent>
        <Container sx={{ bgcolor: "whitesmoke", paddingY: 2, borderRadius: 4, mb: 2 }}>
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
        <Box sx={css`display: flex; justify-content: space-between;`}>
          <Typography>Total(per year)</Typography>
          <Typography variant="h5" color="secondary">$12/yr</Typography>
        </Box>
      </CardContent>
    </Card >
  );
};
