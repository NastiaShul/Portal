import { NavLink } from "react-router-dom";

import toDoListIcon from "../../../resourses/icons/to-do-list-icon.svg";
import albumIcon from "../../../resourses/icons/album-icon.svg";

import "./MainPage.scss";

const MainPage = () => {
   return (
      <section className="main">
         <h1>Kindly welcome to the portal "Sources of Inspiration"!</h1>
         <div className="main-block">
            <div className="main-block__todos">
               <NavLink to="/todos">
                  <p>
                     Here you will be able to create your <span>personal list</span>  of things, projects, and goals that you want to implement.
                  </p>
                  <img className="main-block__icon" src={toDoListIcon} alt="toDoListIcon" />
               </NavLink>
            </div>
            <div className="main-block__photos">
               <NavLink to="/photos">
                  <p>
                     And pages with <span>albums</span> give you the opportunity to immerse yourself in the world of art and beauty.
                  </p>
                  <img className="main-block__icon" src={albumIcon} alt="albumIcon" />
               </NavLink>

            </div>
         </div>
      </section>
   )
};

export default MainPage;