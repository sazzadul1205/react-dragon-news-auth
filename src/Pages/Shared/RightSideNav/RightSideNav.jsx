import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillGithub, AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full mt-2">
                    <FcGoogle></FcGoogle>
                    Sign in With Google
                </button>
                <br />
                <button className="btn btn-outline w-full mt-2">
                    <AiFillGithub></AiFillGithub>
                    Sign in With Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4">Login With</h2>
                <a href="" className="p-4 flex font-semibold text-lg items-center border rounded-t-lg">
                    <AiFillFacebook className="mr-3"></AiFillFacebook>
                    <span>Facebook</span>
                </a>
                <a href="" className="p-4 flex font-semibold text-lg items-center border-x">
                    <AiFillTwitterCircle className="mr-3"></AiFillTwitterCircle>
                    <span>Twitter</span>
                </a>
                <a href="" className="p-4 flex font-semibold text-lg items-center border rounded-b-lg">
                    <AiOutlineInstagram className="mr-3"></AiOutlineInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* Q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;