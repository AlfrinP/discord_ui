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
        <Right className="w-[20px] h-[45px] rounded-full flex items-center justify-center">
          <Img src={dot} className="dot rounded-full" />
        </Right>
      </Top>
      <hr style={{ width: "100%" , borderTop:'1.5px solid #242c2e' }}></hr>
      <Mid>
        <Div className="searchbar w-full relative">
          <Img src={search} className="searchbar left-[5px]" />
          <Input placeholder=" Search or start new chat..." className="py-2 pl-5" />
        </Div>
        <Ul className="online">
          <Li style={{ color: "white", fontWeight: "600", fontSize:'1rem' }}>Online Now</Li>
          <Li style={{ color: "#292d2e" }} className="online">
            More <Img src={arrow} className="arrow" />
          </Li>
        </Ul>
        <Ul className="firstslide">
          {Items.slice(0, 5).map((item) => (
            <Li key={item.name} className="firstslidelist">
              <Profile1 src={item.pic} />
              <Span
                style={{
                  color: "#292d2e",
                  fontSize: "0.75rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                More
              </Span>
            </Li>
          ))}
        </Ul>
      </Mid>
      <Bottom>
        <Div className="message font" style={{fontSize:'1rem',}}>
          Messages
          <Span
            style={{
              width: "30px",
              background: "blue",
              padding: "2px 7px",
              borderRadius: "40px",
              fontSize: "0.65rem",
              textAlign: "center",
            }}
          >
            20
          </Span>
        </Div>
        <Ul className="secondslide">
          {Items.slice(0, 5).map((item) => (
            <Li key={item.name} className="secondslide">
              <Div className="secondslide">
                <Profile1 src={item.pic} />
                <Text>
                  <Span
                    style={{
                      color: "white",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Span>
                  <Span style={{ color: "#717375", fontSize: "0.75rem" }}>
                    {item.message}
                  </Span>
                </Text>
              </Div>

              <Time>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  border-right: 1.5px solid #242c2e;
  height:100vh;
`;

const Div = styled.div`
  &.searchbar {
    display: flex;
    align-items: center;
    width: 100%;
  }
  &.secondslide {
    display: flex;
    gap: 10px;
  }
  &.message {
    width: 100%;
    padding: 0 0 10px 0;
    color: white;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  padding: 0 10px;
`;

const Mid = styled.div`
  display: flex;
  padding: 0 10px;
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
  padding: 0 10px;
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
    width: 100%;
    padding: 15px 0;
  }

  &.firstslide {
    justify-content: space-evenly;
    width: 100%;
  }

  &.secondslide {
    flex-direction: column;
    gap: 22px;
    width: 100%;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  &.firstslidelist {
    flex-direction: column;
    justify-content: center;
    gap: 5.5px;
  }
  &.secondslide {
    justify-content: space-between;
  }
  &.online {
    width: 100px;
    font-size: 0.85rem;
    gap: 5px;
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
  color: rgb(41, 45, 46);
  font-size: 0.65rem;
  width: fit-content;
  gap: 5px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Right = styled.div`
  border-radius: 50%;
  border: 1.5px solid #242c2e;
  width: 45px;
  padding: 5px;
`;
const Input = styled.input`
  border-radius: 10px;
  color: #292d2e;
  background: url("../../Assets/Music-dashboard-icons-1.svg") no-repeat left;
  width: 100%;
  border: 1px solid #242c2e;
  font-size: "0.5rem";
`;
const Profile1 = styled.img`
  width: 35px;
  border-radius: 50%;
`;
const Img = styled.img`
  &.greydot {
    width: 10px;
  }
  &.searchbar {
    width: 20px;
    position: absolute;
    z-index: 1;
  }
  &.arrow {
    width: 15px;
  }
`;
