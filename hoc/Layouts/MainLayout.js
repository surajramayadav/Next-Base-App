import React from "react";
import Navbar from "@components/global/layout/Navbar";
import { makeStyles } from "@material-ui/core";
import Footer from "@components/global/layout/Footer";
import { Router } from "next/router";
import useStyleTheme from "hooks/context/useStyleTheme";

const MainLayout = ({ children }) => {
  const theme = useStyleTheme();
  const classes = useStyles();
  return (
    <div style={{backgroundColor:theme.ThemeBgColors}}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.ThemeBgColors,
    width: "100%",
  },
}));

export default MainLayout;
