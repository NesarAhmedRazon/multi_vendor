import { ReactNode } from "react";

interface InputFieldProps {
  className?: string;
  label: string;
  type: string;
  id: string;
  name: string;
  error?: string | null;
  icon?: ReactNode; // Accepts a component as a prop
}

export default function InputField({
  className,
  label,
  type,
  id,
  name,
  icon,
  error = null
}: InputFieldProps) {
  return (
    <div
      className={`input-wrapper leading-3 relative min-w-3/4 focus-within:relative group text-slate-300 ${className}`}
    >
      <label className="block text-md mb-1 text-teal-500" htmlFor={id}>
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          type={type}
          name={name}
          id={id}
          className="w-full  text-sm text-teal-500 duration-300 group-focus-within:border-b-teal-500 border-b-teal-500/30 border-b-2 pe-5 pb-1 appearance-none outline-0"
        />
        {error && (
          <div className="warning text-xs text-red-400 absolute -bottom-4 right-4">
            {error}
          </div>
        )}

        {icon && (
          <span className="absolute duration-300 stroke-0 bottom-0 right-0 mb-1 pointer-events-none self-center justify-self-end text-teal-500/30 group-focus-within:text-teal-500">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
}
