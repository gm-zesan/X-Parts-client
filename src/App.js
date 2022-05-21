import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/RegisterLogin/Login/Login';

function App() {
  return (
      <div>
          <Header></Header>
          <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/blog" element={<Blog></Blog>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
          <Footer></Footer>
      </div>
  );
}

export default App;
