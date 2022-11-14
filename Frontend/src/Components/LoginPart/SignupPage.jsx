import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  PinInput,
  PinInputField,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsShieldLockFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";

function SignupPage() {
  const [value, setValue] = useState("");
  return (
    <Box position={"realtive"}>
      <Box position={"absolute"} w="fit-content" opacity={0.5} zIndex={-1}>
        <Image
          m="auto"
          src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
          w="100%"
        />
      </Box>
      <Flex
        position={"sticky"}
        top="0"
        zIndex={5}
        bgColor="transparent"
        justifyContent={"space-between"}
        py="3"
        px="10"
      >
        <Box>
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
            w="65%"
          />
        </Box>
        <HStack>
          <BsShieldLockFill color="green" fontSize={"30px"} />
          <Text fontWeight={"500"} color="blackAlpha.600">
            1 0 0 % {"  "} S E C U R E
          </Text>
        </HStack>
      </Flex>
      <Divider />
      <Grid
        w="80%"
        m="auto"
        position="relative"
        gridTemplateColumns={"repeat(2,1fr)"}
        // gap=""
      >
        <Flex h="full" display={["none", "none", "flex", "flex"]}>
          <Image
            src="https://i.ibb.co/NsqbWyn/undraw-step-to-the-sun-nxqq.png"
            w="70%"
            m="auto"
            alignContent={"end"}
            opacity=".96"
          />
        </Flex>
        <VStack alignItems="flex-start">
          <Flex
            flexDirection={"column"}
            w={["95%", "75%", "75%", "65%"]}
            gap="3"
            mx="auto"
            mt="10"
          >
            <FormControl isRequired>
              <FormLabel mb="0">Name</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  fontWeight={"600"}
                  letterSpacing="1px"
                  type="text"
                  outline="none"
                  flex="1"
                  border={"none"}
                  borderBottom={"1px solid #ff3e6c"}
                  w="full"
                  borderRadius={0}
                  focusBorderColor="none"
                  placeholder="Enter your name"
                  _hover={{ borderBottom: "1px solid #ff3e6c" }}
                  _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    letterSpacing: "0",
                    fontWeight: "400",
                  }}
                  onFocus={{ border: "0", borderBottom: "1px solid #ff3e6c" }}
                  // name="name"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel mb="0">Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  fontWeight={"600"}
                  letterSpacing="1px"
                  type="text"
                  outline="none"
                  flex="1"
                  border={"none"}
                  borderBottom={"1px solid #ff3e6c"}
                  w="full"
                  borderRadius={0}
                  focusBorderColor="none"
                  placeholder="your-email@example.com"
                  _hover={{ borderBottom: "1px solid #ff3e6c" }}
                  _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    letterSpacing: "0",
                    fontWeight: "400",
                  }}
                  onFocus={{ border: "0", borderBottom: "1px solid #ff3e6c" }}
                  name="name"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel mb="0">Password</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  fontWeight={"600"}
                  letterSpacing="1px"
                  type="text"
                  outline="none"
                  flex="1"
                  border={"none"}
                  borderBottom={"1px solid #ff3e6c"}
                  w="full"
                  borderRadius={0}
                  focusBorderColor="none"
                  placeholder="Enter your name"
                  _hover={{ borderBottom: "1px solid #ff3e6c" }}
                  _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    letterSpacing: "0",
                    fontWeight: "400",
                  }}
                  onFocus={{ border: "0", borderBottom: "1px solid #ff3e6c" }}
                  name="name"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel mb="2">Pin Code</FormLabel>
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </FormControl>
            <br />
            <Link to="/login">
              <Button
                bgColor="rgba(255, 49, 109, 0.7)"
                w="full"
                size="sm"
                py="4"
                _hover={{ bgColor: "rgba(255, 49, 109, 0.7)" }}
                letterSpacing={"1.3px"}
                fontWeight="500"
                fontSize="14px"
                color="white"
                leftIcon={<AiOutlineMail fontSize={"20px"} />}
              >
                {" "}
                SignUp
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Grid>
    </Box>
  );
}

export default SignupPage;
