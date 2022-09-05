import React from 'react'

const Sidebar = () => {
  return (
          
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
  )
}

export default Sidebar