import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export interface FormStepProps {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function FormStep({ title, description, children }: FormStepProps) {
  return (
    <Card sx={{ mt: -14, boxShadow: 24, p: 0.5, borderRadius: 4 }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight="bolder" color="primary">
            {title}
          </Typography>
        }
        subheader={description}
      />
      <CardContent>
        <form>
          {children}
        </form>
      </CardContent>
    </Card>
  );
};
