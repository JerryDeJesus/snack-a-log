// DEPENDENCIES
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Home from "./pages/Home.js";
import Index from "./pages/Index.js";
import Show from "./pages/Show.js";
import Edit from "./pages/Edit.js";
import New from "./pages/New.js";

// COMPONENTS
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/snacks" element = {<Index />} />
            <Route path = "/snacks/new" element = {<New />} />
            <Route path = "/snacks/:id" element = {<Show />} />
            <Route path = "/snacks/:id/edit" element = {<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
