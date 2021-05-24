
import Signup from "./components/Auth/Signup";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import ScrollToTop from "./components/utils/ScrollToTop";
import Themes from "./components/Themes/Themes"; 
import React from 'react'
import ThemePage from "./components/ThemePage/ThemePage";




function App() {
  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(fetchThemes())
  // },[dispatch])
  // console.log('store', store.getState())
  
  return (<>
    <Router>
      <ScrollToTop/>
      <Navbar/>
        <Switch>
          <Route path='/Auth'>
            <Signup/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/themes'>
            <Themes/>
          </Route>
            <Route path='/themepage' render={(props) => <ThemePage props={props}/>}>
          </Route>
        </Switch>
      <Footer/>
    </Router>
          </>
  );
}

export default App;
