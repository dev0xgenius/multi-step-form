import { Card, CardContent, CardHeader } from "@mui/material";
import { type Theme } from "@mui/material/styles";

export interface CustomCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const styling = (theme: Theme) => ({
  width: "100%",
  height: "100%",
  m: "0 auto",
  mt: { xs: "-28%", md: "0" },
  p: { xs: 1.5, md: 0 },
  px: 0.75,
  boxShadow: {
    xs: `0rem 1rem 5rem -2rem ${theme.palette.neutral.lightGray}`,
    md: "none",
  },

  "& .MuiCardHeader-title": {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h4,
    fontWeight: "bolder",
  },

  "& .MuiCardHeader-subheader": {
    pt: 1.5,
    color: "neutral.coolGray",
  },
});

export default function CustomCard({
  title,
  description,
  children,
}: CustomCardProps) {
  return (
    <Card sx={styling}>
      <CardHeader title={title} subheader={description} sx={{ pb: 0 }} />
      <CardContent sx={{ py: { md: 4 } }}>{children}</CardContent>
    </Card>
  );
}
