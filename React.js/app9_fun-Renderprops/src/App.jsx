import logo from './logo.svg';
import './App.css';
import Stringfun from './Stringfun';
import Click from './Functionalcomp/Click';
import Hover from './Functionalcomp/Hover';
import RenderProp from './RenderProps/Renderprop';

function App() {
  return (
   
     <>
     {/* <Stringfun/> */}
     <RenderProp
        render={(count, increment, decrement, reset) => (
          <Hover
            count={count}
            increment={increment}
            decrement={decrement}
            reset={reset}
          />
        )}
      />
      <RenderProp
        render={(count, increment, decrement,reset) => (
          <Click
          count={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
          />
        )}
      />
  </>
  );
}

export default App;
