import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  BsFillCartPlusFill,
  BsFillHeartFill,
  BsShieldLockFill,
  BsSortDownAlt,
} from "react-icons/bs";
import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import InputSearchSingleData from "../InputSearchSingleData";
import PlaceOrderCompo from "./PlaceOrderCompo";

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        position={"sticky"}
        top="0"
        zIndex={5}
        bgColor="white"
        justifyContent={"space-between"}
        py="3"
        px="10"
      >
        <Box>
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
            w="70%"
          />
        </Box>
        <CircularProgress value={50} size="50px" color="green.400">
          <CircularProgressLabel>50%</CircularProgressLabel>
        </CircularProgress>
        <HStack>
          <BsShieldLockFill color="green" fontSize={"30px"} />
          <Text fontWeight={"500"} color="blackAlpha.600">
            1 0 0 % {"  "} S E C U R E
          </Text>
        </HStack>
      </Flex>
      <Divider />
      <Grid gridTemplateColumns={"2fr 1fr"} w="75%" m="auto" mt="8" gap="4">
        <VStack>
          <Flex
            w="full"
            justifyContent={"space-between"}
            border="1px solid 	#F0F0F0"
            px="3"
            alignItems={"center"}
            py="3"
          >
            <VStack alignItems={"start"}>
              <Text
                fontSize={"13px"}
                fontWeight="400"
                color="blackAlpha.700"
                letterSpacing={".3px"}
              >
                Deliver to :{" "}
                <span
                  style={{
                    fontWeight: "600",
                    color: "black",
                    letterSpacing: ".4px",
                  }}
                >
                  {" "}
                  Akshay rajput, 246731
                </span>
              </Text>
              <Text
                letterSpacing={".1px"}
                fontSize={"12px"}
                fontWeight="400"
                color="blackAlpha.700"
              >
                737/A, Noida sector 19, A Block, Noida{" "}
              </Text>
            </VStack>
            <Button
              fontSize={"13px"}
              letterSpacing={".4px"}
              fontWeight="500"
              bgColor="white"
              border={"1px solid #ff3e6c"}
              borderRadius={"0"}
              color=" #ff3e6c"
              _hover={{ bgColor: "#fff0f4" }}
            >
              CHANGE ADDRESS
            </Button>
          </Flex>
          <VStack
            alignItems={"start"}
            w="full"
            border="1px solid 	#F0F0F0"
            px="3"
            py="5"
          >
            <HStack gap="3">
              <CiDiscount1 />
              <Text letterSpacing={".1px"} fontSize={"15px"} fontWeight="600">
                Available offers
              </Text>
            </HStack>
            <UnorderedList
              pl="6"
              fontSize={"13px"}
              fontWeight="300"
              color="blackAlpha.700"
              letterSpacing={".3px"}
            >
              <ListItem>
                10% Instant Discount on ICICI Bank Credit Cards on a min spend
                of Rs 4,000. TCA
              </ListItem>
              <ListItem>
                5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
              </ListItem>
              <ListItem>
                10% Cashback upto Rs 100 on Ola Money Postpaid or Wallet
                transaction on a min spend of Rs 1000 . TCA
              </ListItem>
              <ListItem>
                10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA
              </ListItem>
              <ListItem>
                Upto Rs 750 Cashback on Mobikwik Wallet Transactions on a min
                spend of Rs 2,000.Use code MBK750 on Mobikwik.TCA
              </ListItem>
              <ListItem>
                5% Cashback upto Rs 75 on a minimum spend of Rs 1,500 with
                PayZapp. TCA
              </ListItem>
            </UnorderedList>
          </VStack>
          <HStack
            fontSize={"15px"}
            w="full"
            border="1px solid 	#F0F0F0"
            px="3"
            py="3"
            color="blackAlpha.700"
          >
            <TbTruckDelivery fontSize={"25px"} />
            <Text>
              Yay !{" "}
              <span
                style={{
                  fontWeight: "600",
                  color: "black",
                  letterSpacing: ".4px",
                }}
              >
                No convenience fee{" "}
              </span>{" "}
              on this order
            </Text>
          </HStack>
          <VStack
            border="1px solid #F0F0F0"
            borderTop={"0"}
            w="full"
            gap="5"
            alignItems={"center"}
          >
            {abc?.map((elem) => {
              return (
                <>
                  <Grid
                    gridTemplateColumns={{
                      base: "repeat(2,1fr)",
                      sm: "repeat(2,1fr)",
                      md: "repeat(3,1fr)",
                      lg: "1fr 2fr 1fr",
                    }}
                    w="full"
                    m="auto"
                    pt="0"
                    border="1px solid #F0F0F0"
                    alignItems={"center"}
                  >
                    <Box overflow="hidden" w="fit-content">
                      <Image
                        src={elem.image}
                        w="80%"
                        _hover={{
                          transform: "scale(1.08)",
                          transformOrigin: "50% 50%",
                          cursor: "pointer",
                          opacity: ".9",
                        }}
                        transition="transform .5s"
                      />
                    </Box>
                    <VStack alignItems="start" pt="2" gap="1">
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
                        <span style={{ fontSize: "12px" }}>
                          Delivery in 2 days
                        </span>
                      </HStack>
                    </VStack>
                    <VStack gap="0">
                      <Button
                        onClick={onOpen}
                        color="white"
                        //   border={"1px solid #ff3e6c"}
                        borderRadius={"0    "}
                        bgColor=" #ff3e6c"
                        _hover={{ bgColor: "#ff3e6c" }}
                        fontSize={"13px"}
                        fontWeight="300"
                        size="sm"
                        w="91px"
                      >
                        Qty &nbsp; <BsSortDownAlt />
                      </Button>

                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalContent w="310px">
                          <ModalHeader>Select Quantity</ModalHeader>

                          <ModalCloseButton />
                          <Divider />
                          <br />
                          <ModalBody>
                            <Grid gridTemplateColumns={"repeat(5,1fr)"} gap="3">
                              {new Array(9).fill(0).map((elem, i) => {
                                return (
                                  <Button
                                    border="1px solid #ff3e6c"
                                    bgColor={"white"}
                                    _hover={{ bgColor: "none" }}
                                    borderRadius={"full"}
                                  >
                                    {i + 1}
                                  </Button>
                                );
                              })}
                            </Grid>
                          </ModalBody>

                          <ModalFooter>
                            <Button
                              w="full"
                              fontSize={"15px"}
                              letterSpacing={".5px"}
                              fontWeight="400"
                              color="white"
                              //   border={"1px solid #ff3e6c"}
                              borderRadius={"0"}
                              bgColor=" #ff3e6c"
                              _hover={{ bgColor: "#ff3e6c" }}
                            >
                              Done
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                      <Button
                        color="white"
                        //   border={"1px solid #ff3e6c"}
                        w="91px"
                        borderRadius={"0  "}
                        bgColor=" #ff3e6c"
                        _hover={{ bgColor: "#ff3e6c" }}
                        size="sm"
                      >
                        <MdDeleteForever fontSize={"15px"} />
                      </Button>
                      <Button
                        color="white"
                        //   border={"1px solid #ff3e6c"}
                        // w="80px"
                        borderRadius={"0  "}
                        bgColor=" #ff3e6c"
                        _hover={{ bgColor: "#ff3e6c" }}
                        fontSize={"13px"}
                        fontWeight="300"
                        size="sm"
                      >
                        Move to &nbsp; <BsFillHeartFill fontSize={"15px"} />
                      </Button>
                    </VStack>
                  </Grid>
                </>
              );
            })}
          </VStack>
        </VStack>
        <VStack
          border="1px solid 	#F0F0F0"
          h="fit-content"
          px="3"
          py="5"
          alignItems={"start"}
          position="sticky"
          top="14%"
        >
          <PlaceOrderCompo />
        </VStack>
      </Grid>
    </>
  );
}

