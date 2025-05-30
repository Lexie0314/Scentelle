
import { NavLink } from "react-router-dom";
import { theme } from "antd";

export default function (props) {
   const {
      token: { colorTextBase },
    } = theme.useToken();
   return (
      <NavLink {...props} style ={{
         
         color: colorTextBase,
      }}>
         {props.children}
      </NavLink>
   )
}
