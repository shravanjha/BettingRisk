import React from "react";

import UnSettledBet from "./UnSettledBet";
import * as UnSettledBetActions from "../actions/UnSettledBetActions";
import UnSettledBetStore from "../stores/UnSettledBetStore";


export default class UnSettledBets extends React.Component {
  constructor() {
    super();
    this.getUnSettledBets = this.getUnSettledBets.bind(this);
    this.state = {
      unSettledBets: UnSettledBetStore.getAll(),
    };
  }

  componentWillMount() {
    UnSettledBetStore.on("change", this.getUnSettledBets);
  }

  componentWillUnmount() {
    UnSettledBetStore.removeListener("change", this.getUnSettledBet);
  }

  getUnSettledBets() {
    this.setState({
      UnSettledBets: UnSettledBetStore.getAll(),
    });
  }

  reloadUnSettledBets() {
    UnSettledBetActions.reloadUnSettledBet();
  }

  render() {
    const { unSettledBets } = this.state;
    var sum = 0;
    unSettledBets.forEach(function(item,index,array) { sum+= parseInt(item.Stake); });
    console.log(sum);
    const UnSettledBetComponents = unSettledBets.map((unSettledBet) => {
        return <UnSettledBet key={Math.random().toString(36).substr(2, 9)} data={unSettledBet} avg={sum/unSettledBets.length} />;
    });

    return (
      <div class='container'>
      <h1>UnSettled Bets</h1>
        <div class='col-xs-6 col-md-4'>
        <table class='table'>
        <tbody>
          <tr>
            <td>
              Upcoming bets -  win amount more than 60% of bet amount
            </td>
            <td>
              <div class='unsettled-unusual unsettled-unusual-color'></div>
            </td>
          </tr>
          <tr>
            <td>
              Upcoming bets - stake is more than 10 times higher than the average bet 
            </td>
            <td>
              <div class='unsettled-stake10 unsettled-stake10-color'></div>
            </td>
          </tr>
          <tr>
            <td>
              Upcoming bets - stake is more than 30 times higher than the average bet 
            </td>
            <td>
              <div class='unsettled-stake30 unsettled-stake30-color'></div>
            </td>
          </tr>
           <tr>
            <td>
              Upcoming bets - amount to be won is $1000 or more
            </td>
            <td>
              <div class='unsettled-1000 unsettled-1000-color'></div>
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
            <th>ToWin</th>
          </tr>
          </thead>
          <tbody>
          {UnSettledBetComponents}
          </tbody>
        </table>
        <button class='btn btn-success' onClick={this.reloadUnSettledBets.bind(this)}>Reload!</button>
      </div>
    );
  }
}