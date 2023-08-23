import Styled from "styled-components";
import React from "react";
import profile from "../../Assets/Property 1=Image 19.png";
import icon1 from "../../Assets/Property 1=phone.svg";
import icon2 from "../../Assets/Property 1=video-camera.svg";
import icon3 from "../../Assets/Option.svg";

export default function Message() {
  const icons = [icon1, icon2, icon3];
  return (
    <Mdiv>
      <Top>
        <Left>
          <Img src={profile} className="profile" />
          <Div
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <Span style={{fontSize:'1rem',fontWeight:'600'}}>Michael</Span>
            <Span style={{fontSize:'0.65rem',fontWeight:'600'}}>Typing...</Span>
          </Div>
        </Left>
        <Right>
          <Ul className="right">
            {icons.map((icons) => (
              <Li className="right">
                <Img src={icons} className="icons" />
              </Li>
            ))}
          </Ul>
        </Right>
      </Top>
      <Bottom>
      <Span>Today</Span>
        <Ul>
          <Li>
            <Img />
          </Li>
          <Li>
            <Div>
              <Input /> <Img />
            </Div>
          </Li>
          <Li>
            <Img />
          </Li>
        </Ul>
      </Bottom>
    </Mdiv>
  );
}
const Mdiv = Styled.div`
width:550px;
color:white;
padding:10px`;
const Top = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
height:60px;`;
const Bottom = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
height:calc(100vh - 60px )
`;
const Left = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;`;
const Right = Styled.div``;
const Div = Styled.div``;
const Ul = Styled.ul`
&.right{
  display:flex;
align-items:center;
gap:10px;
}`;
const Li = Styled.li`
&.right{
  border:1.5px solid red;
  border-radius:50%;
  padding:10px;
}`;
const Span = Styled.span``;
const Img = Styled.img`
background:inherit;
&.icons{
  width:20px;
}
&.profile{
  width:55px;
}`;
const Input = Styled.input``;
