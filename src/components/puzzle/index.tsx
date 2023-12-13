import React from "react";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Board from "./board";

interface Props {}

const GridPuzzle: React.FC<Props> = ({}) => {
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
            <Board />
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
            <Board />
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
          <Board />
        </Box>
      </HStack>
    </>
  );
};

export default GridPuzzle;
