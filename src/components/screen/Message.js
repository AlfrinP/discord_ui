import Styled from "styled-components";
import React from "react";
import profile from "../../Assets/Property 1=Image 19.png";
import icon1 from "../../Assets/Property 1=phone.svg";
import icon2 from "../../Assets/Property 1=video-camera.svg";
import icon3 from "../../Assets/Option.svg";
import thumbsup from "../../Assets/emojione_thumbs-up.svg";
import fire from "../../Assets/Group 3465375.svg";
import threewhite from "../../Assets/White Option.svg";
import face from "../../Assets/Group 3465392.svg";
import face1 from "../../Assets/Group 3465380.svg";
import reply from "../../Assets/Property 1=white share.svg";
import mic from "../../Assets/Group 3465393.svg";
import clip from "../../Assets/attachment 2.svg";

export default function Message() {
  const icons = [icon1, icon2, icon3];
  return (
    <Mdiv className="h-screen">
      <Top className="h-[55px]">
        <Left>
          <Img src={profile} className="profile" />
          <Div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Span style={{ fontSize: "1rem", fontWeight: "600" }}>Michael</Span>
            <Span style={{ fontSize: "0.65rem", fontWeight: "600" }}>
              Typing...
            </Span>
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
      <hr className="w-full" style={{ width: "100%" , borderTop:'1.5px solid #242c2e' }}/>
      <Mid className="w-full flex flex-col">
        <Span>Today</Span>
        <div className=" h-full w-full">
          <div className="flex flex-col justify-center w-fit max-w-[50%]  ">
            <div className="w-fit p-2 bg-white rounded-r-lg rounded-b-lg relative">
              Hi, Nazir Ali
              <div className="sideicons flex gap-1 absolute left-80 top-0">
                <Img src={reply} className="rounded-full p-1 w-6 border-2" />
                <Img src={face} className="rounded-full p-1 w-6 border-2" />
                <Img
                  src={threewhite}
                  className="rounded-full p-1 w-6 border-2"
                />
              </div>
            </div>
            <div className="bottom icons flex gap-2 justify-between">
              <div className="flex gap-1 w-fit">
                <Img src={thumbsup} />
                <Img src={fire} />
              </div>
              <span>12:45 PM</span>
            </div>
          </div>
          <div className="flex flex-col justify-center w-fit max-w-[50%] ">
            <div className="w-fit p-2 bg-white rounded-r-lg rounded-b-lg relative">
              Good afternoon, may i ask your help to make a reel estate landing
              pages, for maore details i will send as soon as you approve it.
              <div className="sideicons flex gap-1 absolute left-80 top-0">
                <Img src={reply} className="rounded-full p-1 w-6 border-2" />
                <Img src={face} className="rounded-full p-1 w-6 border-2" />
                <Img
                  src={threewhite}
                  className="rounded-full p-1 w-6 border-2"
                />
              </div>
            </div>
            <div className="bottom icons flex gap-2 justify-between">
              <div className="flex gap-1 w-fit">
                <Img src={thumbsup} />
                <Img src={fire} />
              </div>
              <span>12:45 PM</span>
            </div>
          </div>
          <div className="flex flex-col justify-center w-fit relative float-right">
            <div className="w-fit p-2 bg-white rounded-l-lg rounded-b-lg">
              Hello,Nazir Ali
            </div>
            <div className="bottom icons flex gap-2 justify-between">
              <div className="flex gap-1 w-fit">
                <Img src={thumbsup} />
                <Img src={fire} />
              </div>
              <span>12:45 PM</span>
            </div>
            <div className="sideicons flex gap-1 absolute right-[165px] top-0">
              <Img src={reply} className="rounded-full p-1 w-6 border-2" />
              <Img src={face} className="rounded-full p-1 w-6 border-2" />
              <Img src={threewhite} className="rounded-full p-1 w-6 border-2" />
            </div>
          </div>
          <div className="flex flex-col justify-center w-fit max-w-[50%]  ">
            <div className="w-fit p-2 bg-white rounded-r-lg rounded-b-lg relative">
              Hi, Nazir Ali
              <div className="sideicons flex gap-1 absolute left-80 top-0">
                <Img src={reply} className="rounded-full p-1 w-6 border-2" />
                <Img src={face} className="rounded-full p-1 w-6 border-2" />
                <Img
                  src={threewhite}
                  className="rounded-full p-1 w-6 border-2"
                />
              </div>
            </div>
            <div className="bottom icons flex gap-2 justify-between">
              <div className="flex gap-1 w-fit">
                <Img src={thumbsup} />
                <Img src={fire} />
              </div>
              <span>12:45 PM</span>
            </div>
          </div>
        </div>
      </Mid>
      <Bottom className="h-[60px] border-t-1">
        <Ul className="flex gap-5 w-full justify-between items-center">
          <Li className="w-fit">
            <Img src={clip} />
          </Li>
          <Li className="w-full ">
            <Div className=" flex items-center justify-between bg-inherit gap-2 rounded-xl bg-slate-700 p-2">
              <Input
                placeholder="Message to Teddy..."
                className="w-full p-2 bg-inherit"
              />{" "}
              <div className="p-2 rounded-full bg-white">
                <Img src={face1} className="" />
              </div>
            </Div>
          </Li>
          <Li className="w-fit">
            <Img src={mic} />
          </Li>
        </Ul>
      </Bottom>
    </Mdiv>
  );
}
const Mdiv = Styled.div`
color:white;
padding:5px 0;
border-right:1.5px solid #242c2e;`;
const Top = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
padding: 0 10px;`;
const Mid = Styled.div`
display:flex;
width:100%;
align-items:center;
height: calc(100vh - 125px);
padding: 0 10px;`;
const Bottom = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding: 0 10px;
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
  border:1.5px solid #242c2e;
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
  width:50px;
}`;
const Input = Styled.input``;
