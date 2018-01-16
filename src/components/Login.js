import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text"value="Piggie Name"></input>
        <br></br>
        <label>Password</label>
        <input type="password"></input>
        <br></br>
        <input type="submit" value="Log In"></input>
      </form>
    </div>
  )
}

export default Login
