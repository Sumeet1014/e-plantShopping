import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const increaseQuantity = (id, quantity) => {
    dispatch(
      updateQuantity({
        id,
        quantity: quantity + 1,
      })
    );
  };

  const decreaseQuantity = (id, quantity) => {
    dispatch(
      updateQuantity({
        id,
        quantity: quantity - 1,
      })
    );
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <main className="cart-page">
      <nav className="navbar">
        <a href="/">Paradise Nursery</a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            Cart 🛒 ({totalItems})
          </a>
        </div>
      </nav>

      <section className="cart-content">
        <h1>Your Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🌱</h2>

            <p>
              Add some beautiful plants to get started.
            </p>

            <a
              className="continue-button"
              href="/plants"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            {items.map((item) => (
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
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() =>
                        decreaseQuantity(
                          item.id,
                          item.quantity
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        increaseQuantity(
                          item.id,
                          item.quantity
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() =>
                      deleteItem(item.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}

            <div className="cart-summary">
              <h2>
                Total Amount: ₹{totalAmount}
              </h2>

              <p>
                Total Items: {totalItems}
              </p>

              <div className="cart-actions">
                <a
                  className="continue-button"
                  href="/plants"
                >
                  Continue Shopping
                </a>

                <button
                  onClick={() =>
                    alert("Checkout Coming Soon!")
                  }
                >
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
