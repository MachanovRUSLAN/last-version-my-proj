import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeAll, removeFromCart } from "../../redux/Slice/cart-slice";
import { Button, Row, Col } from "react-bootstrap";

function Cart() {
  const { cart } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  return (
    <div className="cart">
      {cart?.length &&
        cart.map((product) => {
          return (
            <div className="card-page" key={product.id}>
              <table>
                <thead>
                  <tr>
                    <th>img</th>
                    <th>name</th>
                    <th>price</th>
                    <th>total</th>

                    <th>remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={2}>
                      <img src={product.img} />
                    </td>
                    <td>{product.name.slice(0, 8)}</td>
                    <td>{product.price}$</td>
                    <td>{product.price * product.quantity}$</td>

                    <td className="buttons-remove">
                      <Button
                        onClick={() => {
                          dispatch(removeFromCart(product.id));
                        }}
                      >
                        Remove
                      </Button>
                      <Button onClick={() => dispatch(removeAll(product.id))}>
                        Remove all
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
}

export default Cart;
