import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function getPage() {
  const path = window.location.pathname;

  if (path === "/plants") return "plants";
  if (path === "/cart") return "cart";
  if (path === "/about") return "about";

  return "home";
}

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPage());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (nextPage) => {
    const paths = {
      home: "/",
      plants: "/plants",
      cart: "/cart",
      about: "/about",
    };

    window.history.pushState({}, "", paths[nextPage]);
    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  const handleGetStartedClick = () => {
    navigate("plants");
  };

  if (page === "plants") {
    return <ProductList />;
  }

  if (page === "cart") {
    return <CartItem />;
  }

  if (page === "about") {
    return <AboutUs />;
  }

  return (
    <div className="app-container">
      <div className="background-image">
        <nav className="navbar landing-nav">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              navigate("home");
            }}
          >
            Paradise Nursery
          </a>

          <div className="nav-links">
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                navigate("home");
              }}
            >
              Home
            </a>

            <a
              href="/plants"
              onClick={(event) => {
                event.preventDefault();
                navigate("plants");
              }}
            >
              Plants
            </a>

            <a
              href="/about"
              onClick={(event) => {
                event.preventDefault();
                navigate("about");
              }}
            >
              About Us
            </a>

            <a
              href="/cart"
              onClick={(event) => {
                event.preventDefault();
                navigate("cart");
              }}
            >
              Cart 🛒
            </a>
          </div>
        </nav>

        <section className="hero-content">
          <p className="eyebrow">
            BRING NATURE HOME
          </p>

          <h1>Welcome to Paradise Nursery</h1>

          <p>
            Discover beautiful houseplants and transform
            your space into a peaceful green paradise.
          </p>

          <button
            className="get-started-button"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}
