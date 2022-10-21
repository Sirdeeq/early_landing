import React from "react";
import styled from "styled-components";
// // Assets
// import ContactImg1 from "../../assets/img/contact-1.png";
// import ContactImg2 from "../../assets/img/contact-2.png";
// import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                {/* <label className="font13">Full name:</label> */}
                <input type="text" id="fname" name="fname" className="font15" placeholder="Full Name" style={{ padding: '5px 10px' }} />
                {/* <label className="font13">Email:</label> */}
                <input type="text" id="email" name="email" className="font15" placeholder="Email" style={{ padding: '5px 10px' }} />
                {/* <label className="font13">Subject:</label> */}
                <input type="text" id="subject" name="subject" className="font15" placeholder="Subject" style={{ padding: '5px 10px' }} />
                <textarea type="text" id="message" name="message" className="font15" style={{ padding: '5px 10px', height: '20px' }}/>
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput 
                  type="submit" 
                  value="Send Message" 
                  className="pointer animate radius8" 
                  style={{ 
                    maxWidth: "200px", 
                    fontWeight: 'bolder',
                    fontSize: 16
                  }} />
              </SumbitWrapper>
            </div>
            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 50px 0px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 10px 0;
  input,
  textarea {
    width: 90%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 10px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 2px solid #0B093B;
  background-color: #0B093B;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #fff;
    border: 2px solid #0B093B;
    color: #0B093B;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
// const ContactImgBox = styled.div`
//   max-width: 180px; 
//   align-self: flex-end; 
//   margin: 10px 30px 10px 0;
// `;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









