import Pizza from "./Pizza";
import { pizzaData } from "./data";

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length > 0;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

export default Menu;
