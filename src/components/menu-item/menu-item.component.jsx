import React from "react";
import { withRouter } from "react-router";

import "./menu-item.styles.scss";

const MenuReview = ({ title, history, linkUrl, match }) => (
  <div
    className='menu-item'
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
    </div>
  </div>
);

export default withRouter(MenuReview);