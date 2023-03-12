import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import "./index.css";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
          to="/login"
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
              register={register("confirm_email", {
                required: "Endereço de email invalido",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Endereço de email invalido",
                },
                validate: (value) =>
                  value === watch("email") ||
                  "Os dois e-mails devem ser iguais.",
              })}
              error={errors?.confirm_email?.message}
              label="Repetir e-mail"
              className="mt-6"
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
            <div className="mt-6">
              <label className="relative flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className={`${
                      errors?.termsAndConditions?.message
                        ? "border border-red-500 "
                        : ""
                    }form-checkbox border  h-4 w-4 text-indigo-600 transition appearance-none duration-150 ease-in-out cursor-pointer rounded shrink-0 select-none `}
                    {...register("termsAndConditions", {
                      required: "Esse campo e obrigatorio",
                    })}
                  />
                </div>
                <div className="ml-2 text-sm leading-5">
                  <span className="font-medium text-gray-700">
                    Eu li e aceito os&nbsp;
                    <Link
                      href="https://kiwify.com.br/termos-de-uso"
                      target="_blank"
                      className="underline"
                    >
                      termos de uso
                    </Link>
                    ,&nbsp;
                    <Link
                      href="https://kiwify.com.br/licenca-de-uso-software"
                      target="_blank"
                      className="underline"
                    >
                      termos de licença de uso de software
                    </Link>
                    ,&nbsp;
                    <Link
                      href="https://kiwify.com.br/politica-de-conteudo"
                      target="_blank"
                      className="underline"
                    >
                      política de conteúdo
                    </Link>
                    da Kiwify
                  </span>
                  {errors.termsAndConditions && (
                    <div className="text-red-500 text-sm mt-1 ">
                      {errors.termsAndConditions.message}
                    </div>
                  )}
                </div>
              </label>
            </div>

            <Button title="Criar conta" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
