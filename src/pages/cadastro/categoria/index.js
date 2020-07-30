import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'',
  }
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState([valoresIniciais]);  

  
function setValue(key, value){
  setValues({
    ...values,
    [key]:value,
  })

}

function handleChange(infosDoEvento){
  //const { getAttribute, value } = infosDoEvento.target;
  setValue(
    infosDoEvento.target.getAttribute('name'),
    infosDoEvento.target.value
    );
}


  return(
      <PageDefault>
        <h1>
          Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias, values

          ]);
          setValues({valoresIniciais})
        }}>
          <FormField
          labelDesc="Nome da Categoria:"
          type = "text"
          value={values.nome}
          name = "nome"
          onChange={handleChange}
          
          />
          <FormField
          labelDesc="Descricao:"
          type = "textarea"
          value={values.descricao}
          name = "descricao"
          onChange={handleChange}
          
          />
          
          <FormField
            labelDesc="Cor:"
            type = "color"
            value={values.cor}
            name = "cor"
            onChange={handleChange}
          
          />
          {/* <div>
            <label>
              Cor:
              <input
                type="color"
                value = {values.cor}
                name="cor"
                onChange={handleChange}
                />
            </label>

          </div> */}

          <button>
            Cadastrar
          </button>
          </form>
          <ul>
            {categorias.map((categoria, id) => {
            return(
              <li key={`${categoria}${id}`}>
                {categoria.nome}
              </li>
            )

          })}
        </ul> 

        

        <Link to="/">
            Ir para home
          
        </Link>
      </PageDefault>
    )
  
  };
  export default CadastroCategoria;