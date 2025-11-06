import { useState } from "react";
import Divider from "./Divider";

function OnChange() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event: any) {
    setName(event.target.value);
  }

  function handleQuantityChange(event: any) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event: any) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event: any) {
    setPayment(event.target.value);
  }

  function handeShippingChange(event: any) {
    setShipping(event.target.value);
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
        <Divider />
        <textarea
          placeholder="Leave a message for specific delivery instruction"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <p>Comment: {comment}</p>
        <Divider />
        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>
        <Divider />
        <div className="onchange-radio">
          <label>
            <input
              type="radio"
              value="Pick Up"
              checked={shipping === "Pick Up"}
              onChange={handeShippingChange}
            />
            Pick Up
          </label>
          <label>
            <input
              type="radio"
              value="Delivery"
              checked={shipping === "Delivery"}
              onChange={handeShippingChange}
            />
            Delivery
          </label>
        </div>
        <p>Shipping: {shipping}</p>
      </div>
    </>
  );
}

export default OnChange;
