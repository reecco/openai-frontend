import { InputProps } from "../../utils/types";

function Input({ className, id, name, placeholder, type }: InputProps) {
  return (
    <input 
      className={className} 
      id={id} 
      placeholder={placeholder} 
      name={name}
      type={type}
    />
  );
}

export default Input;