import Styled from "styled-components";
import React from "react";

export default function Message() {
  return (
    <>
      <Top>
        <Left>
          <Img />
          <Div>
            <Span></Span>
            <Span></Span>
          </Div>
        </Left>
        <Right>
          <Ul>
            <Li></Li>
          </Ul>
        </Right>
      </Top>
      <Mid>
        <Span>Today</Span>
      </Mid>
      <Bottom>
        <Ul>
          <Li>
            <Img />
          </Li>
          <Li>
            <Div>
              <Input/> <Img/>
            </Div>
          </Li>
          <Li>
            <Img />
          </Li>
        </Ul>
      </Bottom>
    </>
  );
}

const Top = Styled.div``;
const Mid = Styled.div``;
const Bottom = Styled.div``;
const Left = Styled.div``;
const Right = Styled.div``;
const Div = Styled.div``;
const Ul = Styled.ul``;
const Li = Styled.li``;
const Span = Styled.span``;
const Img = Styled.img``;
const Input = Styled.input``;
