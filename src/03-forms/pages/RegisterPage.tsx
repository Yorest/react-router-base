import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    isValidEmail,
    onChange,
    resetForm,
    name,
    email,
    password1,
    password2,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1> Register Page</h1>

      <form noValidate onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onChange}
          name={"name"}
          className={`${name.trim().length <= 0 && `has-error`}`}
        />
        {name.trim().length <= 0 && <span>! Este campo es necesario</span>}
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onChange}
          name={`email`}
          className={`${!isValidEmail(email) && `has-error`}`}
        />
        {!isValidEmail(email) && <span>! email no es valido</span>}
        <input
          type="password"
          placeholder="password"
          value={password1}
          onChange={onChange}
          name={`password1`}
        />
        {password1.trim().length <= 0 && <span>! Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>! el password debe tener 6 letras</span>}
        <input
          type="password"
          placeholder="repeat password"
          value={password2}
          onChange={onChange}
          name={`password2`}
        />
        {password2.trim().length <= 0 && <span>! Este campo es necesario</span>}
        {password2.trim().length > 0 && password2 === password1 && <span>! No es igual al password</span>}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
