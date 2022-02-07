import { Grid, useMediaQuery } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Button, FormControl, Input, FormHelperText } from "@material-ui/core";

import Logo from "@images/global/logo.png";
import { MobileHeader } from "./MobileHeader.js/MobileHeader";
import styles from "@styles/components/Header.module.css";
import { NavbarMenuList } from "./NavbarMenuList";
import { navbarMenuItems } from "json/components/Navbar/Header";
import { FaRegMoon } from "react-icons/fa";

import Link from "next/link";
import { ThemeProvider } from "hooks/context/ThemeProvider";
import { useDispatch } from "react-redux";
import { setDark } from "redux/slice/ThemeSlice";
import {
  WiMoonAltWaxingCrescent6,
  WiMoonAltWaxingGibbous6,
} from "react-icons/wi";

const Navbar = () => {
  // console.log("data >>>>>", navbarMenuItems);
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1040px)");
  const [selectedItem, setselectedItem] = useState(null);
  const { theme: th, settheme } = useContext(ThemeProvider);

  console.log(th)
  const dispatch = useDispatch();
  return (
    <div onMouseLeave={() => setselectedItem(null)}>
      {matches ? (
        <>
          <div
            className={classes.navbar}
            // onMouseLeave={() => setselectedItem(null)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: 1200,
                margin: "0 auto",
              }}
            >
              <div style={{ cursor: "pointer" }}>
                <Link href="/">
                  <Image
                    src={Logo}
                    height={50}
                    width={100}
                    alt="Company logo"
                  />
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {navbarMenuItems.map((d, index) => {
                  return (
                    <>
                      <Link href={d.gotoPage}>
                        <div
                          className={classes.navbarItemDiv}
                          // onMouseEnter={() => setselectedItem(d.id)}
                          onClick={() => {
                            if (selectedItem == null) {
                              setselectedItem(d.id);
                            } else {
                              setselectedItem(null);
                            }
                          }}
                        >
                          <span
                            className={classes.navbarText}
                            style={{ textTransform: "uppercase" }}
                          >
                            {d.title}
                            {/* <span style={{ marginLeft: "0.5rem" }}>
                          <AiOutlineDown fontSize="0.5rem" />
                        </span> */}
                          </span>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>

              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {!th ? (
                  <WiMoonAltWaxingCrescent6
                    size={25}
                    color="white"
                    style={{ alignSelf: "center", marginRight: 30 }}
                    onClick={() => {
                      console.log("click");
                      dispatch(setDark(!th));
                      settheme(!th)
                    }}
                  />
                ) : (
                  <WiMoonAltWaxingGibbous6
                    size={25}
                    color="white"
                    style={{ alignSelf: "center", marginRight: 30 }}
                    onClick={() => {
                      console.log("click");
                      dispatch(setDark(!th));
                      settheme(!th)

                    }}
                  />
                )}

                <Button
                  variant="contained"
                  style={{ backgroundColor: "#007ed6", color: "white" }}
                >
                  LOGIN
                </Button>
              </div>
            </div>
          </div>

          {selectedItem !== null && (
            <>
              {/* <div className={`${styles.dropDownContainer}`}>
                <Grid
                  container
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <NavbarMenuList
                    selectedItem={selectedItem}
                    data={navbarMenuItems.filter((e) => e.id == selectedItem)}
                  />
                </Grid>
              </div> */}
            </>
          )}
        </>
      ) : (
        <MobileHeader />
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    backgroundColor: "#030b2a",
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",
  },
  navbarItemDiv: {
    "&:hover": {
      background: "#007bd9",
    },
    padding: "0.3rem 0rem 0.5rem 0rem",
    borderRadius: 10,
  },
  navbarText: {
    padding: "0rem 0.7rem",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "0 auto",
    fontSize: "0.815rem",
  },
}));

export default Navbar;
