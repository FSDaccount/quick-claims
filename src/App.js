
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Screens/Home";
import ClaimsTable from './Components/Claims/ClaimsTable';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClaimsTableFull from './Components/Claims/ClaimsTableFull';
import AddClaim from './Components/Claims/AddClaim';
import AmmendClaim from './Components/Claims/AmmendClaim';
import Login from "./Components/UserManagement/Login";
import store from "./store/Store";
import {UserContext} from './contexts/UserContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import Search from './Components/Header/Search';


// import CLaims from "./components/Claims/Claims";

function App() {
    const [currentUser, setCurrentUser] = useState({ name : "", role : ""});
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='App'>
            <Router>
            <Provider store={store} >
    <UserContext.Provider value={{user:currentUser, setUser:setCurrentUser }}>
            <Header />
            <Routes>
            <Route path="/login" element = {<Login />} />
            <Route path="/claims" element={<ClaimsTable/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/claimstablefull" element={<ClaimsTableFull/>}/>
            <Route path="/addclaim"roles={["MANAGER"]} element={<AddClaim/>}/>
            <Route path="/claims/:id" element={<AmmendClaim/>}/>
            <Route path="*" element={<h1>Page Not Found</h1>}/>
            </Routes>

            <Footer /> 
            </UserContext.Provider>
            </Provider>
            </Router>
        </div>
    );
}

export default App;
