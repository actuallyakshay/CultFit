import { Box, Grid, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../SingleComponent";

function Wishlist() {
//   const { wish } = useParams();
  return (
    <Box w="100%" bgColor="#F8F8F8">
      <br />
      <br />
      <HStack w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }} m="auto">
        <Heading size="sm">My Wishlist </Heading>
        <Text>8 Items</Text>
      </HStack>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={{ base: "2", sm: "3", md: "15", lg: "20" }}
        rowGap="6"
        w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
        m="auto"
        fontFamily={"sans-serif"}
        mt="5"
        position={"relative"}
      >
        {data?.map((el) => {
          return <SingleProduct {...el} key={el._id} />;
        })}
      </Grid>
    </Box>
  );
}

export default Wishlist;

const data = [
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
