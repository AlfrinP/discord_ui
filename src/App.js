import "./App.css";
import Navbar from "./components/screen/Navbar";
import Message from "./components/screen/Message";
import Profile from "./components/screen/Profile";
import Contact from "./components/screen/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Profile />
      <Message />
      <Contact />
    </div>
  );
}

export default App;
