import ImageSlider from "./ImageSlider";
import React from 'react'
import '../styles/Home.css';
const Home = () => {
  const slides = [
    { url: "https://i.etsystatic.com/15626562/r/il/7e20d1/3164394919/il_1140xN.3164394919_63is.jpg", title: "nike pink for women" },
    { url: "https://i.etsystatic.com/10236127/r/il/3d1f04/1159992733/il_1140xN.1159992733_38ga.jpg", title: "nike colorful for men" },
    { url: "https://i.etsystatic.com/15626562/r/il/71f6ea/2886237604/il_1140xN.2886237604_imnz.jpg", title: "nike army for men" },
    { url: "https://i.etsystatic.com/36646658/r/il/635c1f/4569813533/il_1140xN.4569813533_dwhb.jpg", title: "rebook for women" },
    { url: "https://i.etsystatic.com/38729892/r/il/78f803/4503454033/il_1140xN.4503454033_fkor.jpg", title: "nike red and pink for girls" },
    { url: "https://i.etsystatic.com/28924822/r/il/51b4d3/3593155933/il_1140xN.3593155933_et64.jpg", title: "nike blue lightning" },
    { url: "https://i.etsystatic.com/10236127/r/il/a95944/3808349594/il_1140xN.3808349594_rplz.jpg", title: "nike purple sneakers" },
    { url: "https://i.etsystatic.com/33910170/r/il/97bbc4/4530885637/il_1140xN.4530885637_6jkh.jpg", title: "nike yellow black paint" },
  ];
  const containerStyles = {
    width: "60%",
    height: "40vmin",
    margin: "0 auto",
  };
  return (
    <div className='home-container'>
      <h1>Shoes Manager</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      {/* <img className='welcome' alt=''/> */}
    </div>
  )
}

export default Home