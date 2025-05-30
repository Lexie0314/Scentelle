
import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "../Icons";
import styles from "./setcolormode.module.css"
import { selectLightMode, setColorMode } from "../../redux/colorSlice";
import { Switch } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
export default function SetColorMode() {
   const { token: { colorTextBase } } = theme.useToken();
   const lightMode = useSelector(selectLightMode);
   const dispatch = useDispatch();

   const toggleColor = () => {
      dispatch(setColorMode(!lightMode))
   }

   return (
      <div onClick={toggleColor} className={styles.cartSummary} >
         {
            // lightMode ? (
            //    <Sun color='#FFFCFB' />
            // ) : (
            //    <Moon color='#FFFCFB' />
            // )
            <Switch
               checkedChildren={<Sun color='#FFFCFB' />}
               unCheckedChildren={<Moon color='#FFFCFB' />}
               defaultChecked
            />
         }
      </div>
   );
}
