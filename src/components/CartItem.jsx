
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
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

  return (
    <main className="cart-page">
      <nav className="navbar">
        <a href="/">Paradise Nursery</a>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">Cart 🛒 ({totalItems})</a>
        </div>
      </nav>

      <section className="cart-content">
        <h1>Your Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🌱</h2>
            <p>Add some beautiful plants to get started.</p>
            <a className="continue-button" href="/plants">
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>Unit price: ₹{item.price}</p>
                  <p>
                    Item total: ₹{item.price * item.quantity}
                  </p>

                  <div className="quantity-controls">
                    <button
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}

            <div className="cart-summary">
              <h2>Total: ₹{totalAmount}</h2>
              <p>Total items: {totalItems}</p>

              <div className="cart-actions">
                <a className="continue-button" href="/plants">
                  Continue Shopping
                </a>

                <button
                  onClick={() => alert("Checkout Coming Soon!")}
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
