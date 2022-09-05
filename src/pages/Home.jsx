import React from "react";

const Home = () => {
  return (
    <div className="root-container">
      {/*  Sidebar */}
      <aside className="sidebar-container">
        <div className="sidebar-container__logo">
          <h1>DEVInKnowledge</h1>
          <span>Learn, Code and Save</span>
        </div>
        <form>
          <div className="input-group">
            <label htmlFor="titulo">Titulo</label>
            <input type="text" placeholder="digite um título..." id="titulo" />
          </div>

          <div className="input-group">
            <label htmlFor="categoria">Categoria</label>
            <select
              name="categoria"
              id="categoria"
              placeholder="escolha uma categoria..."
            >
              <option value="">selecione uma categoria...</option>
              <option value="front-end">Front end</option>
              <option value="back-end">Back end</option>
              <option value="full-stack">Full stack</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="linguagem">Linguagem / Skill</label>
            <input
              type="text"
              id="linguagem"
              placeholder="digite uma categoria..."
            />
          </div>

          <div className="input-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              type="text"
              id="descricao"
              placeholder="digite uma descrição..."
              rows="5"
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="video">Vídeo do Youtube (opcional)</label>
            <input
              type="text"
              id="video"
              placeholder="digite uma url do YouTube..."
            />
          </div>

          <div className="btn-group">
            <button className="btn primary" type="submit">
              salvar
            </button>
            <button className="btn secondary" type="submit">
              limpar
            </button>
          </div>
        </form>
      </aside>

      {/* MainContent  */}
      <main className="main-container">
        {/* summary  */}
        <div className="summary-container">
          <div className="summary-container__card">
            <span className="title">back-end</span>
            <span className="value">1</span>
          </div>
          <div className="summary-container__card">
            <span className="title">total</span>
            <span className="value">1</span>
          </div>
        </div>

        {/* filter  */}
        <div className="filter-container">
          <input
            placeholder="Busque por uma dica..."
            type="text"
            className="inputField"
          />
          <button className="searchButton">
            Buscar
          </button>
          <button className="searchButton">
            Limpar
          </button>
        </div>

        {/* card list  */}
        <div className="cardList">
          {/* card  */}
          <div className="tipcard-container">
            <h2 className="title">Título da dica</h2>
            <div className="metadata">
              <div>
                Linguagem: <span className="metaValue">JavaScript</span>
              </div>
              <div>
                Categoria: <span className="metaValue">Back End</span>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sunt harum et velit, eveniet molestiae est repellat
              dicta hic aspernatur officiis beatae aliquid itaque sit aut nulla
              error culpa ratione?
            </div>
            <div className="btn-group align-left">
              <button className="btn primary" type="submit">
                editar
              </button>
              <button className="btn secondary" type="submit">
                YouTube
              </button>
              <button className="btn secondary" type="submit">
                apagar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
