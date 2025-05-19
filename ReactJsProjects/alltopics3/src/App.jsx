import { Component} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TitleDisplay from './TitleDisplay';
import Parent from './Parent';
import Container from './Container';
import Calculator from './Calculator';
import Grandparent from './Grandparent';

class App extends Component {
  render() {
    const title = "Welcome to the Props!";
    return ( 
    <>
     <TitleDisplay title={title} />
     <Parent/>
     <Container/>
     <Calculator/>
     <Grandparent/>
    </>
  )
}}

export default App
