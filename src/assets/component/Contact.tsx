import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import PropTypes from 'prop-types'

const Contact = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup
      .number()
      .integer()
      .positive()
      .min(18)
      .required("age is a required field"),
    password: yup.string().min(4).max(20).required(),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("confirm password is a required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);

    reset();
  };

  return (
    <div className="container">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <label className="form-lable d-block"> name </label>
            <input className="w-100 form-input" type="text" placeholder="Enter name..." {...register("name")} />
            <p className="required-msg"> {errors.name?.message} </p>
          </div>
          <div className="col-md-6">
            <label className="form-lable d-block"> email </label>
            <input className="w-100 form-input"
              type="text"
              placeholder="Enter email..."
              {...register("email")}
            />
            <p className="required-msg"> {errors.email?.message} </p>
          </div>
          <div className="col-md-6">
            <label className="form-lable d-block"> age </label>
            <input className="w-100 form-input" placeholder="Enter age..." {...register("age")} />
            <p className="required-msg"> {errors.age?.message} </p>
          </div>
          <div className="col-md-6">
            <label className="form-lable d-block"> password </label>
            <input className="w-100 form-input"
              type="password"
              placeholder="Enter password..."
              {...register("password")}
            />
            <p className="required-msg"> {errors.password?.message} </p>
          </div>
          <div className="col-md-6">
            <label className="form-lable d-block"> confirm password </label>
            <input className="w-100 form-input"
              type="password"
              placeholder="confirm password..."
              {...register("cpassword")}
            />
            <p className="required-msg"> {errors.cpassword?.message} </p>
          </div>
          <div className="col-12 d-flex justify-content-end">
            <input className="bg-success text-light" style={{ padding: "8px 30px", margin: "10px 0" }} type="submit" />
          </div>
        </div >
      </form>
    </div >
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  password: PropTypes.any,
  cpassword: PropTypes.any
}
