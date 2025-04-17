
import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, theme } from "antd";
import { CartIcon } from "./Icons";
import styles from "./cartsummary.module.css"
import { selectCartItems } from "../../redux/cartSlice";
import BasketModal from "../BasketModal";

export default function CartSummary() {
  const { token: { colorTextBase }} = theme.useToken();
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const count = (cartItems.length > 0) ?
  cartItems.reduce((sum, item) => sum + item.qty, 0)
  : 0;
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav onClick={toggleOpen} className={styles.cartSummary} >
       <Badge count={count} color="#F9CBB7" style={{color: '#4D6447'}}>
          <CartIcon size={32} color={colorTextBase} />
        </Badge>
      {/* <p className={styles.cartText}> Shopping bag </p> */}
      <BasketModal 
        isOpen={isOpen}
        toggleModal={toggleOpen}
        // onClick={console.log("555555")}
      />
    </nav>
  );
}
