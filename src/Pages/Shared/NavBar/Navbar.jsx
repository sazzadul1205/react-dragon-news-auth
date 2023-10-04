import { Link, NavLink } from 'react-router-dom';
import userDefaultPic from '../../../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
    const {user , logOut}  = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("User signed out successfully.");
            })
            .catch(error => {
                console.error("Error signing out:", error);
            });
    };

    const NavLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/career'}>Career</NavLink></li>
        <li><NavLink to={'/career'}>Addict</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="btn btn-ghost btn-circle avatar">
                        <div className="w-19 rounded-full">
                            <img src={userDefaultPic} />
                        </div>
                    </div>
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn ml-2">Log Out</button>
                            :
                            <Link to={'/login'}>
                                <button className="btn ml-2">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;