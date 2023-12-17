import React, { useState } from "react";
import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Board from "./board";
import { FaCheckCircle, FaUndo } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";

interface Props {}

interface IFeedback {
  board: string;
  i: number;
  j: number;
}

const GridPuzzle: React.FC<Props> = ({}) => {
  const [feedback, setFeedback] = useState<IFeedback>();
  const [grid1and2, setGrid1and2] = useState<any>([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);
  const [grid1and3, setGrid1and3] = useState<any>([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);
  const [grid2and3, setGrid2and3] = useState<any>([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);

  const puzzleData = {
    category1: {
      name: "Class Time",
      value: ["8:00", "9:00", "10:00", "11:00"],
    },
    category2: {
      name: "Teacher",
      value: ["aditya", "basil", "cecilia", "dimitri"],
    },
    category3: {
      name: "Course",
      value: ["algebra", "calculus", "geometry", "probability"],
    },
    category1and2Rules: [
      (grid: any) => {
        if (grid[0][0] == 1) return true;
        else {
          setFeedback({ board: "1and2", i: 0, j: 0 });
          return false;
        }
      },
      (grid: any) => {
        if (grid[3][1] == 1) return true;
        else {
          setFeedback({ board: "1and2", i: 3, j: 1 });
          return false;
        }
      },
      (grid: any) => {
        if (grid[1][2] == 1) return true;
        else {
          setFeedback({ board: "1and2", i: 1, j: 2 });
          return false;
        }
      },
      (grid: any) => {
        if (grid[2][3] == 1) return true;
        else {
          setFeedback({ board: "1and2", i: 2, j: 3 });
          return false;
        }
      },
    ],
    category1and3Rules: [
      (grid: any) => {
        if (grid[2][0] == 1) return true;
        else {
          setFeedback({ board: "1and3", i: 2, j: 0 });
          return false;
        }
      },
      (grid: any) => {
        if (grid[1][1] == 1) return true;
        else {
          setFeedback({ board: "1and3", i: 1, j: 1 });
          return false;
        }
      },
      (grid: any) => {
        if (grid[3][2] == 1) return true;
        else {
          setFeedback({ board: "1and3", i: 3, j: 2 });
          return false;
        }
      },
      (grid: any) => {
        if (grid[0][3] == 1) return true;
        else {
          setFeedback({ board: "1and3", i: 0, j: 3 });
          return false;
        }
      },
    ],
    category2and3Rules: [
      (grid: any) => {
        if (grid[3][0] == 1) return true;
        else {
          setFeedback({ board: "2and3", i: 3, j: 0 });
          return false;
        }
      },
      (grid: any) => {
        if (grid[2][1] == 1) return true;
        else {
          setFeedback({ board: "2and3", i: 2, j: 1 });
          return false;
        }
      },
      (grid: any) => {
        if (grid[1][2] == 1) return true;
        else {
          setFeedback({ board: "2and3", i: 1, j: 2 });
          return false;
        }
      },
      (grid: any) => {
        if (grid[0][3] == 1) return true;
        else {
          setFeedback({ board: "2and3", i: 0, j: 3 });
          return false;
        }
      },
    ],
  };

  const handleSubmit = () => {
    const checkSolution = () => {
      console.log(
        "1 and 2",
        puzzleData.category1and2Rules.every((rule) => rule(grid1and2))
      );
      console.log(
        "1 and 3",
        puzzleData.category1and3Rules.every((rule) => rule(grid1and3))
      );
      console.log(
        "2 and 3",
        puzzleData.category2and3Rules.every((rule) => rule(grid2and3))
      );
    };
    checkSolution();
    if (
      puzzleData.category1and2Rules.every((rule) => rule(grid1and2)) &&
      puzzleData.category1and3Rules.every((rule) => rule(grid1and3)) &&
      puzzleData.category2and3Rules.every((rule) => rule(grid2and3))
    ) {
      setFeedback(undefined);
      alert("Congratulations!! You found the correct solution!");
    } else {
      setFeedback(undefined);
      alert("Incorrect Solution Please try again. Use Feedback for help.");
    }
  };

  const handleFeedback = () => {
    puzzleData.category1and2Rules.map((rule) => rule(grid1and2));
    puzzleData.category1and3Rules.every((rule) => rule(grid1and3));
    puzzleData.category2and3Rules.every((rule) => rule(grid2and3));
  };

  console.log("feedback", feedback);

  return (
    <>
      <HStack gap="0" alignItems={"flex-start"}>
        <VStack gap="0" alignItems={"flex-end"}>
          <HStack gap="0" h="180px" align="flex-end">
            <Text
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
              m="0"
              p="13px"
              fontWeight={"bold"}
            >
              ADITYA
            </Text>
            <Text
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
              m="0"
              p="13px"
              fontWeight={"bold"}
            >
              BASIL
            </Text>
            <Text
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
              m="0"
              p="13px"
              fontWeight={"bold"}
            >
              CECILIA
            </Text>
            <Text
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
              m="0"
              p="13px"
              fontWeight={"bold"}
            >
              DIMITRI
            </Text>
          </HStack>

          <Box bg="red" w="180px">
            <Heading m="0" textAlign={"center"}>
              TEACHER
            </Heading>
          </Box>
          <HStack gap="0">
            <VStack gap="0">
              <Text m="0" p="13px" fontWeight={"bold"}>
                8 : 00
              </Text>
              <Text m="0" p="13px" fontWeight={"bold"}>
                9 : 00
              </Text>
              <Text m="0" p="13px" fontWeight={"bold"}>
                10 : 00
              </Text>
              <Text m="0" p="13px" fontWeight={"bold"}>
                11 : 00
              </Text>
            </VStack>
            <Box bg="teal" h="180px">
              <Heading
                m="0"
                textAlign={"center"}
                style={{
                  transform: "rotate(180deg)",
                  writingMode: "vertical-lr",
                }}
                pb="14"
              >
                CLASS TIME
              </Heading>
            </Box>
            <Board
              rowCategory={puzzleData.category1}
              columnCategory={puzzleData.category2}
              squares={grid1and2}
              setSquares={setGrid1and2}
            />
          </HStack>
          <HStack gap="0">
            <VStack gap="0">
              <Text m="0" p="13px" fontWeight={"bold"}>
                ALGEBRA
              </Text>
              <Text m="0" p="13px" fontWeight={"bold"}>
                CALCULUS
              </Text>
              <Text m="0" p="13px" fontWeight={"bold"}>
                GEOMETRY
              </Text>
              <Text m="0" p="13px" fontWeight={"bold"}>
                PROBABILITY
              </Text>
            </VStack>
            <Box bg="orange" h="180px">
              <Heading
                m="0"
                textAlign={"center"}
                style={{
                  transform: "rotate(180deg)",
                  writingMode: "vertical-lr",
                }}
                pb="34"
              >
                COURSE
              </Heading>
            </Box>
            <Board
              rowCategory={puzzleData.category2}
              columnCategory={puzzleData.category3}
              squares={grid2and3}
              setSquares={setGrid2and3}
            />
          </HStack>
        </VStack>
        <Box>
          <HStack gap="0" h="180px" align="flex-end">
            <Text
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
              m="0"
              p="13px"
              fontWeight={"bold"}
            >
              ALGEBRA
            </Text>
            <Text
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
              m="0"
              p="13px"
              fontWeight={"bold"}
            >
              CALCULUS
            </Text>
            <Text
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
              m="0"
              p="13px"
              fontWeight={"bold"}
            >
              GEOMETRY
            </Text>
            <Text
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
              m="0"
              p="13px"
              fontWeight={"bold"}
            >
              PROBABILITY
            </Text>
          </HStack>
          <Box bg="orange">
            <Heading m="0" textAlign={"center"}>
              COURSE
            </Heading>
          </Box>
          <Board
            rowCategory={puzzleData.category1}
            columnCategory={puzzleData.category3}
            squares={grid1and3}
            setSquares={setGrid1and3}
          />
        </Box>
      </HStack>
      <Box mt="24">
        {feedback &&
          (feedback.board == "2and3" ? (
            <Text fontWeight={"bold"}>
              Hint: Here {puzzleData.category2.value[feedback.j]} column and{" "}
              {puzzleData.category3.value[feedback.i]} row must be checked as
              per given clue.
            </Text>
          ) : feedback.board == "1and2" ? (
            <Text fontWeight={"bold"}>
              Hint: Here {puzzleData.category2.value[feedback.j]} column and{" "}
              {puzzleData.category1.value[feedback.i]} row must be checked as
              per given clue.
            </Text>
          ) : (
            <Text fontWeight={"bold"}>
              Hint: Here {puzzleData.category3.value[feedback.j]} column and{" "}
              {puzzleData.category1.value[feedback.i]} row must be checked as
              per given clue.
            </Text>
          ))}
      </Box>
      <HStack spacing={4} mt="24">
        <Button leftIcon={<FaUndo />} colorScheme="teal" variant="solid">
          Undo
        </Button>
        <Button
          leftIcon={<MdFeedback />}
          colorScheme="teal"
          variant="solid"
          onClick={handleFeedback}
        >
          Feedback
        </Button>
        <Button
          rightIcon={<FaCheckCircle />}
          colorScheme="green"
          variant="solid"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </HStack>
    </>
  );
};

export default GridPuzzle;
