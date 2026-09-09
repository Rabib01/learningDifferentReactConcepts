import { useState } from "react";
import "./App.css";
import ThemeContextProvider from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
// import CustomHooks from "./components/CustomHooks";
// import SaveButton from "./components/SaveButton";

// function App() {
//   return (
//     <div className="app">
//       <ThemeContextProvider>
//         <div className="nav-bar">
//           <NavBar />
//         </div>
//         <div className="center">
//           <Card />
//         </div>
//       </ThemeContextProvider>
//       <div className="custom-hooks">
//         <div className="custom-hooks__container">
//           <h1>Custom Hooks: Sharing Logic between components</h1>
//           <CustomHooks />
//           <SaveButton />
//         </div>
//       </div>
//     </div>
//   );
// }

// This lower portion has the part where I am extracting custom hook from a component

import UseOnlineStatus from "./components/UseOnlineStatus";
import Form from "./components/Form";
import { useFormInput } from "./hooks/useFormInput";

function StatusBar() {
  const isOnline = UseOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
  const isOnline = UseOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

function App() {
  const firstNameProps = useFormInput("Mary");
  const lastNameProps = useFormInput("Poppins");

  return (
    <div className="app">
      <ThemeContextProvider>
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="center">
          <Card />
        </div>
      </ThemeContextProvider>

      {/* part wheere I am doing the extracting part */}

      {/* Now your components don’t have as much repetitive logic. More importantly, the code inside them describes what they want to do (use the online status!) rather than how to do it (by subscribing to the browser events). */}

      <div className="custom-hooks">
        <div className="custom-hooks__container">
          <h1>Custom Hooks: Sharing Logic between components</h1>
          <SaveButton />
          <StatusBar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="form-container">
            {/* <Form /> * This does not use the custom hook */}
          </div>
          <div className="form-container">
            {" "}
            {/** This does use the custom hook */}
            <label>
              First name:
              <input {...firstNameProps} />
            </label>
            <label>
              Last name:
              <input {...lastNameProps} />
            </label>
            <p>
              <b>
                Good morning, {firstNameProps.value} {lastNameProps.value}.
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
