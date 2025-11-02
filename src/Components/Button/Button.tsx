import styles from "./Button.module.css";

function Button() {
  let count = 0;
  const handleClick = (name: string) => {
    if (count < 3){
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me `);
    }
  };
  return (
  <button onClick={() => handleClick("Bro")} className={styles.brobutton}>
    Click me 😀
  </button>
)}



export default Button;
