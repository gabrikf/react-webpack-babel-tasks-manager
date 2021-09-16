import { ButtonHTMLAttributes, HtmlHTMLAttributes, ReactNode } from 'react';
import './styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &  {
    children: ReactNode;
   
}
const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}className="btn" type="submit">
      {" "}
      {props.children}
    </button>
  );
};
export default Button
