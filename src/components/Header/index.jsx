import { Link, NavLink, useLocation } from 'react-router-dom';

import Button from "../Button";

import "./header.scss";

const Header = () => {
   const location = useLocation();

   return (
      <header className='header'>
         <Link to="/" >
            <h1 className='header__title'>Sources of Inspiration</h1>
         </Link>
         <nav className='header__menu'>
            <NavLink to="/todos" >
               <Button primary={location.pathname === '/todos'}>To Do List</Button>
            </NavLink>
            /
            <NavLink to="/photos">
               <Button primary={location.pathname === '/photos'}>Photo</Button>
            </NavLink>
         </nav>
      </header>
   )
};

export default Header;