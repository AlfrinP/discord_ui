import React from "react";
import styled from "styled-components";
import x from "../../Assets/Vector.svg";
import profile from "../../Assets/Property 1=Image 19.png";
import image11 from "../../Assets/image_processing20220225-29217-hv4dvv.jpg";
import image12 from "../../Assets/image_processing20220305-7813-19y4c1j.jpg";
import docs from "../../Assets/Component 96.svg";
import { useNavigate,useLocation } from "react-router";

export default function Contact() {
  const navigate = useNavigate();
  const location = useLocation();
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
      content: [
        <Div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Div
            style={{
              background: "#242c2e",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <Div style={{ width: "100%" }} className="box">
              <Img
                src={docs}
                style={{ width: "20px", background: "inherit" }}
              />
              <Span
                style={{
                  fontSize: "0.75rem",
                  width: "100%",
                  background: "inherit",
                }}
              >
                Brief Project Real Es...
              </Span>
            </Div>
            <Div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "inherit",
                fontSize: "0.5rem",
                marginTop: "5px",
              }}
            >
              <Span>DOCS</Span>
              <Span>32KB</Span>
            </Div>
          </Div>
          <Span
            style={{
              textAlign: "right",
              width: "100%",
              fontSize: "0.65rem",
              marginTop: "2px",
            }}
          >
            12:45 PM
          </Span>
        </Div>,

        <Div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Div
            style={{
              background: "#242c2e",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <Div style={{ width: "100%" }} className="box">
              <Img
                src={docs}
                style={{ width: "20px", background: "inherit" }}
              />
              <Span
                style={{
                  fontSize: "0.75rem",
                  width: "100%",
                  background: "inherit",
                }}
              >
                Brief Project Real Es...
              </Span>
            </Div>
            <Div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "inherit",
                fontSize: "0.5rem",
                marginTop: "5px",
              }}
            >
              <Span>DOCS</Span>
              <Span>32KB</Span>
            </Div>
          </Div>
          <Span
            style={{
              textAlign: "right",
              width: "100%",
              fontSize: "0.65rem",
              marginTop: "2px",
            }}
          >
            12:45 PM
          </Span>
        </Div>,
      ],
    },
  ];

  return (
    <Mdiv className="absolute lg:relative top-0 left-0 right-0 bottom-0 w-full max-w-full lg:max-w-[280px] ">
      <Top>
        <Span style={{ fontWeight: "600" }}>Contact details</Span>
        <Span className="close cursor-pointer" onClick={() => navigate(-1)}>
          <Img src={x} />
        </Span>
      </Top>
      <hr style={{ width: "100%", borderTop: "1.5px solid #242c2e" }} />
      <Bottom>
        <Div className="mainprofile">
          <Span className="profile">
            <Img src={profile} className="profile" />
          </Span>
          <Span className="name">{location.pathname.split('/')[1]}</Span>
          <Span className="status">Online</Span>
        </Div>
        <Div className="content container">
          {content.map((items, index) => (
            <React.Fragment key={index}>
              <Div className="contentfirst">
                <Div className="contenttop">
                  <Span style={{ fontWeight: "600", fontSize: "0.85rem" }}>
                    {items.heading}
                  </Span>
                  <Span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: "600",
                      color: "#363a3b",
                    }}
                  >
                    {items.subheading}
                  </Span>
                </Div>

                <Span style={{ fontSize: "0.75rem", color: "#48a5c4" }}>
                  {items.view}
                  <hr
                    style={{
                      color: "#48a5c4",
                      marginTop: "2px",
                      width: "100%",
                    }}
                  />
                </Span>
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
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  flex: 1;
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;
const Bottom = styled.div`
  padding: 0 10px;
`;
const Div = styled.div`
  &.mainprofile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 5px;
  }
  &.contentfirst {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  &.contenttop {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
  }
  &.box {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #1e2628;
    padding: 10px;
    border-radius: 10px;
  }
`;
const Span = styled.span`
  background: inherit;
  &.online {
    font-size: 1rem;
  }
  &.status {
    font-size: 0.75rem;
  }
  &.close {
    border: 1.5px solid #232a2c;
    padding: 10px;
    border-radius: 50%;
  }
  &.profile {
    background: #48a5c4;
    border-radius: 50%;
  }
  &.name {
    font-weight: 600;
  }
  &.status {
    color: #48a5c4;
  }
`;
const Img = styled.img`
  &.image {
    width: 100px;
    border-radius: 10px;
  }
  &.profile {
    width: 55px;
    background: inherit;
    border-radius: 50%;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  padding: 10px 0;
`;
