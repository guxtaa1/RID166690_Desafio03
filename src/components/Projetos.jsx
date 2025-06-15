import portalNSD from '../assets/portalNSD.png';
import formBemtevi from '../assets/formBemtevi.png';
import comandei from '../assets/comandei.png';
import quiz from '../assets/quiz.png';

function Projetos() {
  const listaProjetos = [
    { id: 1, 
      imagem: portalNSD, 
      titulo: 'Portal Núcleo de Saúde Digital', 
      descricao: 'Diversos elementos de Frontend interativos, direcionamentos e uma biblioteca onde são armazenados os documentos em PDF.',
      link: 'https://saudedigital.agenciasus.org.br/' },
    { id: 2,
      imagem: formBemtevi,  
      titulo: 'Sistema de acolhimento de Saúde Mental', 
      descricao: 'Frontend com React e Backend em php. Banco de dados Mysql. Painel de atendimento e registros com controle de acesso por perfil. Conformidade com a LGPD.',
      link: null },
    { id: 3, 
      imagem: comandei,
      titulo: 'Sistema de gerenciamento de bares/restaurantes', 
      descricao: 'Comanda digital; painel para cozinha, bar, caixa, garçom e gerente. Total autonomia e controle do estabelecimento. Experiência moderna pro cliente',
      link: null },
    { id: 4, 
      imagem: quiz,
      titulo: 'Quiz interativo', 
      descricao: 'Gamificação através de quiz para educação permanente das UBS em todo o Brasil. Armazenamento do ranking e feedback visual interativo.',
      link: null },
  ];

  const handleClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      alert('Sistema em construção ou Não Público');
    }
  };

  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <div className="projetos-container">
        {listaProjetos.map(proj => (
          <div key={proj.id} className="projeto-card">
            <img src={proj.imagem} alt={proj.titulo} className='projeto-img' />
            <h3>{proj.titulo}</h3>
            <p>{proj.descricao}</p>
            <button onClick={() => handleClick(proj.link)}>Clique aqui</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
