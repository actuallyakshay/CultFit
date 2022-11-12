import {
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";

function PlaceOrderCompo() {
  return (
    <>
      <Heading
        size="sm"
        fontSize={"13px"}
        letterSpacing={".4px"}
        fontWeight="500"
        color="blackAlpha.700"
      >
        COUPANS
      </Heading>
      <Flex justifyContent="space-between" w="full">
        <HStack>
          <MdOutlineLocalOffer />
          <Text
            letterSpacing={".2px"}
            fontSize={"13px"}
            fontWeight="400"
            color="blackAlpha.700"
          >
            Apply Coupans
          </Text>
        </HStack>
        <Button
          fontSize={"13px"}
          letterSpacing={".4px"}
          fontWeight="500"
          bgColor="white"
          border={"1px solid #ff3e6c"}
          borderRadius={"0"}
          color=" #ff3e6c"
          size="sm"
          _hover={{ bgColor: "#fff0f4" }}
        >
          APPLY
        </Button>
      </Flex>
      <Divider />
      <br />
      <Heading
        size="sm"
        as="i"
        fontSize={"12px"}
        letterSpacing={".4px"}
        fontWeight="500"
        color="blackAlpha.700"
      >
        GIFTING AND PERSONALISATION
      </Heading>
      <Image src="https://i.ibb.co/MPBdkqg/gift.png" />
      <br />
      <Heading
        size="sm"
        fontSize={"12px"}
        letterSpacing={".3px"}
        fontWeight="500"
        color="blackAlpha.700"
      >
        PRICE DETAILS (1 item)
      </Heading>
      <Flex
        justifyContent="space-between"
        w="full"
        letterSpacing={".7px"}
        fontSize={"14px"}
        fontWeight="300"
        color="black"
      >
        <Text>Total MRP</Text>
        <Text>1899</Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        w="full"
        letterSpacing={".7px"}
        fontSize={"14px"}
        fontWeight="300"
        color="black"
      >
        <Text>Total MRP</Text>
        <Text>1899</Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        w="full"
        letterSpacing={".7px"}
        fontSize={"14px"}
        fontWeight="300"
        color="black"
      >
        <Text>Total MRP</Text>
        <Text>1899</Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        w="full"
        letterSpacing={".7px"}
        fontSize={"14px"}
        fontWeight="300"
        color="black"
      >
        <Text>Total MRP</Text>
        <Text>1899</Text>
      </Flex>
      <Divider />
      <Flex
        pb="2"
        justifyContent="space-between"
        w="full"
        letterSpacing={".9px"}
        fontSize={"15px"}
        fontWeight="600"
        color="black"
      >
        <Text>Total Amount</Text>
        <Text>1899</Text>
      </Flex>
      <Button
        borderRadius={"0    "}
        bgColor=" #ff3e6c"
        _hover={{ bgColor: "#ff3e6c" }}
        fontSize={"15px"}
        fontWeight="500"
        w="full"
        color="white"
      >
        PLACE ORDER
      </Button>
    </>
  );
}

export default PlaceOrderCompo;
