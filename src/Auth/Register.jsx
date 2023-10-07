import { useContext } from 'react';
import Navbar from '../Pages/Shared/NavBar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo_url');
        console.log(email, password, name, photo);


        createUser(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }


    return (
        <div>
            <div className='bg-[#F3F3F3]'>
                <Navbar></Navbar>
                <div className='lg:mx-[440px] mt-36 '>
                    <h1 className="text-5xl font-bold text-center">Login your account</h1>
                    <form onSubmit={handleRegister} className="card-body mx-24">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Your Name"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name='photo_url'
                                placeholder="Enter URL"
                                className="input input-bordered"
                                required />
                        </div>
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
                            <button className="btn btn-primary bg-[#403F3F] border-none">Register</button>
                        </div>
                        <p>Already Have an Account please <Link to={'/login'}>
                            <button className="btn btn-link text-[#F75B5F]">Login</button>
                        </Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;