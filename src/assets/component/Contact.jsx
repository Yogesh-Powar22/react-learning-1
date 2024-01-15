import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Contact = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup
      .number()
      .integer()
      .positive()
      .min(18)
      .required("age should required"),
    password: yup.string().min(4).max(20).required(),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data, e) => {
    // console.log(data);

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label style={{ display: "block" }}> name: </label>
        <input type="text" placeholder="Enter name..." {...register("name")} />
        <p className="required-msg"> {errors.name?.message} </p>

        <label style={{ display: "block" }}> email: </label>
        <input
          type="text"
          placeholder="Enter email..."
          {...register("email")}
        />
        <p className="required-msg"> {errors.email?.message} </p>
        
        <label style={{ display: "block" }}> age: </label>
        <input  placeholder="Enter age..." {...register("age")} />
        <p className="required-msg"> {errors.age?.message} </p>
        <label style={{ display: "block" }}> password: </label>
        <input
          type="password"
          placeholder="Enter password..."
          {...register("password")}
        />
        <p className="required-msg"> {errors.password?.message} </p>

        <label style={{ display: "block" }}> confirm password: </label>
        <input
          type="password"
          placeholder="confirm password..."
          {...register("cpassword")}
        />
        <p className="required-msg"> {errors.cpassword?.message} </p>

        <input style={{ padding: "8px 30px" }} type="submit" />
      </form>
    </div>
  );
};

export default Contact;
