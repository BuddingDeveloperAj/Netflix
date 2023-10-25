import Logo from '../../assets/netflixLogo.png'; // Update the path to your image file

const Header = () => {
    return (
        <div className="absolute font-bold z-10 w-full h-20 text-center opacity-70 bg-black content-center py-2">
            <img className='-mt-5 w-48 opacity-100' src={Logo} alt="logo" />
        </div>
    );
};

export default Header;
