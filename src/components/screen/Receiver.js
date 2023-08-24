import React from "react";
import docs from "../../Assets/Component 96.svg";

function Receiver() {
  const messages = [
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

  return (
    <div className="h-full w-1/2">
      <ul>
        {messages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Receiver;
