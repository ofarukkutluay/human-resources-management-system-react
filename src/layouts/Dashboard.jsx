import React from "react";
import { Grid } from "semantic-ui-react";
import SubNavigation from "./SubNavigation";
import { Route } from "react-router";
import HomePage from "../pages/HomePage";
import EmployerList from "../pages/EmployerList";
import JobPositionList from "../pages/JobPositionList";
import PageNotFound from "../pages/PageNotFound";
import { Switch } from "react-router-dom";
import CurriculumVitaeList from "../pages/CurriculumVitaeList";
import JobAdvertisementList from "../pages/JobAdvertisementList.jsx";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";
import AdminDashboard from "../pages/admin/AdminDashboard";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SubNavigation />
          </Grid.Column>
          <Grid.Column width={12}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/employers" component={EmployerList} />
              <Route path="/jobpositions" component={JobPositionList} />
              <Route path="/jobadvertisements" component={JobAdvertisementList} />
              <Route path="/jobadvertisement/add" component={JobAdvertisementAdd} />
              <Route path="/curriculumvitaes" component={CurriculumVitaeList} />
              <Route path="/admin" component={AdminDashboard} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
