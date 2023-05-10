import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateClient from "./Pages/UpdateClient";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/updateclient/:id" element={<UpdateClient />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
