type StudentProps = {
  name?: string;
  age?: number;
  isStudent?: boolean;
};

function Student({
  name = "Guest",
  age = 18,
  isStudent = false,
}: StudentProps) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;
