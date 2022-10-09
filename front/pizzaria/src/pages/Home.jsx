import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  registerPizza,
  registerSolicitation,
  searchPizzas,
  searchSolicitations,
  searchSolicitation,
} from "../services/api";
import { HomeStyled } from "./Home.styled";
import { useForm } from "react-hook-form";

const Home = () => {
  // Hook Form
  const { register, handleSubmit } = useForm();

  const addPizza = (data) =>
    registerPizza(data.name, data.description, data.price, data.ingredients);

  const addSolicitation = (data) =>
    registerSolicitation(
      data.name1,
      data.cpf,
      data.address,
      data.phone,
      data.payment,
      data.order_info
    );

  // Buscar Pizzas
  const [pizzas, setpizzas] = useState();
  useEffect(() => {
    searchPizzas(setpizzas);
  }, [setpizzas, addPizza]);

  // Buscar Pedidos
  const [solicitations, setSolicitations] = useState();
  useEffect(() => {
    searchSolicitations(setSolicitations);
  }, [setSolicitations, addSolicitation]);

  //Buscar Pedido por ID
  const [searchSolicitationId, setSearchSolicitationId] = useState();
  function searchOrderId(id) {
    console.log(id);
    searchSolicitation(id, setSearchSolicitationId);
  }

  return (
    <Fragment>
      <HomeStyled>
        <div className="split left">
          <div className="centered">
            <h1>Pizzas</h1>
            <hr />

            <br />
            <br />
            <br />
            <h3>Cadastrar pizzas</h3>
            <form onSubmit={handleSubmit(addPizza)}>
              <label htmlFor="name">Nome:</label>
              <input type="text" name="name" {...register("name")} />
              <br />
              <br />
              <label htmlFor="description">Descrição:</label>
              <input
                type="text"
                name="description"
                {...register("description")}
              />
              <br />
              <br />
              <label htmlFor="price">Preço:</label>
              <input type="text" name="price" {...register("price")} />
              <br />
              <br />
              <label htmlFor="ingredients">Ingredientes:</label>
              <input
                type="text"
                name="ingredients"
                {...register("ingredients")}
              />
              <br />
              <br />

              <button>Adicionar Pizza</button>
            </form>
            <br />
            <hr />

            <br />
            <h3>Pizzas Cadastradas</h3>
            {pizzas?.map((pizza) => (
              <div key={pizza.id}>
                <p>{pizza.name}</p>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
                <p>{pizza.ingredients}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>

        <div className="split right">
          <div className="centered">
            <h1>Pedidos</h1>
           <hr />
           <br/>
           
            <h3>Cadastrar Pedidos</h3>
            <form onSubmit={handleSubmit(addSolicitation)}>
              <label htmlFor="name1">Nome:</label>
              <input type="text" name="name1" {...register("name1")} />
              <br />
              <br />
              <label htmlFor="cpf">CPF:</label>
              <input type="text" name="cpf" {...register("cpf")} />
              <br />
              <br />
              <label htmlFor="address">Enedereço:</label>
              <input type="text" name="address" {...register("address")} />
              <br />
              <br />
              <label htmlFor="phone">Telefone:</label>
              <input type="text" name="ingredients" {...register("phone")} />
              <br />
              <br />
              <label htmlFor="payment">Pagamento:</label>
              <input type="text" name="payment" {...register("payment")} />
              <br />
              <br />
              <label htmlFor="order_info">Detalhe do pedido:</label>
              <input
                type="text"
                name="order_info"
                {...register("order_info")}
              />
              <br />
              <br />
              <button>Adicionar Pedido</button>
            </form>
            <br />
            <hr />

            <br />
            <h3>Pedidos Cadastrados</h3>
            {solicitations?.map((solicitation) => (
              <div key={solicitation.id}>
                <p>{solicitation.name}</p>
                <p>{solicitation.cpf}</p>
                <p>{solicitation.address}</p>
                <p>{solicitation.phone}</p>
                <p>{solicitation.payment}</p>
                <p>{solicitation.order_info}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
      </HomeStyled>
    </Fragment>
  );
};

export default Home;
