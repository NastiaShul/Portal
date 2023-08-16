import { Link } from "react-router-dom";

import Panel from "../../components/Panel";

import "./mainPage.scss";

const MainPage = () => {
   return (
      <Panel title="Kindly welcome!" >
         <div className="main-page__description">
            <p>
               Here you will find a place for your business and some time for inspiration.
            </p>
            <p>
               It will certainly become your faithful assistant in organizing life affairs.
            </p>
         </div>
         <div className="main-page__navigation">
            <Link to="/todos">
               <p >
                  Сreate your notes <span>here</span>
               </p>
            </Link>
            <Link to="/photos">
               <p >
                  Maybe you will find what you are looking for <span>here</span>
               </p>
            </Link>
         </div>
      </Panel >
   )
};

export default MainPage;

