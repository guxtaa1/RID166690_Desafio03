import gitHubIcon from '../assets/gitHubIcon.svg'
import linkedinIcon from '../assets/linkedinIcon.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <ul>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#timeline">Tecnologias</a></li>
            <li><a href="#contato">Sobre mim</a></li>
        </ul>
      </div>
      <div className='iconsTop'>
        <a href="https://github.com/guxtaa1" target="_blank"> <img src={gitHubIcon} alt="github" /> </a>
        <a href="https://www.linkedin.com/in/gustavorodriguesoliveira/" target="_blank"> <img src={linkedinIcon} alt="linkedin" /> </a>
      </div>
    </nav>
  );
}

export default Navbar;