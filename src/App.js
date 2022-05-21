import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/RegisterLogin/Login/Login';
import Register from './Pages/RegisterLogin/Registration/Registration';
import RequireAuth from "./Pages/RegisterLogin/RequireAuth/RequireAuth";
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
      <div>
          <Header></Header>
          <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/blog" element={<Blog></Blog>}></Route>
              <Route
                  path="/order/:orderId"
                  element={
                      <RequireAuth>
                          <Purchase></Purchase>
                      </RequireAuth>
                  }
              ></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/register" element={<Register></Register>}></Route>
          </Routes>
          <Footer></Footer>
      </div>
  );
}

export default App;
