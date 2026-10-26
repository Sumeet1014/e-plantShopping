import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();

    window.history.pushState({}, "", "/plants");
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo(0, 0);
  };

  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  return (
    <main className="cart-page">
      <nav className="navbar">
        <a href="/">Paradise Nursery</a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            Cart 🛒
            <span className="cart_quantity_count">
              {totalItems}
            </span>
          </a>
        </div>
      </nav>

      <section className="cart-content">
        <h1>Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to your cart.</p>

            <a
              href="/plants"
              className="get-started-button"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <div className="cart-container">
              {cart.map((item) => (
                <article
                  className="cart-row"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h3>{item.name}</h3>

                    <p>
                      Unit Price: ₹{item.price}
                    </p>

                    <p>
                      Total Cost: ₹
                      {item.price * item.quantity}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          handleDecrement(item)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          handleIncrement(item)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="cart-item-delete"
                      onClick={() =>
                        handleRemove(item)
                      }
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-summary">
              <h2>
                Total Amount: ₹{totalAmount}
              </h2>

              <p>
                Total Items: {totalItems}
              </p>

              <div className="cart-actions">
                <a
                  href="/plants"
                  className="get-started-button"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </a>

                <button onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
