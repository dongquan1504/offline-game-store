import React from "react";
import popular from "../../assets/images/LN_banner.jpg";
import CustomButton from "../custom-button/custom-button.component";

import "./topest-game.styles.scss";

const TopestGame = () => {
  return (
    <div className="topest">
      <div id="layer"></div>
      <img src={popular} alt="#!" />
      <CustomButton className="custom-button" inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default TopestGame;
