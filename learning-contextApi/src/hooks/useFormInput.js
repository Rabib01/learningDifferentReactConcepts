import { useState } from "react";

/**
Use useFormInput.jsx.

The convention is:

useFormInput.jsx

Because:

useFormInput → camelCase for a custom hook
use prefix → makes it clear it's a React Hook
.jsx → appropriate if the file contains JSX (though a hook containing only JavaScript can also be .js)

So your folder would typically look like:
*/

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function hangleChange(e) {
    setValue(e.target.value);
  }

  const inputProps = {
    value,
    onChange: hangleChange,
  };

  return inputProps;
}
