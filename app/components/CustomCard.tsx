import { Card, CardContent, CardHeader } from "@mui/material";
import { type Theme } from "@mui/material/styles";

export interface CustomCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const styling = (theme: Theme) =>
  ({
    mt: -14,
    p: 1.5,
    px: 0.75,
    boxShadow: `0rem 1rem 5rem -2rem ${theme.palette.neutral.lightGray}`,

    "& .MuiCardHeader-title": {
      color: theme.palette.primary.main,
      fontSize: theme.typography.h4,
      fontWeight: "bolder",
    },
    "& .MuiCardHeader-subheader": {
      pt: 0.5,
      color: "gray",
    },
  }) as const;

export default function CustomCard({
  title,
  description,
  children,
}: CustomCardProps) {
  return (
    <Card sx={styling}>
      <CardHeader
        title={title}
        subheader={description}
        // TODO: Pad subheading text to the right or give max width
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
}
