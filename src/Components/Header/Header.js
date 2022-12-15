import './WebHeader.css';
import Menu from "./Menu";
import Search from './Search';

const Header = () => {
    return (
        <div className="webHeader ">
            <img src="./QuickClaims-3.jpg" className="imgheader" alt="Responsive image"/>
        
            <Menu />        
        </div>
    );
}

export default Header
