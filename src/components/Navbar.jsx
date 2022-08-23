import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  let Login = localStorage.getItem("isLogin");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isLogin", false);
    setIsLogin(false);
  };
  let data = JSON.parse(localStorage.getItem("token")) || [];

  useEffect(() => {
    if (data.token && data.error === false) {
      setIsLogin(true);
    }
  }, [data.error, data.token, setIsLogin, isLogin]);

  return (
    <Box
      height={"20"}
      width="100%"
      margin={"auto"}
      marginTop="5"
      background={"ThreeDLightShadow"}
      borderRadius={"10"}
    >
      <Flex justifyContent={"space-around"} padding={"7"} color="azure">
        <Link to="/">Home</Link>
        {!isLogin ? <Link to="/signup">Signup</Link> : ""}
        {!isLogin ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link onClick={handleLogout} to="/">
            LOGOUT
          </Link>
        )}
      </Flex>
    </Box>
  );
};
