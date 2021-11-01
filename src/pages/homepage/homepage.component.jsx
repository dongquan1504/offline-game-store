import React from "react";

import TopestGame from "../../components/topest-game/topest-game.component";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>THE BEST GAME</h1>
      <TopestGame />
      <div className="content-container">
        <h1>Lorem ipsum</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ornare viverra purus, vel dapibus augue commodo non. Aliquam sit amet
          nisi et velit finibus sagittis. Sed id fermentum enim. Quisque
          scelerisque elementum urna eu pharetra. Fusce cursus nulla massa,
          vitae congue leo dapibus et. Sed fermentum aliquet elit ut dictum.
          Pellentesque porta sollicitudin elit, sed blandit neque maximus in.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Phasellus id metus in elit mollis lacinia nec
          ut turpis.
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ornare viverra purus, vel dapibus augue commodo non. Aliquam sit amet
          nisi et velit finibus sagittis. Sed id fermentum enim. Quisque
          scelerisque elementum urna eu pharetra. Fusce cursus nulla massa,
          vitae congue leo dapibus et. Sed fermentum aliquet elit ut dictum.
          Pellentesque porta sollicitudin elit, sed blandit neque maximus in.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Phasellus id metus in elit mollis lacinia nec
          ut turpis.
        </span>
      </div>
      <Directory />
    </div>
  );
};

export default HomePage;
