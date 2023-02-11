import './WebHeader.css';
import Menu from "./Menu";

const Header = () => {
    return (

        <div className="container-header">
      
            <div className="row">
                <div className="col-sm">
                    <img src="./My-project-3.jpg" className="topImage" alt="Responsive image" />
                </div>
            </div>
            <Menu/>
        </div>
    );
}

export default Header
