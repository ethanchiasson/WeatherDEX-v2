import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
          <div class="flex-1 px-2 mx-2">
            <span class="text-lg font-bold">WeatherDEX</span>
          </div>
          <div class="flex-none px-2 mx-2 lg:flex">
            <div class="flex items-stretch">
              <a class="btn btn-ghost btn-sm rounded-btn">Trade</a>
              <a class="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
            </div>
          </div>
          {/* <div class="flex-none">
            <button class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
