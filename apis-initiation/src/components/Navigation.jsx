import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : ""}> 
                Home
            </NavLink>
            <NavLink to="/a-propos" className={({ isActive }) => isActive ? "nav-active" : ""}>
                A propos
            </NavLink>
        </div>
    );
}

export default Navigation;