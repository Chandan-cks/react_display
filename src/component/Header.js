import codingImg from "../asset/img/coding.png";
const Header = ({dark,children}) => {
dark = !!dark ? "dark" : "light"; 
return (
        <header>
            <div className= {`navbar navbar-$(dark) bg-$(dark) shadow-sm`}>
                <div className="container">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <img src= {codingImg} width="25" alt="" className="me-2"></img>

                    {children}
                </a>
                
                </div>
            </div>
        </header>
);
};

export default Header;