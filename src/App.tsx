
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Home from './components/ui/home';
import Exam from './components/ui/exam';


export default function APP() {
  
  

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exam' element={<Exam />} />
 
      </Routes>
    </BrowserRouter>
  );
  
}
