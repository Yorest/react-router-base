import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

import dataJSON from "../data/custom-form.json";

export const DynamicForms = () => {
  const initialValues: { [key: string]: any } = {};
  const requiredFields: { [key: string]: any } = {};

  for (const input of dataJSON) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
      if (rule.type === "required") {
        schema = schema.required("required input");
      }

      if (rule.type === "minLenght") {
        schema = schema.min(
          (rule as any).value || 2,
          `min size is ${rule.value}`
        );
      }

      if(rule.type === "email"){
        schema = schema.email('email is not valid')
      }

      // .... otras reglas
    }

    requiredFields[input.name] = schema;
  }

  const validationSchema = Yup.object({ ...requiredFields });

  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {dataJSON.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "email" || type === "password") {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    type={type as any}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              return <span>type not supported</span>;
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
