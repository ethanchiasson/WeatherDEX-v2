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
  {
    title: "HDD - New York, US - 2000 USDC - 8HDD",
    details: "some details",
  },
  {
    title: "HDD - New York, US - 2000 USDC - 8HDD",
    details: "some details",
  },
  {
    title: "HDD - New York, US - 2000 USDC - 8HDD",
    details: "some details",
  },
  {
    title: "HDD - New York, US - 2000 USDC - 8HDD",
    details: "some details",
  },
];

class Swaps extends Component {
  render() {
    return (
      <React.Fragment>
        <p class="font-bold mb-2">Buy Swaps</p>
        <div className="Swaps shadow-lg p-2 mb-6 bg-neutral text-neutral-content rounded-box">
          {HDD.map((hdd) => (
            <div class="flex flex-row p-2 mb-2 items-center justify-between shadow-lg bg-gray-700 text-neutral-content rounded-box">
              <p class="">{hdd.title}</p>
              <a href="/components/modal#my-modal" class="btn btn-secondary btn-sm">
                Buy / Options
              </a>
              <div id="my-modal" class="modal">
                <div class="modal-box">
                  <p>
                    Enim dolorem dolorum omnis atque necessitatibus. Consequatur
                    aut adipisci qui iusto illo eaque. Consequatur repudiandae
                    et. Nulla ea quasi eligendi. Saepe velit autem minima.
                  </p>
                  <div class="modal-action">
                    <a href="/components/modal#" class="btn btn-accent">
                      Accept
                    </a>
                    <a href="/components/modal#" class="btn">
                      Close
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Swaps;
