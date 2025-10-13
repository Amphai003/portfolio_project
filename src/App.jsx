import { BrowserRouter,Route,Router,Routes } from "react-router-dom";
import Myportfolio from "./page/myPortfolio";
import Navbar from "./components/navBar";
import ProjectScreen from "./page/project";
import NewPortfolio from "./page/newPortfolio";





function App (){

  return(
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<NewPortfolio/>}/>
    {/* <Route path="/" element={<Myportfolio/>}/>
    <Route path="/project" element={<ProjectScreen/>}/> */}
    {/* <Route path="/" element={<Navbar/>}/> */}
   </Routes>
   </BrowserRouter>
  );
};

export default App;