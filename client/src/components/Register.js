import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = (props) => {

  const navigate = useNavigate();

  // If cookie exist, it automatically redirects to homepage - blocks access to register page once logged in
  useEffect(() => {
    if(props.cookieValue) {
      console.log("Hello");
      navigate("/");
    } else {
      navigate("/register");
    }
  }, [props.cookieValue, navigate])

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [errMsg, setErrMsg] = useState('');

  // Registration Function
  const handleSignUp = (event) => {
    event.preventDefault(); 
    try {
      axios.post('/register', {firstname: firstname, lastname: lastname, email: email, password: pwd, password2: pwd2})
      .then((res) => {
        if(res.data.registration) {
          props.setCookieValue(res.data.firstname);
          navigate("/Subscriptions");
        }
      })
      .catch((err) => {
        setFirstname('');
        setLastname('');
        setEmail('');
        setPwd('');
        setPwd2('');
        setErrMsg(err.response.data);
      });
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <section>
      {/* Error message display */}
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <h1>Register</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="firstname">First Name</label> <br></br>
        <input 
          type="text" 
          id="firstname"
          autoComplete="off"
          onChange={(event) => setFirstname(event.target.value)}
          value={firstname}
          required
        /><br></br><br></br>
        <label htmlFor="lastname">Last Name</label> <br></br>
        <input 
          type="text" 
          id="lastname"
          autoComplete="off"
          onChange={(event) => setLastname(event.target.value)}
          value={lastname}
          required
        /><br></br><br></br>
        <label htmlFor="email">Email</label><br></br>
        <input 
          type="email" 
          id="email"
          autoComplete="off"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          required
        /><br></br><br></br>
        <label htmlFor="password">Password</label><br></br>
        <input 
          type="password" 
          id="password"
          onChange={(event) => setPwd(event.target.value)}
          value={pwd}
          required
        /><br></br><br></br>
        <label htmlFor="password">Confirm Password</label><br></br>
        <input 
          type="password" 
          id="password2"
          onChange={(event) => setPwd2(event.target.value)}
          value={pwd2}
          required
        /><br></br><br></br>
        <button>Register</button>
      </form>
    </section>
  )
}

export default Register;
