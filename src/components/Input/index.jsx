import React from "react";

const Input = ({
  register,
  error,
  label,
  type = "text",
  name,
  className = "",
}) => {
  return (
    <div className={className}>
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-5 mb-1 text-gray-700"
        >
          {label}
        </label>
        <div>
          <input
            type={type}
            {...register}
            id={name}
            className={`${
              error ? "border border-red-500" : ""
            } form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:ring focus:ring-blue-100 ease-in-out sm:text-sm sm:leading-5 w-full`}
          />
          {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Input;
