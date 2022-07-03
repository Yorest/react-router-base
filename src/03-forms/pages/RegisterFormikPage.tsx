import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password1: "",
        password2: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "min size > 2")
          .max(15, "max size 15 characters")
          .required("required"),
        email: Yup.string().email("Check email address").required("required"),
        password1: Yup.string().min(6, "min size >6").required("required"),
        password2: Yup.string()
          .required("required")
          .min(6, "min size >6")
          .oneOf([Yup.ref("password1")], "passwords are not equals"),
      })}
    >
      {({handleReset}) => (
        <>
          <Form>
            <h1> Register Formik Page</h1>
            <MyTextInput
              label="Nombre"
              name="name"
              placerholder="write your name"
            />

            <MyTextInput
              label="email"
              name="email"
              type="email"
              placerholder="username@domine.com"
            />

            <MyTextInput label="password" name="password1" type="password" />

            <MyTextInput
              label="confirme password"
              name="password2"
              type="password"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
            Reset
          </button>
          </Form>
        </>
      )}
    </Formik>
  );
};
