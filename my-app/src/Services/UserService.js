export const register = (user, password) => {
  return new Promise((resolve) => {
      const url = 'http://localhost:3080/api/register'
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          user: user,
          password: password
        })
      };
      fetch(url, options)
        .then(response => {
          response.text().then(data =>{
            return resolve(data)
          });
        });
  })
}

export const login = (user, password) => {
  return new Promise((resolve) => {
      const url = 'http://localhost:3080/api/login'
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/JSON;charset=UTF-8'
        },
        body: JSON.stringify({
          user: user,
          password: password
        })
      };
      fetch(url, options)
        .then(response => {
          response.json().then(data =>{
            return resolve(data)
          });
        });
  })
}

export const getUsers = () => {
  return new Promise((resolve) => {
      const url = 'http://localhost:3080/api/users'
      const options = {
        method: 'GET',
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/JSON;charset=UTF-8'
        },
      };
      fetch(url, options)
        .then(response => {
          response.text().then(data =>{
            return resolve(data)
          });
        });
  })
}

export const update = (user, data) => {
  return new Promise ((resolve) => {
    const url = 'http://localhost:3080/api/update'
    const options = {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/JSON;charset=UTF-8'
      },
      body: JSON.stringify({
        user: user,
        data: data
      })
    };
    fetch(url, options)
      .then(response => {
        response.json().then(data =>{
          return resolve(data)
        });
      });
  })
}

export const logOut = () => {
  return new Promise((resolve) => {
    const url = 'http://localhost:3080/api/logOut'
    const options = {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/JSON;charset=UTF-8'
      },
    };
    fetch(url, options)
      .then(response => {
        response.json().then(data =>{
          return resolve(data)
        });
      });
  })
}