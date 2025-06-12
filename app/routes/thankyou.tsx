import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { redirect } from "react-router";
import type { Route } from "./+types/thankyou";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("id");

  if (!query) return redirect("/summary");
  return query;
}

export function clientLoader() {}

export default function ThankYouPage() {
  // TODO: Add form validation

  return (
    <Container sx={{ alignSelf: "flex-end" }}>
      <Card elevation={0} sx={{ textAlign: "center", lineHeight: 1.2 }}>
        <CardContent component={Stack} alignItems="center" spacing={2}>
          <CardMedia
            src="/images/icon-thank-you.svg"
            component="img"
            sx={{
              maxWidth: "5em",
              height: "auto",
            }}
          />
          <Stack>
            <Typography variant="h4" fontWeight="bold" color="primary">
              Thank You
            </Typography>
            <Typography color="neutral.coolGray">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
