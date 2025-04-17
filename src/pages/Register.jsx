import { theme } from 'antd';
import { Helmet } from 'react-helmet'
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import RegisterCard from '../components/RegisterCard';

function Register() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();
   const [searchParams] = useSearchParams();
   const redirect = searchParams.get('redirect');
   return (
      <div className="mainLayout">
         <Helmet>
            <title>註冊會員</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Register"
            slogan="An example made by Vite."
         />
         <div className="layoutContent container">
            <RegisterCard redirect={redirect}/>
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Register;