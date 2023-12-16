import React, { MouseEventHandler, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import styles from "../styles.module.scss";

interface Props {
  value: number | null;
	i: number;
	j: number;
	squares: any;
	setSquares: Function;
  // onSquareClick: Function;
}

const Square: React.FC<Props> = ({ value, i, j, squares, setSquares }) => {
	const [clickTimes, setClickTimes] = useState(1);

	const handleSquareClick = (i:number,j:number) => {
		const newSquares = squares.slice()
		if(clickTimes===1) {
			newSquares[i][j]=0
			setClickTimes(clickTimes+1)
		}
		if(clickTimes===2) {
			newSquares[i][j]=1
			for(let p=0; p<4; p++) {
				if(p!=i) {
					newSquares[p][j] = 0
				}
				if(p!=j) {
					newSquares[i][p] = 0
				}
			}
			setClickTimes(clickTimes+1)
		}
		if(clickTimes===3) {
			newSquares[i][j]=null
			for(let q=0; q<4; q++) {
				newSquares[i][q]=null
				newSquares[q][j]=null
			}
			setClickTimes(1)
		}
		setSquares(newSquares)
	};

	//console.log('value', value)
	// useEffect(() => {
	// 	console.log('changed')
	// 	setClickTimes(1)
	// }, [i,j])
  return (
    <button className={styles.square} onClick={() =>handleSquareClick(i,j)}>
		{value!=null && (value==0 ? <ImCross/> : <FaCheck/>)}
      {/* {value === "X" ? <ImCross /> : <FaCheck />} */}
    </button>
  );
};

export default Square;
