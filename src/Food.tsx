function Food() {
  const food2: string = "Orange";
  const food3: string = "Banana";

  return (
    <ul>
      <li>Apple</li>
      <li>{food2}</li>
      <li>{food3.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
