import React from 'react';
import './App.css';

 

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Music from './pages/music';
import Sports from './pages/sports';
import Tech from './pages/tech';
import Testimonials from './pages/testimonials';
import ContactUs from './pages/contact';
import Form from './Form';




function App() {
return (
	
	<Router>
	<Navbar />
	<Routes>
		
		<Route path="/Music" element={<Music/>} />
		<Route path="/Tech"element={<Tech/>} />
		<Route path="/Sports" element={<Sports/>} />
		<Route path="/Testimonials" element={<Testimonials/>} />
		<Route path="/ContactUs" element={<ContactUs/>} />
		<Route path="/Form" element={<Form/>}/>

	</Routes>
	</Router>
);

}



export default App;
