import { Formik, useFormik } from "formik";
import * as yup from "yup";

const formvalidationSchema = yup.object({
  email: yup
    .string()
    .min(8, "email is too short")
    .max(25, "too long")
    .required("Required"),
  password: yup
    .string()
    .min(8, "password need to min 8")
    .max(12, "password should not be more than 12")
    .required("Required"),
});

export function Basicform() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "sanket", password: "123" },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit", values);
        
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {/* // only if user is touched the box and moves away and having an error then show error */}

      <p>{touched.email && errors.email ? errors.email : ""}</p>

      <input
        type="password"
        name="password"
        value={values.password}
        placeholder="Enter your password"
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <p>{touched.password && errors.password ? errors.password : ""}</p>
      
      {/* {JSON.stringify(values)} */}

      <button type="submit">Submit</button> 
     </form>
  );
}
