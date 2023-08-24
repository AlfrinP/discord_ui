import "./App.css";
import Navbar from "./components/screen/Navbar";
import Message from "./components/screen/Message";
import Profile from "./components/screen/Profile";
import Contact from "./components/screen/Contact";

function App() {
  return (
    <div className="app flex items-center">
      <div className=" w-1/12 h-screen"><Navbar /></div>
      <div className=" w-1/5 h-screen "><Profile /></div>
      <div className=" w-6/12 h-screen" ><Message /></div>
      <div className=" w-1/5 h-screen"><Contact /></div>
    </div>
  );
}

export default App;
