import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h5 className="font40 extraBold text-center"> Our Patners </h5>
            <p className="font13">
              
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
              <BlogBox
                title="NEMA"
                text=""
                tag="company"
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
              <BlogBox
                title="SEMA"
                text=""
                tag="company"
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
              <BlogBox
                title="UNDRR"
                text=""
                tag="company"
                author=""
                action={() => alert("clicked")}
              />
            </div>
             <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
              <BlogBox
                title="UNSPIDER"
                text=""
                tag="company"
                author=""
                action={() => alert("clicked")}
              />
            </div>
          </div>
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;