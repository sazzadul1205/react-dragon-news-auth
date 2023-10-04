import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center mt-12'>
            <img className='mx-auto' src={logo} alt="" />
            <h2 className="text-lg font-normal font-[#706F6F]">Journalism Without Fear or Favour</h2>
            <p className='text-xl'>{moment().format('dddd, MMMM, D YYYY     ')}</p>
        </div>
    );
};

export default Header;