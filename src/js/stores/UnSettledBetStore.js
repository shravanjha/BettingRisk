import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class UnSettledBetStore extends EventEmitter {
  constructor() {
    super()
    var unSettledData = require('../../data/Unsettled.csv');
    this.unSettledBets = unSettledData;
  }

  getAll() {
    return this.unSettledBets;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_UNSETTLED_BET": {
        this.unSettledBets = action.unSettledBets;
        this.emit("change");
        break;
      }
    }
  }

}

const unSettledBetStore = new UnSettledBetStore;
dispatcher.register(unSettledBetStore.handleActions.bind(unSettledBetStore));

export default unSettledBetStore;