import React, { Component } from 'react';
import DashboardLayout from '../../../components/dashboard/Layout/Layout';
import { Divider, Grid, GridColumn } from 'semantic-ui-react';

class Dashboard extends Component {
  generateWelcomeMsg(username) {
    return (
      <h1>
        Hello <span className="font-dark-orange">{username}</span>, what are we
        up to today?
      </h1>
    );
  }

  render() {
    const { user } = this.props.initial;
    return (
      <div>
        {this.generateWelcomeMsg(user.username)}
        <Divider />
        <Grid columns={2}>
          <GridColumn />
          <GridColumn>hg</GridColumn>
        </Grid>
      </div>
    );
  }
}

export default DashboardLayout(Dashboard);
