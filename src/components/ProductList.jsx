import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 399,
        image:
          "https://images.unsplash.com/photo-1593482892290-f54927ae2b43?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 499,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 299,
        image:
          "https://images.unsplash.com/photo-1572688484438-313a6e50c1b9?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 4,
        name: "Areca Palm",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1597055181300-e3633a917d3f?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 449,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 6,
        name: "Boston Fern",
        price: 349,
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },

  {
    category: "Succulents",
    plants: [
      {
        id: 7,
        name: "Jade Plant",
        price: 249,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 8,
        name: "Aloe Vera",
        price: 199,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 9,
        name: "Echeveria",
        price: 179,
        image:
          "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 10,
        name: "Haworthia",
        price: 229,
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 11,
        name: "Zebra Cactus",
        price: 279,
        image:
          "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 12,
        name: "String of Pearls",
        price: 329,
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },

  {
    category: "Tropical Plants",
    plants: [
      {
        id: 13,
        name: "Monstera",
        price: 699,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 14,
        name: "Bird of Paradise",
        price: 899,
        image:
          "https://images.unsplash.com/photo-1597055181300-e3633a917d3f?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 15,
        name: "Calathea",
        price: 549,
        image:
          "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 16,
        name: "Philodendron",
        price: 499,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 17,
        name: "Alocasia",
        price: 649,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 18,
        name: "Pothos",
        price: 299,
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo(0, 0);
}

export default function ProductList() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const addedToCart = {};

  cart.forEach((item) => {
    addedToCart[item.name] = true;
  });

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="shop-page">
      <nav className="navbar">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Paradise Nursery
        </a>

        <div className="nav-links">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Home
          </a>

          <a
            href="/plants"
            onClick={(e) => {
              e.preventDefault();
              navigate("/plants");
            }}
          >
            Plants
          </a>

          <a
            href="/cart"
            onClick={(e) => {
              e.preventDefault();
              navigate("/cart");
            }}
          >
            Cart 🛒
            <span className="cart_quantity_count">
              {cartQuantity}
            </span>
          </a>
        </div>
      </nav>

      <header className="shop-header">
        <h1>Our Plants</h1>
        <p>
          Explore our collection of beautiful houseplants.
        </p>
      </header>

      {plantsArray.map((category) => (
        <section
          className="product-list"
          key={category.category}
        >
          <h2>{category.category}</h2>

          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article
                className="plant-card"
                key={plant.id}
              >
                <img
                  className="plant-image"
                  src={plant.image}
                  alt={plant.name}
                />

                <div className="plant-info">
                  <h3>{plant.name}</h3>

                  <p className="plant-price">
                    ₹{plant.price}
                  </p>

                  <button
                    onClick={() =>
                      handleAddToCart(plant)
                    }
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name]
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
