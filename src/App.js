import Layout from "./Layout";
import NoPage from "./Pages/NoPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Urlap from "./Pages/Urlap";
import Adatok from "./Pages/Adatok";
import Kezdolap from "./Pages/Kezdolap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Kezdolap />} />
          <Route path="urlap" element={<Urlap />}/>
          <Route path="adatok" element={<Adatok />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
