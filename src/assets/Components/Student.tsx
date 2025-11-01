function Student(
  props: { name: string } & { age: number } & { isStudent: boolean }
) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;
