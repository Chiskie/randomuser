import logo from './logo.svg';
import './App.css';
import Landing from "./Components/Landing"
import User from "./Components/User"
import {Routes, Route} from "react-router-dom"


import Pagination  from './Components/Pagination';
import PageNotFound from './Components/PageNotFound';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="User" element={<User />} />
        <Route  path="*" element=
        {<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

