import React, { useEffect, useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginEmpleadoMutation } from "../store/api/empleadoapi";
import { login } from "../store/slices/paciente.slice";
import { login as loginpsicologo } from "../store/slices/psicologo.slice";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase.config";
export const FormLogin = () => {
    const { register, handleSubmit } = useForm();
    const Loading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();
    const form = useRef();
    const navigate = useNavigate();
    const [loginUser, { isLoading }] = useLoginEmpleadoMutation();

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
        } else {
          console.log(user);
        }
      });
    }, [])
    

    const submit = async (data) => {
        console.log(data);
        if (data.rol === "paciente") {
            await new dispatch(login(data));
            navigate("/paciente");
        } else if (data.rol === "psicologo") {
            await new dispatch(loginpsicologo(data));
            navigate("/psicologo");
        } else if (data.rol === "empleado") {
            loginUser(data)
            navigate("/admin");
        } else if (data.rol === "firebase") {
            try {
               createUserWithEmailAndPassword(auth, data.email, data.password) 
            } catch (error) {
            }
            
        }
        else if (data.rol === "firebaseLogin") {
            try {
               await signInWithEmailAndPassword(auth, data.email, data.password)
                navigate("/paciente"); 
            } catch (error) {}                       
        } 
    };

    const LoginGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider)
            navigate("/paciente");  
        } catch (error) {
            
        }
        
    };

    return (
        <div className="mx-auto text-center border-light">
            <Card.Body>
                <h1>Login</h1>

                <Form onSubmit={handleSubmit(submit)} ref={form}>
                    <Form.Group className="mb-3" controlId="formBasicRol">
                        <Form.Label>Test data</Form.Label>
                        <br />
                        <Form.Label>Email: rony@gmail.com</Form.Label>
                        <br />
                        <Form.Label>Password: pass1234</Form.Label>
                        <br />

                        <Form.Label className="">Rol</Form.Label>
                        <Form.Select {...register("rol")} data-testid="select-rol" required>
                            <option value="paciente">Paciente</option>
                            <option value="psicologo">Psicologo</option>
                            <option value="empleado">Administrador</option>
                            <option value="firebase">Firebase</option>
                            <option value="firebaseLogin">Firebase Login</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            {...register("email")}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            {...register("password")}
                            type="password"
                            placeholder="Contraseña"
                            minLength="8"
                            required
                        />
                    </Form.Group>
                    <Button id="buttonLogin" variant="primary" type="submit" disabled={isLoading || Loading}>
                        {isLoading || Loading ? "Loading..." : "Login"}
                    </Button>
                    <br />

                    <Button onClick={LoginGoogle}>
                        Login with Google
                    </Button>
                    <br />
                    <Form.Label>Don't have an account? </Form.Label>
                    <br />
                    <a href="#/signup-paciente"> Sign Up</a>

                </Form>
            </Card.Body>
        </div>
    );
};
