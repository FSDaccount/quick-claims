import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Search from './Components/Search/Search';

// import Transactions from "./components/Claims/Claims";

function App() {
    return (
        <div>
            <Header/>
            <Search/>
            {/* <Transactions/> */}
        </div>
    );
}

export default App;
