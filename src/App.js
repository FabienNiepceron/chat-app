import React from "react";
import "./App.css";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <Contact
        image="https://randomuser.me/api/portraits/women/54.jpg"
        name="Anita Sutton"
        status={true}
      />
      <Contact
        image="https://randomuser.me/api/portraits/men/1.jpg"
        name="Jim George"
        status={false}
      />
      <Contact
        image="https://randomuser.me/api/portraits/women/7.jpg"
        name="Charlotte Ryan"
        status={true}
      />
    </div>
  );
}

export default App;
