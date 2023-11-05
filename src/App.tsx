// views
import { About, Admin, Hero, Projects } from "./views";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import { Menu } from "./components";


function App() {
  return (
    <>
<BrowserRouter>

      <Routes>
            <Route path="/Admin" element={<Admin />}> </Route>
              <Route path="/" element={ <Hero />}> </Route>
      </Routes>


</BrowserRouter>

    </>


);
}


export default App;
