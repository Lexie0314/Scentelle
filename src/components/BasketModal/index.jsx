import { Modal, Button, Select } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems } from "../../redux/cartSlice";
import styles from "./basketmodal.module.css"
import { CartIcon } from "./Icons";
import { selectCartItems } from "../../redux/cartSlice";
const { Option } = Select;

export default function BasketModal({ isOpen, toggleModal }) {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   const handleCancel = () => toggleModal(!isOpen);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   const handleClick = (event) => {
      event.stopPropagation();
   };

   return (
      <div onClick={handleClick}>
         <Modal
            title="購物車"
            open={isOpen}
            onCancel={handleCancel}
            footer={null}
            maskClosable={false}
         >

            {cartItems.length === 0 ? (
               <div>購物車目前沒有商品</div>
            ) : (
               cartItems.map(item => (
                  <li key={item.id} className={styles.item}>
                     <Link to={`/products/id/${item.id}`}>
                        <div onClick={handleCancel}>
                           <img className={styles.image} src={item.image} alt={item.name} />
                        </div>
                     </Link>
                     <div className={styles.content}>
                        <div className={styles.name}>{item.name}</div>
                        <div>
                           數量: {"   "}
                           <Select
                              defaultValue={item.qty}
                              onChange={(qty) => dispatch(addCartItems({
                                 id: item.id,
                                 name: item.name,
                                 image: item.image,
                                 price: item.price,
                                 countInStock: item.countInStock,
                                 qty,
                              }))}
                           >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                 <Option key={x + 1} value={x + 1}>
                                    {x + 1}
                                 </Option>
                              ))}
                           </Select>
                        </div>
                     </div>
                     <div>
                        <div className={styles.price}>
                           ${item.price * item.qty}
                        </div>
                        <div className={styles.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                           x
                        </div>
                     </div>
                  </li>
               ))
            )}
            <div className={styles.wrap}>
               Total
               <div className={styles.totalPrice}>${getTotalPrice()}</div>
            </div>
            <Button
               className={styles.btn}
               type="primary"
            >
               <CartIcon size={20} color={"#FFFCFB"} />
               <span className={styles.text}>Check Out</span>
            </Button>
         </Modal>
      </div>



   );
}