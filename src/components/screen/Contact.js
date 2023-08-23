import React from "react";
import styled from "styled-components";
import x from "../../Assets/Vector.svg";
import profile from "../../Assets/Property 1=Image 19.png";
import image11 from "../../Assets/image_processing20220225-29217-hv4dvv.jpg";
import image12 from "../../Assets/image_processing20220305-7813-19y4c1j.jpg";
import docs from "../../Assets/Component 96.svg";

export default function Contact() {
  const content = [
    {
      heading: "Media",
      subheading: "14 pictures",
      view: "view all",
      content: [
        <Img src={image11} className="image" />,
        <Img src={image12} className="image" />,
        <Img src={image12} className="image" />,
      ],
    },
    {
      heading: "Files",
      subheading: "12 files",
      view: "view all",
      content: (
        <Div style={{width:'100px', height:'50px'}}>
          <Div style={{width:'100%'}}>
            <Img src={docs}/>
            <Span>Brief Project Real Es...</Span>
          </Div>
          <Div>
            <Span>DOCS</Span>
            <Span>32KB</Span>
          </Div>
        </Div>
      ),
    },
  ];

  return (
    <Mdiv>
      <Top>
        <Span>Contact details</Span>
        <Span className="close">
          <Img src={x} />
        </Span>
      </Top>
      <Bottom>
        <Div className="mainprofile">
          <Img src={profile} className="profile" />
          <Span className="name">Michael</Span>
          <Span className="status">Online</Span>
        </Div>
        <Div className="content container">
          {content.map((items, index) => (
            <React.Fragment key={index}>
              <Div className="contentfirst">
                <Div className="contenttop">
                  <Span>{items.heading}</Span>
                  <Span>{items.subheading}</Span>
                </Div>
                <Span>{items.view}</Span>
              </Div>
              <Content>{items.content}</Content>
            </React.Fragment>
          ))}
        </Div>
      </Bottom>
    </Mdiv>
  );
}

const Mdiv = styled.div`
  height: 100vh;
  width: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Bottom = styled.div``;
const Div = styled.div`
  &.mainprofile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  &.contentfirst {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  &.contenttop {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
  }
`;
const Span = styled.span`
  &.online {
    font-size: 1rem;
  }
  &.status {
    font-size: 0.75rem;
  }
`;
const Img = styled.img`
  &.image {
    width: 100px;
    border-radius: 10px;
  }
  &.profile {
    width: 120px;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px 0;
`;
