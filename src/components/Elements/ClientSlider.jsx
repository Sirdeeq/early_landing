import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/NEMA-650x430.jpg"
import ClientLogo02 from "../../assets/img/SEMA.jpg";
import ClientLogo03 from "../../assets/img/UNDRR.png";


export default function ClientSlider() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>       
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;