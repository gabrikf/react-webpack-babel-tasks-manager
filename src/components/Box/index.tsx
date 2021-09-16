import { ReactNode } from "react";
import Button from "../Button";
import "./styles.scss";

type BoxTypes = {
  children: ReactNode;
  btnName?: String;
  btnFn?: () => void;
};

const Box = (props: BoxTypes) => {
  return (
    <div className="border">
      <div className="flex">
        <div>
          {props.btnName && (
            <Button onClick={props.btnFn} className="btn">
              {" "}
              {props.btnName}
            </Button>
          )}
        </div>
        <div>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};
export default Box;
