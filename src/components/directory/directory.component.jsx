import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selectors";

import MenuReview from "../menu-review/menu-review.component";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    <div className="category">
      <h2> Category</h2>
      <div className="item-direction">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
    <div className="review">
      <h2>Review </h2>
      <div className="review-directory">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuReview key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
