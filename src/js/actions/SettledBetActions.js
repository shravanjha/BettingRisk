import dispatcher from "../dispatcher";

export function reloadSettledBet() {
dispatcher.dispatch({type: "FETCH_SETTLED_BET"});
  setTimeout(() => {
    var settledData = require('../../data/Settled.csv');
    console.log(settledData);
    dispatcher.dispatch({type: "RECEIVE_SETTLED_BET", settledBets: settledData});
  }, 1000);
}