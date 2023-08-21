import React from "react";
import styled from "styled-components";
import dot from "../../Assets/White Option.svg";
import profile1 from "../../Assets/Profile (1).jpg";
import profile2 from "../../Assets/Profile (9).jpg";
import profile3 from "../../Assets/Profile (3).jpg";
import profile4 from "../../Assets/Profile (4).jpg";
import profile5 from "../../Assets/Profile (5).jpg";
import profile6 from "../../Assets/Profile (6).jpg";
import profile7 from "../../Assets/Profile (11).jpg";
import search from "../../Assets/Music-dashboard-icons-1.svg";
import arrow from "../../Assets/Music-dashboard-icons.svg";
import greydot from "../../Assets/grey dots.svg";

const Items = [
  { name: "Roshan", pic: profile1, message: "Hi Good Morning" },
  { name: "Mick", pic: profile2, message: "Whatsup Brother" },
  { name: "Siddarth", pic: profile3, message: "Good Day" },
  { name: "Aisac", pic: profile4, message: "God Bless!!!" },
  { name: "Arjun", pic: profile5, message: "Nice to meet you!" },
  { name: "Parthiv", pic: profile6, message: "Busy" },
];

export default function Profile() {
  return (
    <Mdiv>
      <Top>
        <Left>
          <Profile1 src={profile7} />
          <Span1>
            <Span
              style={{ color: "white", fontSize: "1rem", fontWeight: "600" }}
            >
              Allen
            </Span>
            <Span
              style={{
                color: "#717375",
                fontSize: "0.75rem",
                fontWeight: "600",
              }}
            >
              My Account
            </Span>
          </Span1>
        </Left>
        <Right className="dot">
          <Img src={dot} className="dot"/>
        </Right>
      </Top>
      <Mid>
        <Div className="searchbar">
          <Img src={search} />
          <Input
            placeholder="Search or start new chat..."
            style={{ color: "#292d2e" }}
          />
        </Div>
        <Ul className="online">
          <Li style={{ color: "white" }}>Online Now</Li>
          <Li style={{ color: "#292d2e" }}>
            More <Img src={arrow} />
          </Li>
        </Ul>
        <Ul className="firstslide">
          {Items.slice(0, 5).map((item) => (
            <Li key={item.name} className="firstslidelist">
              <Profile1 src={item.pic} />
              <Span style={{ color: "#292d2e" }}>More</Span>
            </Li>
          ))}
        </Ul>
      </Mid>
      <Bottom>
        <Div className="message">
          Messages
          <Span>20</Span>
        </Div>
        <Ul className="secondslide">
          {Items.map((item) => (
            <Li key={item.name} className="secondslide">
              <Div className="secondslide">
                <Profile1 src={item.pic} />
                <Text>
                  <Span style={{ color: "white" }}>{item.name}</Span>
                  <Span style={{ color: "#717375" }}>{item.message}</Span>
                </Text>
              </Div>

              <Time style={{ color: "#292d2e" }}>
                <Img src={greydot} className="greydot" />
                12:45 PM
              </Time>
            </Li>
          ))}
        </Ul>
      </Bottom>
    </Mdiv>
  );
}

const Mdiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 18px;
  width: 325px;
  padding: 15px;
`;

const Div = styled.div`
  &.searchbar {
    display: flex;
    align-items: center;
  }
  &.secondslide {
    display: flex;
    gap: 10px;
  }
  &.message {
    width: 100%;
    padding: 0 0 10px 0;
    color: white;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

const Mid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  &.searchbar {
    display: flex;
    align-items: center;
  }
  height: fit-content;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: min-content;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;

  &.online {
    justify-content: space-between;
  }

  &.firstslide {
    justify-content: space-evenly;
    width: 100%;
  }

  &.secondslide {
    flex-direction: column;
    gap: 22px;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  &.firstslidelist {
    flex-direction: column;
  }
  &.secondslide {
    justify-content: space-between;
  }
`;

const Span = styled.span`
  width: 100%;
`;
const Span1 = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  border-radius: 50%;
  border:2px solid red;
  width: 47px;
  padding:5px;
`;
const Input = styled.input``;
const Profile1 = styled.img`
  width: 40px;
  border-radius: 50%;
`;
const Img = styled.img`
  &.greydot {
    width: 20px;
  }
  &.dot{
    border-radius: 50%;
  }
`;
