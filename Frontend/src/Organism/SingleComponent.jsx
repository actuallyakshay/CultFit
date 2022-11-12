import React from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  Toast,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { BsCartPlusFill, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleData } from "../Redux/SingleProduct/single.actions";
import { SlClose } from "react-icons/sl";
import styled from "styled-components";

function SingleProduct({
  image,
  price1,
  price2,
  off,
  title,
  brand,
  launched,
  _id,
}) {
  const route = useSelector((state) => state?.button?.route);
  const dispatch = useDispatch();
  const toast = useToast();

  const { wish } = useParams();

  const handleGO = (route, _id) => {
    dispatch(getSingleData(route, _id));
  };

  return (
    <StyledVStack alignItems={"start"} position="relative">
      <Link to={route == "" ? "/" : `/${route}/${_id}`}>
        <Box
          className="container"
          overflow={"hidden"}
          borderRadius={"2px"}
          onClick={() => handleGO(route, _id)}
          position="relative"
        >
          <Image
            src={image}
            _hover={{
              transform: "scale(1.1)",
              transformOrigin: "50% 50%",
              cursor: "pointer",
              opacity: ".9",
            }}
            transition="transform .5s"
          />
          <Box
            className="child"
            bgColor="#fff0f4"
            zIndex={10}
            h="9vh"
            w="full"
            position="absolute"
            bottom="0"
            color=" #ff3e6c"
          >
            <HStack
              justifyContent="center"
              alignItems="center"
              flexDirection={"row"}
              pt="3"
              gap="10"
            >
              <Heading fontSize={"15px"} letterSpacing='.8px' fontWeight="500" size="md">
                ADD TO CART
              </Heading>
              <BsCartPlusFill fontSize={"25px"} color=" #ff3e6c" />
            </HStack>
          </Box>
        </Box>
      </Link>

      {wish !== undefined ? (
        <Box
          position="absolute"
          top="0"
          right="3%"
          color="blackAlpha.600"
          _hover={{ cursor: "pointer", color: "black" }}
          onClick={() =>
            toast({
              duration: 2000,
              title: `Removed form Wishlist`,
              position: "top",
              status: "success",
              isClosable: true,
            })
          }
        >
          <SlClose fontSize={"27px"} />
        </Box>
      ) : (
        <Box
          position="absolute"
          top="1%"
          right="3%"
          color="blackAlpha.600"
          _hover={{ cursor: "pointer", color: "black" }}
          onClick={() =>
            toast({
              duration: 2000,
              title: `Added to Wishlist`,
              position: "top",
              status: "success",
              isClosable: true,
            })
          }
        >
          <BsHeart fontSize={"27px"} />
        </Box>
      )}

      <Box
        position={"absolute"}
        bgColor={"rgb(227, 226, 252)"}
        color="rgb(115, 108, 240)"
        fontSize="12px"
        top="0%"
        px="1"
        display={!launched ? "none" : "flex"}
      >
        Just launched
      </Box>

      <Text color="rgba(0, 0, 0, 0.6)" fontSize={"15px"} letterSpacing=".2px">
        {brand}
      </Text>
      <Heading
        color="rgb(38, 38, 38)"
        fontSize={"12px"}
        letterSpacing=".2px"
        fontWeight="400"
        display={{ base: "none", md: "flex" }}
      >
        {title}
      </Heading>
      <Flex
        alignItems={"center"}
        justifyContent="center"
        gap={{ base: "1", sm: "1", md: "2", lg: "3" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex gap="3">
          <Heading
            color="rgb(38, 38, 38)"
            fontSize={"17px"}
            letterSpacing=".2px"
            fontWeight="500"
          >
            {price1}
          </Heading>
          <Heading
            color="rgba(0, 0, 0, 0.6)"
            fontSize={"17px"}
            letterSpacing=".2px"
            fontWeight="400"
            as="s"
          >
            {" "}
            {price2}
          </Heading>
        </Flex>
        <Heading
          color=" rgb(255, 50, 120)"
          fontSize={"17px"}
          letterSpacing=".2px"
          fontWeight="500"
        >
          {off}
        </Heading>
      </Flex>
    </StyledVStack>
  );
}

export default SingleProduct;

const StyledVStack = styled(VStack)`
  .child {
    transform: translateY(100%);
  }
  .container:hover .child {
    transition: transform 0.2s ease-in-out;
    transform: translateY(0);
  }
`;
