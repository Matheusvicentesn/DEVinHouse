export function searchPizzas(set) {
  return fetch(`http://localhost:3333/pizzas`, {
    method: "get",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      set(data);
      return data;
    });
}

export function registerPizza(name, description, price, ingredients) {
  return fetch("http://localhost:3333/pizzas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
      price,
      ingredients: [ingredients],
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export function searchSolicitations(set) {
  return fetch(`http://localhost:3333/solicitations`, {
    method: "get",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      set(data);
      return data;
    });
}

export function registerSolicitation(
  name,
  cpf,
  address,
  phone,
  payment,
  order_info
) {
  return fetch("http://localhost:3333/solicitations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      cpf,
      address,
      phone,
      payment,
      order_info,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export function searchSolicitation(id, set) {
  return fetch(`http://localhost:3333/solicitations/${id}`, {
    method: "get",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      set(data);
      return data;
    });
}
