
import styles from "./userinfo.module.css";
import { Icon } from "./Icons";
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from "../../react-query";

export default function UserInfo(props) {
   const { data: userInfo} = useUserInfo();
   console.log(userInfo, 'userInfo icon')
   const navigate = useNavigate();

   const goToProfile = () => {
      if(userInfo?.email)
         navigate("/auth/profile")
      else
         navigate("/auth/login?redirect=/products/category");
   };
   return (
      <div onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
         <Icon className={styles.icon} size={32} />
         <p className={styles.userInfoText}>
         {!!userInfo?.email
               ? `${userInfo.name}`
               : `登入`
            }
         </p>
      </div>

   );
}