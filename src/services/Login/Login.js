async function login(email, password) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      mdp: password,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export { login };
