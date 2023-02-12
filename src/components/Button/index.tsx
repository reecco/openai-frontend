import { ButtonProps } from "../../utils/types";

function Button({ className, id, value, onChange, onClick, disable }: ButtonProps) {
  return (
    <button 
      className={className} 
      id={id}
      onChange={onChange}
      onClick={onClick}
      disabled={disable}
    >
      {value}
    </button>
  );
}

export default Button;