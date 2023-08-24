import React from "react";
import docs from "../../Assets/Component 96.svg";

function MessageItems() {
  const Receivermessages = [
    "hello, Nazar Ali",
    "Good afternoon, may I ask for your help to email me a real estate landing page? I'll send more details as soon as you approve it. Thanks!",
    <div className="flex items-center flex-col" key="document">
      <div className="bg-gray-800 p-5 rounded-2xl">
        <div className="w-full box">
          <img src={docs} className="w-20 bg-transparent" alt="Document" />
          <span className="text-xs w-full bg-transparent">
            Brief Project Real Es...
          </span>
        </div>
        <div className="flex items-center justify-between bg-transparent text-xs mt-2">
          <span>DOCS</span>
          <span>32KB</span>
        </div>
      </div>
      <span className="text-right w-full text-xs mt-1">12:45 PM</span>
    </div>,
  ];
  const Sendermessages = [
    "",
    "",
    "hai, Michael",
    "Thank you or the offer you gave me, yes i will accept the project from you, for the brief please send it now so i can study it first",
    "Ohh i see, for payment we can directly discuss now",
  ];

  return (
    <div className=" flex items-center h-full w-full">
      <ul>
        {Receivermessages.map((item, index) => (
          <li key={index} className="bg-blue">{item}</li>
        ))}
      </ul>
      <ul>
        {Sendermessages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageItems;
