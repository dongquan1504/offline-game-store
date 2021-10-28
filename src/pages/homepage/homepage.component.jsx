import React from "react";

import TopestGame from "../../components/topest-game/topest-game.component";
import Directory from "../../components/directory/directory.component";
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <h1>THE BEST GAME</h1>
      <TopestGame/>
      <Directory/>
    </div>
  );
};

export default HomePage;
