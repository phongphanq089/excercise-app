import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import logo from "../accsets/image/Logo -1.png";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={logo}
          alt=""
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignitems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none ",
            color: "#3A1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exersicese"
          style={{ textDecoration: "none ", color: "#3A1212" }}
        >
          {" "}
          Excersices
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
