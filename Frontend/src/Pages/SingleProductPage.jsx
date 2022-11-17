import React from "react";
import {
  Grid,
  Box,
  HStack,
  Image,
  Heading,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import CommanSizeButtons from "./CommanSizeButtons";
import ProductDetails from "./ProductDetails";
import ReactImageMagnify from "react-image-magnify";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "../utils/Loader";
import CultStoreNavbar from "../Components/CultStoreNavbar/CultStoreNavbar";
import Footer from "../utils/Footer";

function OneProductPage() {
  const sdata = useSelector((state) => state?.single?.singleData);
  const sLoading = useSelector((state) => state?.single?.singleLoading);
  const route = useSelector((state) => state?.button?.route);

  console.log({ route });

  return sLoading ? (
    <Loader />
  ) : (
    <>
      <CultStoreNavbar />
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "2fr 3fr",
          lg: "2fr 3fr",
        }}
        gap="15"
        w="90%"
        m="auto"
        // h="200vh"
        overflow="hidden"
      >
        <Box zIndex="2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: `${sdata.image}`,
              },
              largeImage: {
                src: `${sdata.image}`,
                width: 1400,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "100%",
              },
              shouldUsePositiveSpaceLens: true,
            }}
          />
        </Box>
        <VStack alignItems="start" gap="2" px={[0, 0, 5, 10]}>
          <Heading
            font-family="BrandonTextWeb-Medium"
            fontSize="16px"
            fontWeight="400"
          >
            {sdata.brand}
          </Heading>

          <Heading
            font-family="BrandonTextWeb-Medium"
            fontSize="28px"
            fontWeight="600"
            fontFamily="❤️/"
          >
            {sdata.title}
          </Heading>
          <HStack gap="3">
            <Heading
              color=" rgb(255, 50, 120)"
              fontSize={"20px"}
              letterSpacing=".2px"
              fontWeight="500"
            >
              ₹ {sdata.price1}
            </Heading>
            <Heading
              color="rgba(0, 0, 0, 0.6)"
              fontSize={"20px"}
              letterSpacing=".2px"
              fontWeight="500"
              as="s"
            >
              {" "}
              ₹ {sdata.price2}
            </Heading>
            <Heading
              fontSize={"16px"}
              letterSpacing=".2px"
              fontWeight="300"
              bgColor="rgb(245, 166, 35)"
              p="2"
              color="white"
            >
              {sdata.off}% off
            </Heading>
          </HStack>
          <Text
            color="gray"
            letterSpacing=".3px"
            fontWeight="300"
            fontSize={"13px"}
          >
            Need something for your daily runs or a pair that provides comfort
            all day long? Look no further. Introducing the Cultsport Firebird.
            With a German engineered insole, these runners give you the
            cushioning and rebound you need. An 8mm heel to toe drop, and an
            overall combination of durability and support these shoes make every
            run a smooth one. A must have for the everyday athlete!
          </Text>
          <Text fontWeight="400" fontSize={"14px"} letterSpacing=".3px">
            Choose Size{" "}
            <span style={{ color: "rgb(255, 50, 120)" }}>(Size Guide)</span>{" "}
          </Text>
          <CommanSizeButtons />
          <HStack w="full">
            <Button
              flex="1"
              borderRadius="19px"
              background="#ff385a"
              bgImage="linear-gradient(265deg,#fd2f6e,#f7433c)"
              color="white"
              _hover={{
                background: "#ff385a",
                bgImage: "linear-gradient(265deg,#fd2f6e,#f7433c)",
              }}
            >
              Add to Cart
            </Button>
            <Button
              flex="1"
              borderRadius="19px"
              background="#ff385a"
              bgImage="linear-gradient(265deg,#fd2f6e,#f7433c)"
              color="white"
              _hover={{
                background: "#ff385a",
                bgImage: "linear-gradient(265deg,#fd2f6e,#f7433c)",
              }}
            >
              Buy Now
            </Button>
          </HStack>
          <ProductDetails />
        </VStack>
      </Grid>
      <br />
      <Footer />
    </>
  );
}

export default OneProductPage;