export default Cart;

const abc = [
  {
    "style-prefix-0 href":
      "https://cultsport.com/solid-active-polo-t-shirt/product/3746?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9XgiP9a63Ntoe4G8jWhXeKB1",
    brand: "CULTSPORT",
    title: "Solid Active Polo T-shirt",
    price1: "₹ 1364",
    price2: "₹ 2099",
    off: "35% Off",
    launched: "",
  },
  {
    "style-prefix-0 href":
      "https://cultsport.com/solid-active-polo-t-shirt/product/3746?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9XgiP9a63Ntoe4G8jWhXeKB1",
    brand: "CULTSPORT",
    title: "Solid Active Polo T-shirt",
    price1: "₹ 1364",
    price2: "₹ 2099",
    off: "35% Off",
    launched: "",
  },
  {
    "style-prefix-0 href":
      "https://cultsport.com/solid-active-polo-t-shirt/product/3746?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9XgiP9a63Ntoe4G8jWhXeKB1",
    brand: "CULTSPORT",
    title: "Solid Active Polo T-shirt",
    price1: "₹ 1364",
    price2: "₹ 2099",
    off: "35% Off",
    launched: "",
  },
  {
    "style-prefix-0 href":
      "https://cultsport.com/solid-active-polo-t-shirt/product/3746?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9XgiP9a63Ntoe4G8jWhXeKB1",
    brand: "CULTSPORT",
    title: "Solid Active Polo T-shirt",
    price1: "₹ 1364",
    price2: "₹ 2099",
    off: "35% Off",
    launched: "",
  },
  {
    "style-prefix-0 href":
      "https://cultsport.com/solid-active-polo-t-shirt/product/3746?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9XgiP9a63Ntoe4G8jWhXeKB1",
    brand: "CULTSPORT",
    title: "Solid Active Polo T-shirt",
    price1: "₹ 1364",
    price2: "₹ 2099",
    off: "35% Off",
    launched: "",
  },
  {
    "style-prefix-0 href":
      "https://cultsport.com/solid-active-polo-t-shirt/product/3746?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9XgiP9a63Ntoe4G8jWhXeKB1",
    brand: "CULTSPORT",
    title: "Solid Active Polo T-shirt",
    price1: "₹ 1364",
    price2: "₹ 2099",
    off: "35% Off",
    launched: "",
  },
];
