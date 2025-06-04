import { Card, CardContent, CardHeader } from "@mui/material";
import { type Theme } from "@mui/material/styles";

export interface CustomCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const styling = (theme: Theme) => ({
  maxWidth: theme.breakpoints.values.sm,
  width: "100%",
  m: "0 auto",
  mt: "-28%",
  p: 1.5,
  px: 0.75,
  boxShadow: `0rem 1rem 5rem -2rem ${theme.palette.neutral.lightGray}`,

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
      <CardContent>{children}</CardContent>
    </Card>
  );
}
