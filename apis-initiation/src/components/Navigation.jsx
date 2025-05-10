import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/"  activeClassName="nav-active"> 
                Home
            </NavLink>
            <NavLink to="/a-propos" activeClassName="nav-active">
                A propos
            </NavLink>
        </div>
    );
}

export default Navigation;