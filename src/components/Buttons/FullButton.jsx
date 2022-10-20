import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 2px solid ${(props) => (props.border ? "#707070" : "#0B093B")};
  background-color: ${(props) => (props.border ? "transparent" : "#0B093B")};
  width: 100%;
  padding: 15px;
  outline: none;
  font-Weight: bold;
  font-size: 15px;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#fff")};
    border: 2px solid #0B093B;
    color: ${(props) => (props.border ? "#7620ff" : "#0B093B")};
  }
`;

