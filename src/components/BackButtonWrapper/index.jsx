import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import Button from "../Button";

import "./backButtonWrapper.scss";

const BackButtonWrapper = ({ children }) => {
   const navigate = useNavigate();

   return (
      <div className="back-wrapper">
         <Button additional onClick={() => navigate(-1)}><IoMdArrowRoundBack /></Button>
         {children}
      </div >
   );
};

export default BackButtonWrapper;