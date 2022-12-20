
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Screens/Home";

import ClaimsTable from './Components/Claims/ClaimsTable';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import ClaimsView from './Components/Claims/ClaimsView';
import ClaimsNew from './Components/Claims/ClaimsNew';
import ClaimsTableFull from './Components/Claims/ClaimsTableFull';
import AddClaim from './Components/Claims/AddClaim';





// import CLaims from "./components/Claims/Claims";

function App() {
    return (
        <div>
            <Header />
            <Routes>
           
            <Route path="/claims" element={<ClaimsTable/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/claimsview" element={<ClaimsView/>}/>
            <Route path="/claimsnew" element={<ClaimsNew/>}/>
            <Route path="/claimstablefull" element={<ClaimsTableFull/>}/>
            <Route path="/addclaim" element={<AddClaim/>}/>

            {/* <Route path="/AddClaim" element={<AddClaim/>}/> */}
            <Route path="*" element={<h1>Page Not Found</h1>}/>
            </Routes>

            <Footer /> 
        </div>
    );
}

export default App;
