// import DirectoryActionTypes from './directory.types';
import actionsIntroImg from "../../assets/images/category/actions.jpg";
import adventuresIntroImg from "../../assets/images/category/adventures.jpg";
import educationsIntroImg from "../../assets/images/category/educations.jpg";
import musicsIntroImg from "../../assets/images/category/musics.jpg";
import sportsIntroImg from "../../assets/images/category/sports.jpg";
import tacticsIntroImg from "../../assets/images/category/tactics.jpg";

const INTIAL_STATE = {
  sections: [
    {
      title: "ACTIONs",
      imageUrl: actionsIntroImg,
      linkUrl: "shop/actions",
      id: 1,
    },
    {
      title: "ADVENTUREs",
      imageUrl: adventuresIntroImg,
      linkUrl: "shop/adventures",
      id: 2,
    },
    {
      title: "EDUCATIONs",
      imageUrl: educationsIntroImg,
      linkUrl: "shop/educations",
      id: 3,
    },
    {
      title: "MUSICs",
      imageUrl: musicsIntroImg,
      linkUrl: "shop/musics",
      id: 4,
    },
    {
      title: "SPORTs",
      imageUrl: sportsIntroImg,
      linkUrl: "shop/sports",
      id: 5,
    },
    {
      title: "TACTICs",
      imageUrl: tacticsIntroImg,
      linkUrl: "shop/tactics",
      id: 6,
    },
    {
      title: "ROLE-PLAYINGs",
      imageUrl: tacticsIntroImg,
      linkUrl: "shop/role-playings",
      id: 7,
    },{
      title: 'RACINGs',
      imageUrl: tacticsIntroImg,
      linkUrl: "shop/racings",
      id: 8,
    },
    {
      title: "CASINOs",
      imageUrl: tacticsIntroImg,
      linkUrl: "shop/casinos",
      id: 9,
    },{
      title: "RIDDLEs",
      imageUrl: tacticsIntroImg,
      linkUrl: "shop/riddles",
      id: 10,
    },
    {
      title: "SIMULATIONs",
      imageUrl: tacticsIntroImg,
      linkUrl: "shop/simulations",
      id: 10,
    },
  ],
};

const directoryReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
