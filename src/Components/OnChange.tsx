import { useState } from "react";

function OnChange() {
  const [name, setName] = useState("");

  function handleNameChange(event: any) {
    setName(event.target.value);
  }

  return (
    <>
      <div className="onchange-container">
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>
      </div>
    </>
  );
}

export default OnChange;
