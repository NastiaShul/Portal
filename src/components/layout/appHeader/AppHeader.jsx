import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
   return (
      <header className="app__header">
         <h1 className="app__title">
            <Link to="/"><span>Sources of Inspiration</span> portal</Link>
         </h1>
         <nav className="app__menu">
            <ul>
               <li> <NavLink to="/todos">Todos</NavLink></li>
               /
               <li> <NavLink to="/photos">Photos</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default AppHeader;