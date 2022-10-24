import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <img
                className="image_management_cycle"
                src="https://bit.ly/2D7MxjT"
                alt="Images"
              />
            <div style={{marginTop: 60}}>
              <h1 className="font40 extraBold" style={{ marginTop: "80px" }}>Disaster Management Cycle</h1>
              <p className="font15" style={{width: 600}}>
                Early warning systems help to reduce economic losses and
                mitigate the number of injuries or deaths from a disaster, by
                providing information that allows individuals and communities to
                protect their lives and property. Early warning information
                empowers people to take action when a disaster close to
                happening.
              </p>
            </div>
          </HeaderInfo>
        </div>
        <center>
          <div style={{paddingLeft: 200}}className='lightBg' >
            <ServiceBoxRow className="flex">
              <ServiceBoxWrapper>
                <img src="https://bit.ly/37hmX9N" alt="Images" style={{width: 200, height: 200}}/>
                <ServiceBox
                  // icon="roller"
                  title="Environmental Friendly"
                  subtitle=" Early warning systems can save many lives as long as they are
                    centred on the needs of the people."
                />
              </ServiceBoxWrapper>
              <ServiceBoxWrapper>
                <img src="https://bit.ly/2Xx6MAH" alt="Images" style={{width: 200, height: 200}}/>
                <ServiceBox
                  // icon="monitor"
                  title="Global Information"
                  subtitle="Early warning systems have been recognized as an effective
                    tool to reduce vulnerabilities and improve preparedness and
                    response to natural hazards"
                />
              </ServiceBoxWrapper>
              <ServiceBoxWrapper>
                <img src="https://bit.ly/2O0Ftf9" alt="Images" style={{width: 200, height: 200}}/>
              {/* <img src="https://bit.ly/32Y3o34" alt="Images" /> */}
                <ServiceBox
                  // icon="browser"
                  title="Control Of Disaster Risk"
                  subtitle="Early warning is one of many important tools that contribute
                    to the prevention of disasters and preparedness for hazards
                    and threats."
                />
              </ServiceBoxWrapper>
            </ServiceBoxRow>
          </div>
        </center>
        <div className="">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <div style= {{
                  marginTop: 100
                }}>
                  <h4 className="font20 semiBold">About us</h4>
                  <h2 className="font40 extraBold">A Study of Creativity</h2>
                  <p className="font15">
                    Early warning systems help to reduce economic losses and
                    mitigate the number of injuries or deaths from a disaster, by
                    providing information that allows individuals and communities to
                    protect their lives and property. Early warning information
                    empowers people to take action when a disaster close to
                    happening.
                  </p>
                  <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                    {/* <div style={{ width: "190px" }}>
                      <FullButton title="Get Started" action={() => alert("clicked")} />
                    </div> */}
                    <center>
                      <div style={{ width: "190px", }}>
                        <FullButton title="Get Started" action={() => alert("clicked")} border />
                      </div>
                    </center>
                  </ButtonsRow>
                </div>
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                  alt=""
                  class="img-fluid mb-4 mb-lg-0"
                  style={{
                      backgroundColor: 'transparent',
                      // marginTop: -100,
                      marginLeft: 200,
                      width: 500
                    }}
                />
                {/* <img
                    src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                    alt=""
                    class="img-fluid mb-4 mb-lg-0"
                    style={{
                      backgroundColor: 'transparent',
                      marginTop: -100,
                      marginLeft: 200,
                      width: 500
                    }}
                  /> */}
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  {/* <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div> */}
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  // width: 100%;
  // background-color: blue;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 25%;
  margin: 1%;
  padding: 70px 0;
  // border: 1px solid black;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  height: 500px;
  display: flex;
  flex-direction: row;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  height: 300px;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
// const AddImgWrapp1 = styled.div`
//   width: 48%;
//   margin: 0 6% 10px 6%;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;
// const AddImgWrapp2 = styled.div`
//   width: 30%;
//   margin: 0 5% 10px 5%;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;
// const AddImgWrapp3 = styled.div`
//   width: 20%;
//   margin-left: 40%;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;
// const AddImgWrapp4 = styled.div`
//   width: 30%;
//   margin: 0 5%auto;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;