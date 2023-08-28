import "./App.css";
import Navbar from "./components/screen/Navbar";
import Message from "./components/screen/Message";
import Profile from "./components/screen/Profile";
import Contact from "./components/screen/Contact";

function App() {
  return (
    <div className="app flex items-center">
      <div className=" w-[5%] h-screen"><Navbar /></div>
      <div className=" w-[20%] h-screen "><Profile /></div>
      <div className=" w-[50%] h-screen" ><Message /></div>
      <div className=" w-[25%] h-screen"><Contact /></div>
    </div>
  );
}

export default App;
