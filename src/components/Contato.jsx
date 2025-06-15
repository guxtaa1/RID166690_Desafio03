import gitHubIcon from '../assets/gitHubIcon.svg';
import linkedinIcon from '../assets/linkedinIcon.svg';
import figmaIcon from '../assets/figma.svg';

function Contato() {
  return (
    <section id="contato">
      <div className='contato'>
        <p><strong>Meu contato:</strong><br />38 99757-9248</p>
        <p><strong>Email:</strong><br />gustavop03@hotmail.com</p>
      </div>
      <div className="icones-contato">
        <a href="https://github.com/guxtaa1" target="_blank" rel="noopener noreferrer">
          <img src={gitHubIcon} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/gustavorodriguesoliveira/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={figmaIcon} alt="Figma" />
        </a>
      </div>
    </section>
  );
}

export default Contato;