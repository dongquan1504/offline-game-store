import React from "react";

import "./info-developer.styles.scss";

const InfoDeveloper = () => {
  return (
    <div className="developer">
      <p class="text">© 2022 - This Web developed by</p>
      <a
        rel="noreferrer"
        href="https://github.com/dongquan1504"
        target="_blank"
      >
        Duong Dong Quan
      </a>

      <p class="contribute">
        <a
          rel="noreferrer"
          class="github-button"
          href="https://github.com/dongquan1504/offline-game-store/fork"
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork ntkme/github-buttons on GitHub"
        >
          Fork
        </a>
        <a
          rel="noreferrer"
          class="github-button"
          href="https://github.com/dongquan1504/offline-game-store"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star dongquan1504/offline-game-store on GitHub"
        >
          Star
        </a>
      </p>
    </div>
  );
};
export default InfoDeveloper;
