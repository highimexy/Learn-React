import { useState } from "react";

function OnChange() {
  const [name, setName] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [comment, setComment] = useState("");

  function handleNameChange(event: any) {
    setName(event.target.value);
  }

  function handleQuantityChange(event: any) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event: any) {
    setComment(event.target.value);
  }
  return (
    <>
      <div className="onchange-container">
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>

        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        ></input>
        <p>Quantity: {quantity}</p>

        <textarea
          placeholder="Leave a message for specific delivery instruction"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <p>Comment: {comment}</p>
      </div>
    </>
  );
}

export default OnChange;
