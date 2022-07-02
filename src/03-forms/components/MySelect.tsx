import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placerholder?: string;
  [x: string]: any; // comodin
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}></select>
      <ErrorMessage name={props.name} component="span" className="custom-span-error-class"/>
    </>
  );
};
