import React from "react";
import "./App.css";
// import Contact from "./components/Contact.js";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      {
        /* <Contact
        avatar="https://randomuser.me/api/portraits/women/54.jpg"
        name="Anita Sutton"
        online={true}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
        name="Jim George"
        online={false}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/7.jpg"
        name="Charlotte Ryan"
        online={true}
      /> */
        <ContactList />
      }
    </div>
  );
}

export default App;
