import { useState } from "react";
import "./App.css";

const menu = [
  { id: "inicio", texto: "Início" },
  { id: "sobre", texto: "Sobre" },
  { id: "aprendizado", texto: "O que você aprende" },
  { id: "tecnologias", texto: "Tecnologias" },
  { id: "mercado", texto: "Mercado" },
  { id: "projetos", texto: "Projetos" },
];

const aprendizados = [
  { icone: "🧠", titulo: "Lógica de programação", texto: "Aprenda a pensar em passos para resolver problemas com código." },
  { icone: "🌐", titulo: "Desenvolvimento web", texto: "Construa páginas e sistemas que rodam direto no navegador." },
  { icone: "🎨", titulo: "Frontend", texto: "Crie interfaces bonitas, responsivas e fáceis de usar." },
  { icone: "⚙️", titulo: "Backend", texto: "Programe as regras e o processamento que ficam nos bastidores." },
  { icone: "🗄️", titulo: "Banco de dados", texto: "Guarde, organize e consulte informações com SQL." },
  { icone: "🔌", titulo: "Desenvolvimento de APIs", texto: "Conecte sistemas e aplicativos trocando dados entre eles." },
  { icone: "📱", titulo: "Aplicativos", texto: "Desenvolva aplicações para diferentes telas e dispositivos." },
  { icone: "🌿", titulo: "Versionamento de código", texto: "Registre a evolução do projeto e trabalhe em equipe com Git." },
];

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "SQL", "Git", "GitHub"];

const areas = [
  "Desenvolvimento Frontend",
  "Desenvolvimento Backend",
  "Desenvolvimento Full Stack",
  "Desenvolvimento de aplicações",
  "Banco de dados",
  "Suporte e manutenção de sistemas",
];

const projetos = [
  { titulo: "Cadastro de clientes", texto: "Registra, edita e busca dados de clientes de uma empresa." },
  { titulo: "Sistema de estoque", texto: "Controla entrada, saída e quantidade de produtos." },
  { titulo: "Aplicação de agendamentos", texto: "Organiza horários de atendimento e evita conflitos." },
  { titulo: "Loja virtual", texto: "Exibe produtos, carrinho de compras e pedidos." },
  { titulo: "Dashboard administrativo", texto: "Mostra gráficos e indicadores para apoiar decisões." },
  { titulo: "Aplicativo de tarefas", texto: "Lista, marca e organiza atividades do dia a dia." },
];

const codigo = `function criarFuturo() {
  const ideia = "meu primeiro sistema";
  const codigo = desenvolver(ideia);

  return publicar(codigo);
}`;

function App() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <>
      <header className="cabecalho">
        <div className="container cabecalho-conteudo">
          <a href="#inicio" className="marca" onClick={fechar}>
            <span className="marca-simbolo">{"</>"}</span>
            Desenvolvimento de Sistemas
          </a>

          <button
            className="menu-botao"
            aria-label="Abrir menu"
            aria-expanded={aberto}
            onClick={() => setAberto(!aberto)}
          >
            {aberto ? "✕" : "☰"}
          </button>

          <nav className={aberto ? "menu aberto" : "menu"}>
            {menu.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={fechar}>
                {item.texto}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-conteudo">
            <div className="hero-texto">
              <h1>Transforme ideias em sistemas.</h1>
              <p>
                Desenvolva soluções, aprenda novas tecnologias e construa seu
                futuro na área de TI.
              </p>
              <a href="#sobre" className="botao">Conheça o curso</a>
            </div>

            <div className="editor" aria-hidden="true">
              <div className="editor-barra">
                <span></span><span></span><span></span>
                <small>futuro.js</small>
              </div>
              <pre><code>{codigo}</code></pre>
            </div>
          </div>
        </section>

        <section id="sobre" className="secao secao-clara">
          <div className="container">
            <h2>Sobre o curso</h2>
            <div className="sobre-grade">
              <div className="sobre-texto">
                <p>
                  Desenvolvimento de Sistemas é a área da tecnologia que cria
                  programas, sites e aplicativos para resolver problemas reais
                  de pessoas e empresas.
                </p>
                <p>
                  O objetivo do curso Técnico em Desenvolvimento de Sistemas do
                  SENAI é formar profissionais capazes de analisar necessidades,
                  programar soluções e manter sistemas funcionando.
                </p>
              </div>
              <div className="sobre-destaque">
                <h3>O que faz um profissional da área</h3>
                <ul>
                  <li>Escreve código para criar e melhorar sistemas</li>
                  <li>Organiza e consulta bancos de dados</li>
                  <li>Testa, corrige erros e dá manutenção</li>
                  <li>Trabalha em equipe e versiona o projeto</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="aprendizado" className="secao">
          <div className="container">
            <h2>O que você aprende</h2>
            <div className="grade grade-4">
              {aprendizados.map((item) => (
                <article className="card" key={item.titulo}>
                  <span className="card-icone">{item.icone}</span>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tecnologias" className="secao secao-escura">
          <div className="container">
            <h2>Tecnologias</h2>
            <p className="secao-intro">
              Ferramentas que você vai encontrar durante o curso e no mercado.
            </p>
            <ul className="tecnologias">
              {tecnologias.map((tec) => (
                <li key={tec}>{tec}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="mercado" className="secao">
          <div className="container">
            <h2>Áreas de atuação</h2>
            <div className="grade grade-3">
              {areas.map((area) => (
                <div className="area" key={area}>{area}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="secao secao-clara">
          <div className="container">
            <h2>Exemplos de projetos</h2>
            <p className="secao-intro">
              Sistemas que um desenvolvedor pode construir.
            </p>
            <div className="grade grade-3">
              {projetos.map((p) => (
                <article className="card card-projeto" key={p.titulo}>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Seu futuro na tecnologia pode começar aqui.</h2>
            <p>Conheça o curso Técnico em Desenvolvimento de Sistemas.</p>
            <a href="#inicio" className="botao botao-claro">Quero conhecer</a>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container rodape-conteudo">
          <p>Técnico em Desenvolvimento de Sistemas • SENAI</p>
          <p>© 2026 • Desenvolvido por Seu Nome</p>
        </div>
      </footer>
    </>
  );
}

export default App;