import logo from '../assets/imgs/logos/logo-white.png'
import NavbarList from './NavbarList'


window.addEventListener('scroll', function(){
    if(this.window.scrollY > 0){
        this.document.getElementById('navbar_top').classList.add('sticky', 'pt-4');
        this.document.getElementById('navbar_top').classList.remove('pt-5');
    } else{
        this.document.getElementById('navbar_top').classList.remove('sticky', 'pt-4');
        this.document.getElementById('navbar_top').classList.add('pt-5', 'fixed');
    }
})

const Navbar = () => {
    return (
        <nav id="navbar_top" className="container-fluid navbar navbar-expand-lg navbar-dark pt-5">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logo}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarr" aria-controls="navbarr" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarr">
                    <NavbarList ulClass="navbar-nav ms-auto"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
