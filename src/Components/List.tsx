export type Fruit = {
  id: number;
  name: string;
  kcal: number;
};

type ListProps = {
  items: Fruit[];
  category: string;
};

function List(props: ListProps) {
  const itemList = props.items;
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE
  //fruits.sort((a,b) => a.kcal - b.kcal); // NUMERIC ORDER
  //fruits.sort((a, b) => b.kcal - a.kcal); // REVERSE NUMERIC ORDER

  // const lowCalFruits = fruits.filter(fruit => fruit.kcal < 100);
  //const highCalFruits = fruits.filter(fruit => fruit.kcal > 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.kcal}</b>
    </li>
  ));
  return <ol>{listItems}</ol>;
}

export default List;
