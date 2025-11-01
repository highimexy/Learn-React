import Button from "./assets/Button/Button.tsx";
import Student from "./assets/Components/Student.tsx";

function App() {
  return (
    <>
      <Student name="Sponge Bob" age={30} isStudent={true}/>
      <Button></Button>
    </>
  );
}

export default App;
