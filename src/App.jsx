import React from "react";
import { Route, Routes } from "react-router-dom";
import router from "./router";
import NavbarLayouts from "./Layouts/NavbarLayouts";
import Footer from "./Layouts/Footer";
function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <NavbarLayouts />
      <Routes>
        {router.map((item, index) => (
          <Route key={index} element={item.element} path={item.path} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
