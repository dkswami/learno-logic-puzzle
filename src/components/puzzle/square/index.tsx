import React, { MouseEventHandler } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import styles from "../styles.module.scss";

interface Props {
  value: string;
  onSquareClick: MouseEventHandler<HTMLButtonElement>;
}

const Square: React.FC<Props> = ({ value, onSquareClick }) => {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value === "X" ? <ImCross /> : <FaCheck />}
    </button>
  );
};

export default Square;
