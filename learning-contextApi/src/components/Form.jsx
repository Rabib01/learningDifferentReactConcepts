import { useState } from "react";
/**
There’s a piece of state (firstName and lastName).
There’s a change handler (handleFirstNameChange and handleLastNameChange).
There’s a piece of JSX that specifies the value and onChange attributes for that input.

Here we can extract the repetitive logic into this useFormInput custom Hook

*/

export default function Form() {
  const [firstName, setFirstName] = useState("Mary");
  const [lastName, setLastName] = useState("Poppins");

  function handleChangeFirstName(e) {
    return setFirstName(e.target.value);
  }

  function handleChangeLastName(e) {
    return setLastName(e.target.value);
  }

  return (
    <div>
      <label>
        First Name :
        <input type="text" value={firstName} onChange={handleChangeFirstName} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleChangeLastName} />
      </label>
      <p style={{ marginTop: "20px" }}>
        <b>
          Hello Motherfucker who goes by the name: {firstName} {lastName}{" "}
        </b>
      </p>
    </div>
  );
}
