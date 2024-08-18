import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    if (!values.query) {
      toast.error("Enter a query before!");
    }
    actions.resetForm();
  };
  return (
    <header className={css.container}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.wraper}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />

          <Toaster position="top-right" reverseOrder={false} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </header>
  );
}
