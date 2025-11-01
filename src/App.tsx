import Button from "./assets/Button/Button.tsx";
import Student from "./assets/Components/Student.tsx";

function App() {
  return (
    <>
      <Student name="Sponge Bob" age={30} isStudent={true} />
      <Student name="Patrick" age={24} isStudent={false} />
      <Student name="Barcio Senior" age={48} isStudent={false} />
      <Student />
      <Button></Button>
    </>
  );
}

export default App;
