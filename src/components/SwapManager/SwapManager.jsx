import React, { Component } from "react";
import "./index.css";

const HDD = [
  {
    title: "HDD - New York, US - 700 USDC - 3HDD",
    details: "some details",
  },
  {
    title: "HDD - New York, US - 2000 USDC - 8HDD",
    details: "some details",
  },
];

class SwapManager extends Component {
  render() {
    return (
      <React.Fragment>
        <p class="font-bold mb-2">Your Swaps</p>
        <div className="SwapManager shadow-lg p-2 bg-neutral text-neutral-content rounded-box">
          <p class="font-bold mb-2">Select Swap</p>
          <select class="select select-bordered w-full max-w-xs">
            {HDD.map((hdd) => (
              <option>{hdd.title}</option>
            ))}
          </select>
          <p class="font-bold mb-2 mt-3">Available Actions</p>
          <button class="btn btn-block btn-secondary mb-2">View Transaction</button>
          <button class="btn btn-block btn-secondary mt-2">Settle</button>
        </div>
      </React.Fragment>
    );
  }
}

export default SwapManager;
