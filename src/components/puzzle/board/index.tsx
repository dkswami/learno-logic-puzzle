import React from "react";
import { Box } from "@chakra-ui/react";
import Square from "../square";

interface Props {}

const Board: React.FC<Props> = ({}) => {
  const handleSquareClick = () => {};
  return (
    <Box border="2px solid black">
      <Box display="table" content="">
        <Square value="c" onSquareClick={handleSquareClick} />
        <Square value="c" onSquareClick={handleSquareClick} />
        <Square value="X" onSquareClick={handleSquareClick} />
        <Square value="c" onSquareClick={handleSquareClick} />
      </Box>
      <Box display="table" content="">
        <Square value="c" onSquareClick={handleSquareClick} />
        <Square value="c" onSquareClick={handleSquareClick} />
        <Square value="X" onSquareClick={handleSquareClick} />
        <Square value="c" onSquareClick={handleSquareClick} />
      </Box>
      <Box display="table" content="">
        <Square value="c" onSquareClick={handleSquareClick} />
        <Square value="c" onSquareClick={handleSquareClick} />
        <Square value="X" onSquareClick={handleSquareClick} />
        <Square value="c" onSquareClick={handleSquareClick} />
      </Box>
      <Box display="table" content="">
        <Square value="c" onSquareClick={handleSquareClick} />
        <Square value="c" onSquareClick={handleSquareClick} />
        <Square value="X" onSquareClick={handleSquareClick} />
        <Square value="c" onSquareClick={handleSquareClick} />
      </Box>
    </Box>
  );
};

export default Board;
