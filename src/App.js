import Header from './components/Header';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';

import './index.css';
function App() {
  const [cart,setCart] = useState([])

  function add(i){
    setCart((prev)=>[...prev,i])
  }
 function remove(i){
  setCart((prev)=>{
    let arr = [...prev]
    let idx =  arr.indexOf(i)
    arr.splice(idx,1)
    return arr
  })
 }
  


   return (
    <div><Navbar count={cart.length}/>
      <Header />

      <Body add={add} cart={cart} remove={remove}/>
      <Footer/>
      </div>
  );
}

export default App;
