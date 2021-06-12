import React from "react";
import { Grid, Container } from "semantic-ui-react";
import Navigation from "./Navigation";
import SubNavigation from "./SubNavigation";
import { Route } from "react-router";
import HomePage from "../pages/HomePage";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SubNavigation />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={HomePage} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
