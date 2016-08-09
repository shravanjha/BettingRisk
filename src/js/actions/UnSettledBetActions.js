import dispatcher from "../dispatcher";

export function reloadUnSettledBet() {
dispatcher.dispatch({type: "FETCH_UNSETTLED_BET"});
  setTimeout(() => {
    var unSettledData = require('../../data/Unsettled.csv');
    console.log(unSettledData);
    dispatcher.dispatch({type: "RECEIVE_UNSETTLED_BET", unSettledBets: unSettledData});
  }, 1000);
}