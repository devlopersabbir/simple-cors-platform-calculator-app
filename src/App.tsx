import {
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TbSquareRoot, TbReload } from "react-icons/tb";
import { IoIosBackspace } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { BsCalculator } from "react-icons/bs";
import { FaEquals, FaMinus, FaTrash } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { TiDivide } from "react-icons/ti";
import { TbMathXDivideY2 } from "react-icons/tb";
import { useState } from "react";
import * as math from "mathjs";

const App = () => {
  const [display, setDisplay] = useState<string>("");
  const calclution = (value: string) => {
    const displayValue = display + value;
    setDisplay(displayValue);
  };

  const calcluate = async () => {
    let result: any;
    try {
      result = math.evaluate(display);
    } catch (error) {
      result = "Error" + error;
    }

    // const displayValue = eval(display);
    setDisplay(result.toString());
  };

  const clear = () => {
    setDisplay("");
  };

  const backSpace = () => {
    if (display) {
      console.log(display);
      const displayValue = display?.slice(0, -1);
      setDisplay(displayValue);
    }
  };

  const root = () => {
    const displayValue = Math.sqrt(Number(display));

    setDisplay(displayValue.toString());
  };
  return (
    <>
      <Container w="320px" px={7} py={5} bg="white" mx="auto">
        <Flex
          overflowX="scroll"
          scrollBehavior="smooth"
          w="full"
          h="16"
          color="gray.900"
          px={4}
          alignItems="center"
          justifyContent="flex-end"
          align="center"
          fontSize="4xl"
          rounded="xl"
          boxShadow="inset 0px 0px 15px 10px #EDEDED"
        >
          <Text textAlign="right" cursor="pointer">
            {display}
          </Text>
        </Flex>
        <HStack my={5} justify="space-between">
          <HStack>
            <Icon
              bg="blackAlpha.50"
              color="gray.500"
              fontSize="2xl"
              rounded="full"
              shadow="2xl"
              p={1}
              as={TbReload}
              cursor="pointer"
              onClick={clear}
            />
            <Icon
              cursor="pointer"
              onClick={clear}
              bg="blackAlpha.50"
              color="gray.500"
              fontSize="2xl"
              rounded="full"
              shadow="2xl"
              p={1}
              as={BsCalculator}
            />
          </HStack>
          <HStack>
            <Icon
              color="gray.500"
              bg="blackAlpha.50"
              fontSize="2xl"
              rounded="full"
              shadow="2xl"
              p={1}
              onClick={backSpace}
              as={IoIosBackspace}
            />
          </HStack>
        </HStack>
        <Flex>
          <VStack w="100%">
            <HStack alignItems="center" justifyContent="space-between" w="full">
              <IconButton
                w="full"
                bg="red.500"
                _hover={{ bg: "red.600" }}
                color="white"
                shadow="inner"
                rounded="lg"
                fontSize={"lg"}
                aria-label="clear"
                onClick={clear}
                icon={<FaTrash />}
              />
              <IconButton
                w="full"
                bg="red.500"
                _hover={{ bg: "red.600" }}
                color="white"
                shadow="inner"
                rounded="lg"
                fontSize={"lg"}
                aria-label="back-space"
                icon={<TbMathXDivideY2 />}
              />
              <IconButton
                w="full"
                bg="red.500"
                _hover={{ bg: "red.600" }}
                color="white"
                shadow="inner"
                rounded="lg"
                fontSize={"lg"}
                aria-label="root sine"
                onClick={root}
                icon={<TbSquareRoot />}
              />
              <IconButton
                w="10"
                h="10"
                bg="green.600"
                border="4px"
                _hover={{ bg: "green.700" }}
                color="white"
                shadow="inner"
                rounded="full"
                fontSize={"xl"}
                aria-label="vag sine"
                onClick={() => calclution("/")}
                icon={<TiDivide />}
              />
            </HStack>
            <HStack justifyContent="space-between" w="100%">
              <Button
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                fontSize={"xl"}
                onClick={() => calclution("7")}
              >
                7
              </Button>
              <Button
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                fontSize={"xl"}
                onClick={() => calclution("8")}
              >
                8
              </Button>
              <Button
                onClick={() => calclution("9")}
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                fontSize={"xl"}
              >
                9
              </Button>
              <IconButton
                w="10"
                h="10"
                bg="green.600"
                border="4px"
                _hover={{ bg: "green.700" }}
                color="white"
                shadow="inner"
                rounded="full"
                fontSize={"xl"}
                aria-label="gun sine"
                onClick={() => calclution("*")}
                icon={<VscChromeClose />}
              />
            </HStack>
            <HStack justifyContent="space-between" w="100%">
              <Button
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                fontSize={"xl"}
                onClick={() => calclution("4")}
              >
                4
              </Button>
              <Button
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                fontSize={"xl"}
                onClick={() => calclution("5")}
              >
                5
              </Button>
              <Button
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                fontSize={"xl"}
                onClick={() => calclution("6")}
              >
                6
              </Button>
              <IconButton
                w="10"
                h="10"
                bg="green.600"
                border="4px"
                _hover={{ bg: "green.700" }}
                color="white"
                shadow="inner"
                rounded="full"
                fontSize={"xl"}
                aria-label="minus sine"
                onClick={() => calclution("-")}
                icon={<FaMinus />}
              />
            </HStack>
            <HStack justifyContent="space-between" w="100%">
              <Button
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                fontSize={"xl"}
                onClick={() => calclution("1")}
              >
                1
              </Button>
              <Button
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                fontSize={"xl"}
                onClick={() => calclution("2")}
              >
                2
              </Button>
              <Button
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                onClick={() => calclution("3")}
                fontSize={"xl"}
              >
                3
              </Button>
              <IconButton
                w="10"
                h="10"
                bg="green.600"
                border="4px"
                _hover={{ bg: "green.700" }}
                color="white"
                shadow="inner"
                rounded="full"
                fontSize={"xl"}
                aria-label="plus sine"
                icon={<GoPlus />}
                onClick={() => calclution("+")}
              />
            </HStack>
            <HStack justifyContent="space-between" w="100%">
              <Button
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                fontSize={"xl"}
                onClick={() => calclution("0")}
              >
                0
              </Button>
              <Button
                w="full"
                variant="unstyled"
                bg="gray.50"
                color="gray.500"
                shadow="md"
                rounded="lg"
                fontSize={"xl"}
                onClick={() => calclution(".")}
              >
                .
              </Button>
              <IconButton
                w="10"
                h="10"
                bg="yellow.300"
                border="4px"
                _hover={{ bg: "yellow.400" }}
                color="white"
                shadow="inner"
                rounded="full"
                fontSize={"xl"}
                aria-label=" equals"
                onClick={calcluate}
                icon={<FaEquals />}
              />
            </HStack>
          </VStack>
        </Flex>
        <HStack
          w="full"
          textAlign="center"
          fontWeight="semibold"
          mt={3}
          justify="center"
        >
          <Text>Created by </Text>
          <Text
            cursor="pointer"
            color="green"
            textDecor="underline"
            onClick={() =>
              window.open("https://www.showwcase.com/devlopersabbir")
            }
          >
            @devlopersabbir
          </Text>
        </HStack>
      </Container>
    </>
  );
};

export default App;
