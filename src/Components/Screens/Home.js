import { Link } from "react-router-dom";


const Home = () => {
    return (<div className="home">

     
        <div className="container">
        <div className="row">
        <h3 className="header-text"> <strong>  Quick Claims Server </strong></h3>
             </div> 
            <div className="row">
           
                <div className="col-sm">
                    
                    <img src="../submit.jpg" className="img" alt="Broker " />
                    {/* <label > Submit a New Claim </label> */}
                    <Link id="addClaim" className="btn btn-info m-3" to="/addclaim"><strong>Submit  Claim </strong></Link>
                </div>
                <div className="col-sm">
                    
                    <img src="../broker.jpg" className="img"   alt="Broker " />
                    <Link className="btn btn-info m-3" to="/claimstablefull"><strong>View  Existing Claim</strong> </Link>
              
                </div>
                <div className="col-sm">
                    <img src="../search.jpg" className="img" alt="Broker " />
                    <Link className="btn btn-info m-3" to="/claimstablefull"><strong>Search Claims</strong> </Link>
                </div>
            </div>
            <div className="row">
                <br/>
                </div>


         
        </div>
   

    </div>

    )
}
export default Home;