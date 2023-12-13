import GridPuzzle from "@/components/puzzle";
import Board from "@/components/puzzle/board";
import Square from "@/components/puzzle/square";
import { Container, VStack } from "@chakra-ui/react";
import React from "react";

const puzzle: React.FC = () => {
  return (
    <Container mt="150" centerContent>
      <GridPuzzle />
    </Container>
  );
};

export default puzzle;
