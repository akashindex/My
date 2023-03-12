import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log({ errors });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <Heading
          title="Criar nova conta"
          link="entrar na sua conta existente"
          to="/signup"
        />
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          >
            <Input
              label="Email"
              register={register("email", {
                required: "Esse campo e obrigatorio",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Endereço de email invalido",
                },
              })}
              error={errors?.email?.message}
            />
            <Input
              label="Senha"
              type="password"
              className="mt-6"
              register={register("password", {
                required: "Esse campo e obrigatorio",
                minLength: {
                  value: 8,
                  message: "A senha deve ter pelo menos 8 caracteres",
                },
              })}
              error={errors?.password?.message}
            />
            <div className="mt-2 flex items-center justify-end">
              <div className="text-sm leading-5">
                <Link
                  to="/ResetPassword"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <Button title="Entrar " />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
