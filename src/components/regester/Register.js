import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = yup.object({
  name: yup.string().required("الاسم مطلوب"),
  email: yup
    .string()
    .required("يجب ادخال البريد الالكتروني")
    .email("هذا الايميل غير صحيح"),
  message: yup.string().required("من فضلك ادخل رسالتك"),
});
const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  console.log(onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm(true);
  axios
    .post("https://azkary.glitch.me/users", values)
    .then((res) => console.log("good"))
    .catch((err) => console.log(err));
};
function Register() {
  let navigat = useNavigate();
  let [submit, setSubmit] = useState(false);
  return (
    <div className="register d-flex align-items-center p-2">
      <div className="container p-5  rounded-3">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {(formik) => {
            console.log(formik.isSubmitting);
            if (formik.isSubmitting === true) {
              setSubmit(true);
            }
            return (
              <>
                {submit ? (
                  <div className="d-flex justify-content-center align-items-center thanks">
                    شكرا لك علي تعاونك معنا لقد تم استلام رسالتك وسوف يتم الرد
                    عليها في اقرب وقت{" "}
                  </div>
                ) : (
                  <Form
                    action="https://zekr1.herokuapp.com/users"
                    method="POST">
                    <div className="group">
                      <label htmlFor="name">الاسم </label>
                      <br />
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        placeholder="من فضلك ادخل اسمك"
                        className="input rounded"></Field>
                      <br />
                      <ErrorMessage name="name">
                        {(error) => {
                          return <p className="validation-error">{error}</p>;
                        }}
                      </ErrorMessage>
                    </div>

                    <div className="group">
                      <label htmlFor="name">البريد الالكتروني </label>
                      <br />
                      <Field
                        type="text"
                        name="email"
                        id="email"
                        placeholder="من فضلك ادخل ايميلك "
                        className="input rounded"></Field>
                      <br />
                      <ErrorMessage name="email">
                        {(error) => {
                          return <p className="validation-error">{error}</p>;
                        }}
                      </ErrorMessage>
                    </div>

                    <div className="group">
                      <label htmlFor="name">رسالتك</label>
                      <br />
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        placeholder="من فضلك ادخل رسالتك هنا "
                        className="rounded"></Field>
                      <br />
                      <ErrorMessage name="message">
                        {(error) => {
                          return <p className="validation-error">{error}</p>;
                        }}
                      </ErrorMessage>
                    </div>
                    <button
                      className="submit p-2 px-4 rounded-2"
                      type="submit"
                      disabled={formik.isSubmitting || !formik.isValid}>
                      ارسال
                    </button>
                  </Form>
                )}
              </>
            );
          }}
        </Formik>

        <button
          className="return p-2 px-3 rounded mt-4"
          onClick={() => navigat("/")}>
          العودة للصفحة الرئيسية
        </button>
      </div>
    </div>
  );
}

export default Register;
