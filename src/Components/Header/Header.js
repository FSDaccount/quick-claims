import './WebHeader.css';
import Menu from "./Menu";
import Search from './Search';

const Header = () => {
    return (
        <div className="webHeader">
            <div>
            <img src="./banner.jpg" class="img-fluid" alt="Responsive image"/>
            </div>
            <h1>Quick Claims</h1>
            <Menu />        
        </div>
    );
}

export default Header
