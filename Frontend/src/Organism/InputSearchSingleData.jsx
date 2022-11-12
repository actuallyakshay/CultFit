import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

function InputSearchSingleData({ input, value, height }) {
  return (
    <Flex
      flexDirection="column"
      h={value == "" ? "" : `66vh`}
      overflow={"auto"}
      position="absolute"
      zIndex="2"
      bgColor="white"
      top="100%"
      left="0"
      right="0"
      _hover={{ cursor: "pointer" }}
      // borderRadius="15px"
      // display={h == }
    >
      {input?.map((elem) => {
        return (
          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "1fr 2fr 1fr",
            }}
            h="22vh"
            w="500px"
            m="auto"
            border="1px solid gray"
            //   bgColor="pink.50"
          >
            <Box overflow="hidden" w="fit-content">
              <Image
                src={elem.image}
                w="80%"
                _hover={{
                  transform: "scale(1.2)",
                  transformOrigin: "50% 50%",
                  cursor: "pointer",
                  opacity: ".9",
                }}
                transition="transform .5s"
              />
            </Box>
            <VStack alignItems="start" pt="2">
              <Text
                color="rgba(0, 0, 0, 0.6)"
                fontSize={"15px"}
                letterSpacing=".2px"
              >
                {elem.brand}
              </Text>
              <Heading
                color="rgb(38, 38, 38)"
                fontSize={"12px"}
                letterSpacing=".2px"
                fontWeight="400"
                display={{ base: "none", md: "flex" }}
              >
                {elem.title}
              </Heading>
              <HStack gap="4">
                <Heading
                  color="rgb(38, 38, 38)"
                  fontSize={"15px"}
                  letterSpacing=".2px"
                  fontWeight="500"
                >
                  {elem.price1}
                </Heading>
                <Heading
                  color="rgba(0, 0, 0, 0.6)"
                  fontSize={"15px"}
                  letterSpacing=".2px"
                  fontWeight="400"
                  as="s"
                >
                  {" "}
                  {elem.price2}
                </Heading>
                <Heading
                  color=" rgb(255, 50, 120)"
                  fontSize={"17px"}
                  letterSpacing=".2px"
                  fontWeight="500"
                >
                  {elem.off}
                </Heading>
              </HStack>
              <HStack>
                <CiDeliveryTruck color="rgb(255, 50, 120)" />
                <Text fontSize={"12px"} as="i" fontWeight={"500"}>
                  EXPRESS
                </Text>{" "}
                <span style={{ fontSize: "12px" }}>Delivery in 2 days</span>
              </HStack>
            </VStack>
            <VStack pt="5" gap="3">
              <BsFillHeartFill
                fontSize={"32px"}
                color="rgb(255, 50, 120)"
                _hover={{ color: "blue" }}
                onClick={() => console.log("object")}
              />
              <BsFillCartPlusFill
                fontSize={"32px"}
                color="rgb(255, 50, 120)"
                _hover={{ color: "blue" }}
              />
            </VStack>
          </Grid>
        );
      })}
    </Flex>
  );
}

export default InputSearchSingleData;
