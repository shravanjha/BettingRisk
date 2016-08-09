import React from "react";

import SettledBet from "./SettledBet";
import * as SettledBetActions from "../actions/SettledBetActions";
import SettledBetStore from "../stores/SettledBetStore";


export default class SettledBets extends React.Component {
  constructor() {
    super();
    this.getSettledBets = this.getSettledBets.bind(this);
    this.state = {
      settledBets: SettledBetStore.getAll(),
    };
  }

  componentWillMount() {
    SettledBetStore.on("change", this.getSettledBets);
  }

  componentWillUnmount() {
    SettledBetStore.removeListener("change", this.getSettledBet);
  }

  getSettledBets() {
    this.setState({
      SettledBets: SettledBetStore.getAll(),
    });
  }

  reloadSettledBets() {
    SettledBetActions.reloadSettledBet();
  }

  render() {
    const { settledBets } = this.state;

    const SettledBetComponents = settledBets.map((settledBet) => {
        return <SettledBet key={Math.random().toString(36).substr(2, 9)} {...settledBet}/>;
    });

    return (
      <div class='container'>
      <h1>Settled Bets</h1>
      <div class='col-xs-6 col-md-4'>
        <table class='table'>
        <tbody>
          <tr>
            <td>
              Win amount more than 60% of bet amount
            </td>
            <td>
              <div class='settled-unusual settled-unusual-color'></div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
        <table class='table'>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Event</th>
            <th>Patricipant</th>
            <th>Stake</th>
            <th>Win</th>
          </tr>
          </thead>
          <tbody>
          {SettledBetComponents}
          </tbody>
        </table>
        <button class='btn btn-success' onClick={this.reloadSettledBets.bind(this)}>Reload!</button>
      </div>
    );
  }
}