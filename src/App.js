import "./App.css";
import Navbar from "./components/screen/Navbar";
import Message from "./components/screen/Message";
import Profile from "./components/screen/Profile";
import Contact from "./components/screen/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
            </>
          }
        >
          <Route
            path="/"
            element={
              <>
                <Profile />
              </>
            }
          >
            <Route
              path="/:name"
              element={
                <>
                  <Message />
                </>
              }
            >
              <Route
                path="/:name/contact"
                element={
                  <>
                    <Contact />
                  </>
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
