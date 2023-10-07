import { useContext } from 'react';
import Navbar from '../Pages/Shared/NavBar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

    const { singIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        singIn(email, password)
            .then(result => {
                console.log(result.user)
                
                //navigate
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='bg-[#F3F3F3]'>
            <Navbar></Navbar>
            <div className='lg:mx-[440px] mt-36 '>
                <h1 className="text-5xl font-bold text-center">Login your account</h1>
                <form onSubmit={handleLogin} className="card-body mx-24">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="example@gmail.com"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name='password'
                            placeholder="password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#403F3F] border-none">Login</button>
                    </div>
                    <p>Dont have an Account please<Link to={'/register'}>
                        <button className="btn btn-link text-[#F75B5F]">Register</button>
                    </Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;