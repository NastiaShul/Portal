import "./button.scss";

const Button = ({
   primary,
   secondary,
   children,
   additional,
   active,
   disabled,
   ...rest }) => {

   let classes;
   if (primary) {
      classes = "primary"
   } else if (active) {
      classes = "active"
   } else if (additional) {
      classes = "additional"
   } 

   return (
      <button {...rest} className={classes} disabled={disabled}>{children}</button>
   )
};

export default Button;