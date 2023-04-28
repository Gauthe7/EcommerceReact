
import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import View from './pages/View';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Routes>

          <Route path="/" element={<Shop></Shop>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/views/:id" element={<View></View>}></Route>


        </Routes>
      </Router>


    </div>
  );
}

export default App;
