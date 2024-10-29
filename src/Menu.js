import Pizza from "./Pizza";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach and ricotta cheese"
        photoName="/pizzas/spinaci.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mushrooms"
        photoName="/pizzas/funghi.jpg"
        price={10}
      />
    </main>
  );
}

export default Menu;
