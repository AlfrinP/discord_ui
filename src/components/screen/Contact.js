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
      content: [<Img src={image11} />, <Img src={image12} />],
    },
    {
      heading: "Files",
      subheading: "12 files",
      view: "view all",
      content: (
        <Div>
          <Div>
            <Img src={docs} />
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
        <Div>
          <Img src={profile} className="profile" />
          <Span className="name">Michael</Span>
          <Span className="status">Online</Span>
        </Div>
        <Div className="content container">
          {content.map((items, index) => (
            <React.Fragment key={index}>
              <Div>
                <Div className="content top">
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
`;
const Top = styled.div``;
const Bottom = styled.div``;
const Div = styled.div``;
const Span = styled.span``;
const Img = styled.img`
width:30px;`;
const Content = styled.div``;
