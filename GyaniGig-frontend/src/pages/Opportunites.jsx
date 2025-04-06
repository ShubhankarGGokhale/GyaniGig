import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Box,
  Container,
} from "@mui/material";
import internshipData from "../data/internships";

const Opportunities = () => {
  return (
    <Container sx={{ paddingTop: "80px" }}>
      <Typography variant="h4" gutterBottom>
        Internship Opportunities
      </Typography>
      <Grid container spacing={3}>
        {internshipData.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="primary">
                  {item.company}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {item.role}
                </Typography>
                <Box mt={2}>
                  <Typography variant="body2" fontWeight="bold">
                    Recommended Courses:
                  </Typography>
                  <Box mt={1} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {item.courses.map((course, idx) => (
                      <Chip label={course} key={idx} color="secondary" />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Opportunities;
