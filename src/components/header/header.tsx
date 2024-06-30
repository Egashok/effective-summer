import logo from '../../assets/logo.png'
import './header.scss'
export const Header = () => {
    return ( 
        <div>
            <header className="header">
                <div className="header__content">
                <img src={logo} alt="" className="header__logo" />
                <nav className='header__links'>
                    <a href="/" className="header__link">Characters</a>
                    <a href="/com" className="header__link">Comics</a>
                </nav>
                </div>
            </header>
        </div>
     );
}
 
