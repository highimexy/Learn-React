import styles from "./Button.module.css";

function Button() {
  const handleClick = (e) => e.target.textContent = "OUCH! 😀";
  /* let count = 0;
  const handleClick = (name: string) => {
    if (count < 3){
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me `);
    }
  }; */
  return (
    <button onClick={(e) => handleClick(e)} className={styles.brobutton}>
      Click me 😀
    </button>
  );
}

export default Button;
