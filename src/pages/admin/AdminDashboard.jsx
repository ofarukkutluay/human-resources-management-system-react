import React from "react";
import { Grid } from "semantic-ui-react";
import AdminEmployerActivateList from "./AdminEmployerActivateList";
import AdminJobAdvertisementActivateList from "./AdminJobAdvertisementActivateList";

export default function AdminDashboard() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <AdminEmployerActivateList />
        </Grid.Row>
        <Grid.Row>
          <AdminJobAdvertisementActivateList />
        </Grid.Row>
      </Grid>
    </div>
  );
}
