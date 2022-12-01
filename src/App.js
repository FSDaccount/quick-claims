import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Search from './Components/Header/Search';
import ClaimsTable from './Components/Claims/ClaimsTable';
import Footer from './Components/Footer';





// import CLaims from "./components/Claims/Claims";

function App() {
    return (
        <div>
            <Header />
            <ClaimsTable />
            <Footer /> 
        </div>
    );
}

export default App;
