import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import data from "../data/items.json";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => <CartItem key={item.id} {...item} />)}
          <div className="ms-auto fw-bold fs-5">
            Total {formatCurrency(cartItems.reduce((sum, cartItem) => {
              const itemData = data.find(item => item.id === cartItem.id);
              return sum + (itemData?.price || 0) * cartItem.quantity;
            }, 0))}
          </div>
        </Stack>
      </Offcanvas.Body>

    </Offcanvas>
  );
};
export default ShoppingCart;
