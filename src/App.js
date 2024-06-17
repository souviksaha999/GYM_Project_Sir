import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { check_token } from './redux/AuthSlice2';
import Login from './Pages/Authentication/Login';
import Register2 from './Pages/Authentication/Register2';
import Home from './Pages/Home';
import About from './Pages/About';
import GymFeature from './Pages/GymFeature';
import Services from './Pages/Services';
import JoiningForm from './Pages/JoiningForm';
import TrainingDetails from './Components/OurService/TrainingDetails';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MemeberDashboard from './Pages/MemeberDashboard';
import BlogPages from './Pages/BlogPages';
import BlogDetails from './Components/Blog/BlogDetails';

function App() {

  const dispatch = useDispatch();

  const { redirectTo } = useSelector((state) => state?.auth2);
  //check token 
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to='/login' />
    )
  }

  useEffect(() => {
    dispatch(check_token())
  }, [redirectTo])


  const PublicRouting = [
    {
      path: "/login",
      Component: <Login />
    },
    {

      path: "/register2",
      Component: <Register2 />
    },
    {
      path: '/',
      Component: <Home />
    },

    {
      path: '/feature',
      Component: <GymFeature />
    },
    {
      path: '/blog',
      Component: <BlogPages />
    },
    {
      path: '/about',
      Component: <About />
    }
  ]

  const PrivateRouting = [

    {
      path: '/serviceDetails/:id',
      Component: <TrainingDetails />
    },
    {
      path: '/joining/:id',
      Component: <JoiningForm />
    },
    {
      path: '/dashboard/:memberId',
      Component: <MemeberDashboard />
    },
    {
      path: '/getblogdetails/:id',
      Component: <BlogDetails/>
    },
    {
      path: '/service',
      Component: <Services />
    }
  ]

  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          {PublicRouting?.map((route, index) => {
            return (
              <Route
                Key={index + 1}
                exact
                path={route.path}
                element={route?.Component}
              />
            )
          })}

          {PrivateRouting?.map((route) => {
            return (
              <Route
                path={route.path}
                element={<PrivateRoute>{route?.Component}</PrivateRoute>}
              />
            )
          })}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
