function Timeline() {
  const anos = [
  {
    ano: 2021,
    texto: 'Conclusão da Graduação em Enfermagem. Especialização em Epidemiologia e Gestão em Saúde. Atuação como Coordenador da Vigilância em Saúde.',
  },
  {
    ano: 2022,
    texto: 'Início do Mestrado em Saúde Coletiva e primeiro contato com Saúde Digital. Atuação como Superintendente de Saúde e Tutor da ESP-MG em projetos de Saúde Digital. ',
  },
  {
    ano: 2023,
    texto: 'Finalização do Mestrado.  Construção de um chatbot para psicoeducação. Experiência como Preceptor na UFRGS e Professor de Inglês, além de docente na área da saúde.',
  },
  {
    ano: 2024,
    texto: 'Início da formação em Programação de Jogos Digitais (Belas Artes) e Engenharia de Software (DNC). Ingresso como Analista de Gestão de Saúde Digital na AgSUS e Membro da RIPSA.',
  },
  {
    ano: 2025,
    texto: 'Atuação em projetos de transformação digital na saúde pública, com foco em desenvolvimento de sistemas, interoperabilidade e Inteligência Artificial aplicada à saúde.',
  },
];

  return (
    <section id="timeline">
      <h2>Sobre Mim</h2>
      <div className="timeline-container">
        {anos.map((item, index) => (
          <div key={index} className="timeline-item">
            <h4>{item.ano}</h4>
            <p>{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;