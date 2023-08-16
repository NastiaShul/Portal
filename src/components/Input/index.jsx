import "./input.scss";

const Input = ({ value, onChange, placeholder, type }) => {

   const handleChange = (e) => {
      onChange(e.target.value);
   };

   return (
      <input
         type={type}
         placeholder={placeholder}
         onChange={handleChange}
         value={value}
         autoFocus
      />
   );
};

export default Input;