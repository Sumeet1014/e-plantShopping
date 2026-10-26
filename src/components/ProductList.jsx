
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b43?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c1b9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Areca Palm",
    category: "Air Purifying",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1597055181300-e3633a917d3f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "Air Purifying",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Boston Fern",
    category: "Air Purifying",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Jade Plant",
    category: "Succulents",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Aloe Vera",
    category: "Succulents",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Echeveria",
    category: "Succulents",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Zebra Cactus",
    category: "Succulents",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "String of Pearls",
    category: "Succulents",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 13,
    name: "Monstera",
    category: "Tropical Plants",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Bird of Paradise",
    category: "Tropical Plants",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1597055181300-e3633a917d3f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Calathea",
    category: "Tropical Plants",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Philodendron",
    category: "Tropical Plants",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Alocasia",
    category: "Tropical Plants",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Pothos",
    category: "Tropical Plants",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = [
  "Air Purifying",
  "Succulents",
  "Tropical Plants",
];

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo(0, 0);
}

function PlantImage({ plant }) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80";

  return (
    <img
      className="plant-image"
      src={plant.image}
      alt={plant.name}
      loading="lazy"
      onError={(event) => {
        if (event.currentTarget.src !== fallbackImage) {
          event.currentTarget.src = fallbackImage;
        }
      }}
    />
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="shop-page">
      <nav className="navbar">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            navigate("/");
          }}
        >
          Paradise Nursery
        </a>

        <div className="nav-links">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
          >
            Home
          </a>

          <a
            href="/plants"
            onClick={(event) => {
              event.preventDefault();
              navigate("/plants");
            }}
          >
            Plants
          </a>

          <a
            href="/cart"
            onClick={(event) => {
              event.preventDefault();
              navigate("/cart");
            }}
          >
            Cart 🛒 ({cartCount})
          </a>
        </div>
      </nav>

      <header className="shop-header">
        <h1>Find Your Perfect Plant</h1>
        <p>Bring nature home with our beautiful collection.</p>
      </header>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = items.some(
                  (item) => item.id === plant.id
                );

                return (
                  <article className="plant-card" key={plant.id}>
                    <PlantImage plant={plant} />

                    <div className="plant-info">
                      <h3>{plant.name}</h3>
                      <p className="plant-price">
                        ₹{plant.price}
                      </p>

                      <button
                        disabled={isAdded}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {isAdded
                          ? "Added to Cart ✓"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}
