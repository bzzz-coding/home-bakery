import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import data from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const itemData = data.find((item) => item.id === id);
  if (!itemData) return null; // if itemData is null or undefined
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={itemData.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {itemData.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.75rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            <span>{formatCurrency(itemData.price)}<span>/{itemData.unit}</span></span>
        </div>
        
      </div>
      <div>{formatCurrency(itemData.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>&times;</Button>
    </Stack>
  );
};
export default CartItem;
