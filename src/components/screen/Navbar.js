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
import { Outlet } from "react-router";

export default function Navbar() {
  return (
    <div style={{width:'100%',height:'100vh', display:'flex'}}>
      <Mdiv>
        <div className="rounded-full bg-white p-2">
          <Top src={chat1} className="chat1 bg-white " />
        </div>
        <Mid>
          <Top src={chat2} className="chat2 w-[35px]" />
          <Img src={phone} />
          <Img src={video} />
          <Img src={users} />
          <Img src={setting} />
        </Mid>
        <Bottom>
          <div className="bg-[#797a7c] rounded-full w-[40px] h-[40px] flex items-center justify-center p-2">
          <Img src={plus} className="plus bg-inherit rounded-full"  />
            </div>
          <div className="bg-[#a8ff35] rounded-full w-[40px] h-[40px] flex items-center justify-center p-1">
            <Img src={user} className="user bg-inherit rounded-full" />
          </div>
        </Bottom>
      </Mdiv>
      <Outlet/>
    </div>
  );
}

const Mdiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1.5px solid #242c2e;
  padding: 50px 10px;
`;

const Top = styled.img``;

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
  width: 25px;
  &.user{
    width:100%;
  }
  &.plus{
    width:100%;
  }
`;
