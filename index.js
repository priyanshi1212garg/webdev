import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/music' activeStyle>
			Music 
		</NavLink>
		<NavLink to='/tech' activeStyle>
			Tech 
		</NavLink>
		<NavLink to='/sports' activeStyle>
			Sports 
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact us
		</NavLink>
		<NavLink to='/testimonials' activeStyle>
			Testimonials
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Form'>Register</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
