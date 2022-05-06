//  import logo from './logo.svg';
import './App.css';
import Signup from './Signin';
import Login from './Login';
import {Route, Navigate} from 'react-router-dom';
import {Container} from '@material-ui/core';

function App() {
  return (
   <>
   <Container maxWidth="md">
   <div className="app">
     <Navigate>
     <Route path="/signup" exact component={Signup}/>
     <Route path="/login" exact component={Login}/>

     </Navigate>
   </div>
   </Container>

   </>
  );
}

export default App;
