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
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

function LoginPage() {
    
  return (
    <Box position={"relative"}>
      <Box position={"absolute"} w="fit-content" opacity={0.7}>
        <Image
          m="auto"
          src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
          w="90%"
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
      >
        <Flex h="full" display={["none", "none", "flex", "flex"]}>
          <Image
            src="https://i.ibb.co/W5fTGkZ/undraw-Unlock-re-a558.png"
            w="70%"
            m="auto"
            alignContent={"end"}
          />
        </Flex>
        <Flex align={"center"} justify={"center"} flexDirection="column">
          <Stack spacing={4} w={"full"} maxW={"md"} p={6}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
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
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
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
                placeholder="password here !"
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
            </FormControl>
            <Stack spacing={6}>
              <Button
                mt="3"
                bgColor="rgba(255, 49, 109, 0.7)"
                w="full"
                size="md"
                _hover={{ bgColor: "rgba(255, 49, 109, 0.7)" }}
                letterSpacing={"1.3px"}
                fontWeight="500"
                fontSize="16px"
                color="white"
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Grid>
    </Box>
  );
}

export default LoginPage;
