import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../utils/Loader";
import SliderCompo from "../utils/Slider";
import Carousel3 from "./Carosal3";
import Carosoul2 from "./Carosoul2";
import Carousel from "./CarosoulCompo";
import HeadingLine from "./HeadingLine";

// const Carousel = React.lazy(() => import("./CarosoulCompo"));

function HomePage() {
  const dispatch = useDispatch();

  const [best, setBest] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  const [tshirt, setTshirt] = useState([]);
  const [cycle, setCycle] = useState([]);
  const [bike, setBike] = useState([]);
  const [mill, setMill] = useState([]);
  const [access, setAccess] = useState([]);
  const [top, setTop] = useState([]);
  const [bottom, setBottom] = useState([]);
  const [Health, setHealth] = useState([]);
  const [homeLoading, setHomeLoading] = useState(false);

  useEffect(() => {
    setHomeLoading(true);
    axios
      .get(`http://localhost:8080/topSellings?page=1&limit=32`)
      .then((res) => {
        setBest(res.data);
        setHomeLoading(false);
      });
    axios
      .get(`http://localhost:8080/topArrivals?page=1&limit=32`)
      .then((res) => setArrivals(res.data));
    axios
      .get(`http://localhost:8080/topSellings?q=tshi&page=1&limit=32`)
      .then((res) => setTshirt(res.data));
    axios
      .get(`http://localhost:8080/cycles?page=1&limit=32`)
      .then((res) => setCycle(res.data));
    axios
      .get(`http://localhost:8080/cardio?q=bik`)
      .then((res) => setBike(res.data));
    axios
      .get(`http://localhost:8080/cardio?q=mill`)
      .then((res) => setMill(res.data));
    axios
      .get(`http://localhost:8080/accessories?page=1&limit=20`)
      .then((res) => setAccess(res.data));
    axios
      .get(`http://localhost:8080/womens?q=bra`)
      .then((res) => setTop(res.data));
    axios
      .get(`http://localhost:8080/womens?q=jog`)
      .then((res) => setBottom(res.data));
    axios
      .get(`http://localhost:8080/supplements?q=vit`)
      .then((res) => setHealth(res.data));
  }, []);

  return homeLoading ? (
    <Loader />
  ) : (
    <Box overflow={"hidden"} bgColor="#F8F8F8">
      <SliderCompo />
      <HeadingLine title={"BESTSELLERS"} go={"/topSellings"} />
      <Carosoul2 arr={best} />
      <HeadingLine title={"JUST LAUNCHED"} go={"/topArrivals"} />
      <Carousel arr={arrivals} />
      <HeadingLine title={"T-SHIRTS"} go={"/mens"} />
      <Carousel3 arr={tshirt} />
      <HeadingLine title={"CYCLES"} go={"/cycles"} />
      <Carosoul2 arr={cycle} />
      <HeadingLine title={"SPINBIKES"} go={"/equipments"} />
      <Carousel arr={bike} />
      <HeadingLine title={"TREADMILLS"} go={"/equipments"} />
      <Carousel3 arr={mill} />
      <HeadingLine title={"ACCESSORIES"} go={"/accessories"} />
      <Carousel arr={access} />
      <HeadingLine title={"TOPWEAR"} go={"/womens"} />
      <Carosoul2 arr={top} />
      <HeadingLine title={"BOTTOMWEAR"} go={"/womens"} />
      <Carousel arr={bottom} />
      <HeadingLine title={"HEALTH & NUTRITION"} go={"/supplements"} />
      <Carousel3 arr={Health} />
      <HeadingLine title={"SHOP BY WORKOUT"} go={"#"} />
      <br />
      <br />
      <Grid
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(4,1fr)",
          "repeat(4,1fr)",
        ]}
        w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
        m="auto"
        gap="4"
      >
        {workout?.map((el) => {
          return (
            <Box overflow={"hidden"}>
              <Image
                src={el}
                _hover={{
                  transform: "scale(1.07)",
                  transformOrigin: "50% 50%",
                  cursor: "pointer",
                  opacity: ".9",
                }}
                transition="transform .5s"
              />
            </Box>
          );
        })}
      </Grid>
      <HeadingLine title={"SPOTLIGHT"} go={"#"} />
      <br />
      <br />
      <Grid
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
        ]}
        w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
        m="auto"
        gap="2"
      >
        {wArr?.map((el) => {
          return (
            <Box overflow={"hidden"}>
              <Image
                src={el}
                _hover={{
                  transform: "scale(1.02)",
                  transformOrigin: "50% 50%",
                  cursor: "pointer",
                  opacity: ".9",
                }}
                transition="transform .5s"
              />
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}

export default HomePage;

const workout = [
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/06a67be8-5b49-49b9-83b1-af4e6fa6461b.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/a026ae3f-fc71-4403-aa75-b03226b7c36f.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/c0ae83e6-a054-448f-b658-f214863779ce.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/6dbd08ab-43d5-4f35-abab-d283384f7904.png",
];

const wArr = [
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_674,ar_1080:600/dpr_2/image/vm/236187b6-218f-4d36-ad13-a47515b2b385.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_674,ar_1080:600/dpr_2/image/vm/89567047-8d49-493a-b032-4e48df8e112d.png",
];
