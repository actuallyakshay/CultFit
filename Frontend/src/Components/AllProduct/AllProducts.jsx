// import {
//   Box,
//   Button,
//   Flex,
//   Grid,
//   Heading,
//   HStack,
//   Image,
//   Link,
//   Text,
//   VStack,
//   Input,
// } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CommanButton from "../../Organism/CommanButton";
// import SortByPrice from "../../Organism/FilterByPrice";
// import FilterByPriceOff from "../../Organism/FilterByPriceOff";
// import SingleProduct from "../../Organism/SingleComponent";
// import SortByDiscount from "../../Organism/SortByDiscount";
// import { getData } from "../../Redux/GetData/getData.actions";
// import { BsSearch } from "react-icons/bs";
// import InputSearchSingleData from "../../Organism/InputSearchSingleData";
// import { getInputData } from "../../Redux/Throttling/t.actions";

// function AllProducts() {
//   const data = useSelector((state) => state?.getData?.data);
//   const isLoading = useSelector((state) => state?.getData?.isLoading);
//   const route = useSelector((state) => state?.button?.route);
//   const [temp, setTemp] = useState([]);
//   const dispatch = useDispatch();
//   // const [par, setPar] = useState("");
//   const [value, setValue] = useState("");
//   const [input, setInput] = useState([]);
//   const [height, setHeight] = useState(66);
//   const INPUT = useSelector((state) => state.inputData.inputData);
//   const inputLoading = useSelector((state) => state.inputData.inputLoading);

//   useEffect(() => {
//     setTemp(data);
//   }, [data]);

//   useEffect(() => {
//     if (value == "") {
//       setInput([]);
//     } else {
//       setInput(INPUT);
//     }
//   }, [INPUT]);

//   const handleFilter = (el) => {
//     dispatch(getData(route, el));
//     // setPar(el);
//   };

//   const handleGet = (el) => {
//     dispatch(getData(el));
//   };

//   const handleLH = () => {
//     const validate1 = temp?.map((elem) => {
//       return { ...elem };
//     });
//     setTemp(
//       validate1?.sort((a, b) => {
//         return (
//           Number(a.price1.trim().substring(2)) -
//           Number(b.price1.trim().substring(2))
//         );
//       })
//     );
//   };

//   const handleHL = () => {
//     const validate1 = temp?.map((elem) => {
//       return { ...elem };
//     });
//     setTemp(
//       validate1?.sort((a, b) => {
//         return (
//           Number(b.price1.trim().substring(2)) -
//           Number(a.price1.trim().substring(2))
//         );
//       })
//     );
//   };

//   const handleDiscountSort = (asc) => {
//     dispatch(getData(route, "", "", asc));
//     setTemp(data);
//   };

//   const hanldeOff = (off) => {
//     console.log(off);
//     dispatch(getData(route, "", off));
//     setTemp(data);
//   };

//   const handleChange = (e) => {
//     setValue(e.target.value);
//     dispatch(getInputData(route, value));
//   };

//   return isLoading ? (
//     <Heading>....Loading</Heading>
//   ) : (
//     <>
//       {route == "" ? <Heading>Mnoj njijjijdenfiuej</Heading> : ""}
//       {/* <Flex> */}
//       {/* <Text fontSize={"13px"} letterSpacing=".8px" as="samp">
//           {" "}
//           <span
//             style={{
//               color: "gray",
//               fontSize: "13px",
//               letterSpacing: ".8px",
//             }}
//           >
//             Home
//           </span>{" "}
//           <Link onClick={() => handleGet(route)}>
//             {route != "" ? `- ${route}` : ""}
//           </Link>
//           <span style={{ fontSize: "12px", letterSpacing: ".8px" }}>
//             {" "}
//             {par != "" ? `- ${par}` : ""}
//           </span>
//         </Text>
//       </Flex> */}
//       <Grid
//         gridTemplateColumns={"repeat(2,1fr)"}
//         // border="2px solid red"
//         w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
//         m="auto"
//         fontFamily={"sans-serif"}
//         // justifyContent={"space-between"}
//         alignItems="center"
//         gap="5"
//         display={route == "" ? "none" : "grid"}
//       >
//         <Flex
//           border="1px solid gray"
//           flexDirection="column"
//           position="relative"
//           borderRadius="8px"
//         >
//           <Flex position="relative" alignItems="center" borderRadius="10px">
//             <Input
//               value={value}
//               type="text"
//               placeholder="enter query here"
//               outline="none"
//               border="none"
//               flex="1"
//               letterSpacing=".4px"
//               fontSize="19px"
//               focusBorderColor="none"
//               _placeholder={{
//                 opacity: 0.4,
//                 color: "gray",
//                 letterSpacing: "0",
//               }}
//               onChange={(e) => handleChange(e)}
//             />
//             <Box pr="10px">
//               <BsSearch fontSize="20px" color="rgb(255, 50, 120)" />
//             </Box>
//           </Flex>
//           {inputLoading ? (
//             <Heading> ...... loading</Heading>
//           ) : (
//             <InputSearchSingleData
//               input={input}
//               value={value}
//               height={height}
//             />
//           )}
//         </Flex>
//         <Flex
//           // border="2px solid red"
//           justifyContent={"space-between"}
//           alignItems="center"
//           gap="2"
//         >
//           <FilterByPriceOff hanldeOff={hanldeOff} />
//           <SortByDiscount handleDiscountSort={handleDiscountSort} />
//           <SortByPrice handleLH={handleLH} handleHL={handleHL} />
//         </Flex>
//       </Grid>
//       <br />
//       {route == "topSellings" ? (
//         <CommanButton array={bestSellings} handleFilter={handleFilter} />
//       ) : route == "topArrivals" ? (
//         <CommanButton array={newArrivals} handleFilter={handleFilter} />
//       ) : route == "mens" ? (
//         <CommanButton array={mens} handleFilter={handleFilter} />
//       ) : route == "womens" ? (
//         <CommanButton array={women} handleFilter={handleFilter} />
//       ) : route == "footwears" ? (
//         <CommanButton array={footWear} handleFilter={handleFilter} />
//       ) : route == "cardio" ? (
//         <CommanButton array={cardio} handleFilter={handleFilter} />
//       ) : route == "cycles" ? (
//         <CommanButton array={cycles} handleFilter={handleFilter} />
//       ) : route == "accessories" ? (
//         <CommanButton array={accessrories} handleFilter={handleFilter} />
//       ) : route == "supplements" ? (
//         <CommanButton array={supplements} handleFilter={handleFilter} />
//       ) : route == "equipments" ? (
//         <CommanButton array={equipemnts} handleFilter={handleFilter} />
//       ) : (
//         ""
//       )}
//       <Grid
//         gridTemplateColumns={{
//           base: "repeat(2,1fr)",
//           sm: "repeat(2,1fr)",
//           md: "repeat(3,1fr)",
//           lg: "repeat(4,1fr)",
//         }}
//         gap={{ base: "2", sm: "3", md: "4", lg: "6" }}
//         rowGap="6"
//         w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
//         m="auto"
//         fontFamily={"sans-serif"}
//         mt="5"
//         position={"relative"}
//       >
//         {temp?.map((el) => {
//           return <SingleProduct {...el} key={el._id} />;
//         })}
//       </Grid>
//     </>
//   );
// }

// export default AllProducts;













