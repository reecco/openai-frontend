import { TextareaProps } from "../../utils/types";

function Textarea({ className, id, name, placeholder, readOnly, value, onChange }: TextareaProps) {
  return (
    <textarea 
      className={className} 
      id={id} 
      placeholder={placeholder} 
      name={name}
      readOnly={readOnly}
      value={value}
      onChange={onChange}
    >
    </textarea>
  );
}

export default Textarea;