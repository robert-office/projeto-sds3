import Datatable from "components/Datatable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import React from "react";

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <h1 className="text-primary">Hello World</h1>

        <Datatable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
