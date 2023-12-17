import React, { useState } from "react";
import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Board from "./board";
import { FaCheckCircle, FaUndo } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";

interface Props {}

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
    (grid: any) => grid[0][0] == 1,
    (grid: any) => grid[3][1] == 1,
    (grid: any) => grid[1][2] == 1,
    (grid: any) => grid[2][3] == 1,
  ],
  category1and3Rules: [
    (grid: any) => grid[2][0] == 1,
    (grid: any) => grid[1][1] == 1,
    (grid: any) => grid[3][2] == 1,
    (grid: any) => grid[0][3] == 1,
  ],
  category2and3Rules: [
    (grid: any) => grid[3][0] == 1,
    (grid: any) => grid[2][1] == 1,
    (grid: any) => grid[1][2] == 1,
    (grid: any) => grid[0][3] == 1,
  ],
  // isSolution: function (grid) {
  //   return this.category1and2Rules.every((rule) => rule(this.grid));
  // },
};

const GridPuzzle: React.FC<Props> = ({}) => {
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

  const handleSubmit = () => {
    const checkSolution = () => {
      console.log(
        puzzleData.category1and2Rules.every((rule) => rule(grid1and2))
      );
      console.log(
        puzzleData.category1and3Rules.every((rule) => rule(grid1and3))
      );
      console.log(
        puzzleData.category2and3Rules.every((rule) => rule(grid2and3))
      );
    };
    checkSolution();
    if (
      puzzleData.category1and2Rules.every((rule) => rule(grid1and2)) &&
      puzzleData.category1and3Rules.every((rule) => rule(grid1and3)) &&
      puzzleData.category2and3Rules.every((rule) => rule(grid2and3))
    ) {
      alert("Congratulations!! You found the correct solution!");
    } else {
      alert("Incorrect Solution Please try again. Use Feedback for help.");
    }
  };

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
      <HStack spacing={4}>
        <Button leftIcon={<FaUndo />} colorScheme="teal" variant="solid">
          Undo
        </Button>
        <Button leftIcon={<MdFeedback />} colorScheme="teal" variant="solid">
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
