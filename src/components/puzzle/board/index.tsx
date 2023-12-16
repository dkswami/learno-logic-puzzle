import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Square from "../square";

interface Props {}

const defaultSquares = [
	[null, null, null, null],
	[null, null, null, null],
	[null, null, null, null],
	[null, null, null, null],
]

const Board: React.FC<Props> = ({}) => {
	const [squares, setSquares] = useState<any>(defaultSquares);

	console.table(
		'squares', squares
	)

  return (
    <Box border="2px solid black">
      <Box display="table" content="">
        <Square value={squares[0][0]} i={0} j={0}  squares={squares} setSquares={setSquares} />
        <Square value={squares[0][1]} i={0} j={1} squares={squares} setSquares={setSquares} />
        <Square value={squares[0][2]} i={0} j={2} squares={squares} setSquares={setSquares}/>
        <Square value={squares[0][3]} i={0} j={3} squares={squares} setSquares={setSquares} />
      </Box>
			<Box display="table" content="">
        <Square value={squares[1][0]} i={1} j={0} squares={squares} setSquares={setSquares}  />
        <Square value={squares[1][1]} i={1} j={1} squares={squares} setSquares={setSquares}  />
        <Square value={squares[1][2]} i={1} j={2} squares={squares} setSquares={setSquares} />
        <Square value={squares[1][3]} i={1} j={3} squares={squares} setSquares={setSquares} />
      </Box>
			<Box display="table" content="">
        <Square value={squares[2][0]} i={2} j={0} squares={squares} setSquares={setSquares} />
        <Square value={squares[2][1]} i={2} j={1} squares={squares} setSquares={setSquares}  />
        <Square value={squares[2][2]} i={2} j={2} squares={squares} setSquares={setSquares} />
        <Square value={squares[2][3]} i={2} j={3} squares={squares} setSquares={setSquares} />
      </Box>
			<Box display="table" content="">
        <Square value={squares[3][0]} i={3} j={0} squares={squares} setSquares={setSquares} />
        <Square value={squares[3][1]} i={3} j={1} squares={squares} setSquares={setSquares} />
        <Square value={squares[3][2]} i={3} j={2} squares={squares} setSquares={setSquares} />
        <Square value={squares[3][3]} i={3} j={3} squares={squares} setSquares={setSquares} />
      </Box>
    </Box>
  );
};

export default Board;
