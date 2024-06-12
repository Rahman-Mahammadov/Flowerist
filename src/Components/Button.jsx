/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Button = (props) => {
  return (
    <button
      className={`${props.px} ${props.py} ${props.font} hover:text-black hover:bg-white border transition-all border-primary hover:border-black text-center whitespace-nowrap font-montserrat text-2xl ${props.bg} ${props.color} rounded-md`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
