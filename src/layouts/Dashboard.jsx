import React from "react";
import { Grid, Container } from "semantic-ui-react";
import Navigation from "./Navigation";
import SubNavigation from "./SubNavigation";

export default function Dashboard() {
  return (
    <div>
      <Container style={{ marginTop: "3em" }}>
        <Grid>
          <Grid.Column>
            <Navigation />
          </Grid.Column>
        </Grid>
        <Grid columns="2">
          <Grid.Column>
            <SubNavigation />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
