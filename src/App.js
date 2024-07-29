import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
// import Home from './Home';
import React, { useEffect } from 'react';
import Navigation from './Navigation';
import SconedLink from './SconedLink';
import ThirdLink from './ThirdLink';
import FourhLink from './FourhLink';
const LazyLoading = React.lazy(() => import("./Home"));

function App() {

  useEffect(() => {
    if(window.ttq) {
      console.log('ttq fired');
      window.ttq.page();
    }

    if(window.fbq) {
      console.log('fbq fired');
      window.fbq('track', 'PageView');
    }


  }, []);

  const location = useLocation();
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'instant'})
    }, [location.pathname]);
  return (
   <>
    <Navigation/>
   <Routes>
    <Route path="/" element = {
      <React.Suspense>
        <LazyLoading/>
      </React.Suspense>
    }/>
    <Route path="user" element = {<SconedLink/>}/>
    <Route path="third" element = {<ThirdLink/>}/>
    <Route path="fourth" element = {<FourhLink/>}/>
   </Routes>
    </>
  );
}

export default App;
