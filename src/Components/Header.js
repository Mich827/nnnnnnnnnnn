import logo from '../logo.svg';
import '../Styles/header.css';
export default function Header(){
  return(
   <div className='containerHeader'>
     <h1>Hello world</h1>
     <p>Lorem ipsum dolores sit amet!!!!!</p>
     <img src={logo} alt='' height=' 200px' width='200px' />
   </div>
  )
 }