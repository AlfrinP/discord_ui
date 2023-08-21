import React from "react";
import styled from "styled-components";
import chat1 from "../../Assets/chat (1).svg";
import chat2 from "../../Assets/chats.svg";
import phone from "../../Assets/Property 1=phone.svg";
import video from "../../Assets/Property 1=video-camera.svg";
import users from "../../Assets/Property 1=users.svg";
import setting from "../../Assets/Property 1=setting (1).svg";
import plus from "../../Assets/icons.svg";
import user from "../../Assets/Property 1=Image 8.png";

export default function Navbar() {
  return (
    <>
      <Mdiv>
        <Top src={chat2} className="chat1" />
        <Mid>
          <Top src={chat2} className="chat2" />
          <Img src={phone} />
          <Img src={video} />
          <Img src={users} />
          <Img src={setting} />
        </Mid>
        <Bottom>
          <Img src={plus} />
          <Img src={user} className="user" />
        </Bottom>
      </Mdiv>
    </>
  );
}

const Mdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1.5px solid red;
  width: 80px;
  height: 100vh;
  padding: 20px 0 50px 0;
`;

const Top = styled.img`
  width: 30px;
  &.chat1{
    filter: invert(1);
  }
`;

const Mid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  &.user {
    width: 45px;
  }
  width: 25px;
`;