import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { login } from "../../data/DataFunctions";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [params, setParams] = useSearchParams();
    const target = params.get("target");

    const currentUser = useContext(UserContext);
    
    const navigate = useNavigate();

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        //simualte a rest call to do the login
        login(username, password).then (
            result => {
                console.log(result)
                currentUser.setUser({name : result.data.username, role : result.data.role, password: password});
                target != null ? navigate("/" + target) : navigate("/");
            }
        )
        .catch( error => console.log("login didn't work"));
    }

    return (<form onSubmit={submitForm} >
        <div className="p-5">
        <h2>LOGIN</h2>
        <div  >
        <label className="m-2" htmlFor="name">Username:</label>
        <input className="m-2" id="name" type="text" value={username} onChange={updateUsername} />
        </div>
        <div>
        <label className="m-2" htmlFor="password">Password:</label>
        <input className="m-2" id="password" type="password" value={password} onChange={updatePassword} />
        </div>
        <button className="btn btn-outline-primary m-2" type="submit">Login</button>
        </div>
    </form>)


}

export default Login;