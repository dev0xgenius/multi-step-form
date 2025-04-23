import { Card, CardHeader, Typography, CardContent } from "@mui/material";

export interface CustomCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function CustomCard({ title, description, children }: CustomCardProps) {
  return (
    <Card sx={{ mt: -14, boxShadow: 24, p: 0.5 }}>
      <CardHeader title=
        {<Typography variant="h5" fontWeight="bolder" color="primary" paddingY={0.1}>
          {title}
        </Typography>
        }
        subheader={description}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
}
