import React from "react";
import { Box } from "@mui/material";
import HeroBanner from "../compoments/HeroBanner";
import Excersices from "../compoments/Excersices";
import SearchExcersices from "../compoments/SearchExcersices";
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcersices />
      <Excersices />
    </Box>
  );
};

export default Home;
