import { Formik, Form } from "formik";
import * as Yup from "yup";
import {Mycheckbox, MySelect,MyTextInput } from '../components'
import "../styles/styles.css";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(20, "Debe tener 20 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Correo no tiene un formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf(
            [true],
            "Debe aceptar los terminos y condiciones"
          ),
          jobtype: Yup.string()
            .notOneOf(["it-jr"], "opcion no permitida")
            .required("requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placerholder="Your First Name"
              type="text"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placerholder="Your Last name"
              type="text"
            />

            <MyTextInput
              label="email"
              name="email"
              placerholder="Your email"
              type="email"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick Something</option>
              <option value="developer">Developer </option>
              <option value="designer">Designer </option>
              <option value="it-senior">IT Senior </option>
              <option value="it-junior">IT Junior </option>
            </MySelect>

            <Mycheckbox name="terms" label="Terms and conditions" />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
