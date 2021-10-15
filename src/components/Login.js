import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const initialState = {
  formValues: {
    username: "",
    password: "",
  },
  errorMessage: "",
};

const Login = () => {
  const [formState, setFormState] = useState(initialState);

  const { push } = useHistory();

  const handleFormChange = (e) => {
    setFormState({
      formValues: {
        ...formState.formValues,
        [e.target.name]: e.target.value,
      },
      errorMessage: "",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formState.formValues)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        push("/view");
      })
      .catch((err) => {
        setFormState({
          formValues: initialState.formValues,
          errorMessage: err.response.data.error,
        });
      });
  };

  return (
    <ComponentContainer>
      <ModalContainer>
        <h1>Welcome to Blogger Pro</h1>
        <h2>Please enter your account information.</h2>
        <FormGroup onSubmit={handleLogin}>
          <Label htmlFor="username">
            Username:
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="username"
              value={formState.formValues.username}
              onChange={handleFormChange}
            />
          </Label>
          <Label htmlFor="password">
            Password:
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              value={formState.formValues.password}
              onChange={handleFormChange}
            />
          </Label>
          <Button id="submit">Login</Button>
        </FormGroup>
        {formState.errorMessage ? (
          <p id="error">{formState.errorMessage}</p>
        ) : null}
      </ModalContainer>
    </ComponentContainer>
  );
};

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password". - DONE
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display. - DONE
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page. - DONE
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```** - DONE
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM. - DONE

const ComponentContainer = styled.div`
  height: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ModalContainer = styled.div`
  width: 500px;
  background: white;
  padding: 2rem;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1.5rem;
`;

const FormGroup = styled.form`
  padding: 1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 1rem 0;
  width: 100%;
`;

const Button = styled.button`
  padding: 1rem;
  width: 100%;
`;
