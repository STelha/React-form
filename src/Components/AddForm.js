import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles.css";



const AddForm = ({ onSubmit, isWaiting }) => {
  return (
    < Formik
      initialValues={{
        refnum: "",
        empname: "",
        bsb: "",
        accnum: ""
      }}
      validationSchema={
        Yup.object().shape({
          refnum: Yup.string()
            .required("Please enter Employee Reference/Salary Number"),
          empname: Yup.string()
            .required("Please enter Employee name")
            .matches(/^[a-z ,'-]+$/i, "Employee name must contain alphabets only"),
          bsb: Yup.string()
            .required("Please enter 6 digits BSB number")
            .matches(/^[0-9]{6}$/, "BSB must be 6 digits only")
            .matches(/(?!0{2})[0-9]{6}/, "Invalid BSB. BSB can not start with 00"),
          accnum: Yup.string()
            .required("Employee Account Number must be numeric only and cannot be blank")
            .matches(/^[0-9]{8,9}$/, "Employee Account Number must be numeric only and 8 or 9 digits")
            .matches(/!^0*$/, "Employee Account Number can not be all zeros")
        })
      }

      onSubmit={onSubmit}

    >
      {({ isSubmitting }) => (

        <Form className="addForm">
          <div className="twelve columns">
            <label htmlFor="refnum" className="formlabel">Reference/ Salary number</label>
            <Field type="text" name="refnum" className="refemp" />
            <ErrorMessage name="refnum" component="div" className="error" />
          </div>
          <div className="twelve columns">
            <label htmlFor="empname" className="formlabel">Employee Name</label>
            <Field type="text" name="empname" className="refemp" />
            <ErrorMessage name="empname" component="div" className="error" />
          </div>
          <div className="twelve columns">
            <label htmlFor="bsb" className="formlabel">BSB</label>
            <Field type="text" name="bsb" className="bsbacc" />
            <ErrorMessage name="bsb" component="div" className="error" />
          </div>
          <div className="twelve columns">
            <label htmlFor="accnum" className="formlabel">Account number</label>
            <Field type="text" name="accnum" className="bsbacc" />
            <ErrorMessage name="accnum" component="div" className="error" />
          </div>
          <br />
          <hr />
          <h3 className="empdets">Important Information</h3>
          <p>
            It is your responsibility to ensure that the details provided by you are correct or your payment may be unsuccessful or may
            be paid to an incorrect account. We do not check that the details provided by you are correct.
        </p>
          <p> Before you add an employee to this list you must ensure that your employee is aware:</p>
          <ul>
            <br />
            <li> Of our identity and contact Information.</li>
            <li>That they are able to access the Information we hold about them.</li>
            <li> That their banking details are collected for transferring money directly in to their account for payroll purposes.</li>
            <li>We will not disclose their new Information to other organizations</li>
          </ul>
          <hr />
          <br />
          <div >
            <button className="cancel" type="button">
              Cancel
        </button>
            <button type="submit" className="save" disabled={isSubmitting && isWaiting}>
              {isSubmitting && isWaiting ? "Save details  " : "Save details"}
            </button>
          </div>



        </Form>

      )}

    </Formik >
  )
}

export default AddForm;
