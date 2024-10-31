import Pizza from "./Pizza";
import { pizzaData } from "./data";

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length > 0;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

export default Menu;
