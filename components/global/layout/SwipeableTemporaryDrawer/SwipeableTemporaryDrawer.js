import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { CgMenuRight } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import Logo from "@images/global/logo.png";
import styles from "@styles/components/SwipeableTemporaryDrawer.module.css";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiArrowDropRightLine,
} from "react-icons/ri";
import { MobileMenuList } from "./MobileMenuList";
import { navbarMenuItems } from "json/components/Navbar/Header";
import useStyleTheme from "hooks/context/useStyleTheme";
import useThemeColors from "hooks/useThemeColors";
import { FaRegMoon } from "react-icons/fa";
import { WiMoonAltWaxingCrescent6,WiMoonAltWaxingGibbous6 } from "react-icons/wi";
import { ThemeProvider } from "hooks/context/ThemeProvider";
import { useDispatch } from "react-redux";
import { setDark } from "redux/slice/ThemeSlice";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const theme = useThemeColors();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { theme: th, settheme } = useContext(ThemeProvider);
  const dispatch = useDispatch()

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ backgroundColor: theme.bg, height: "100%" }}>
      {/* --------------------------InsideHeader-------------------------- */}

      <div className={`${styles["inside-m-header"]}`}>
        <Link href="/">
          <div
            style={{
              paddingTop: "5px",
              cursor: "pointer",
              width: "120px",
              height: "50px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Image src={Logo} height={50} width={60} alt="Company logo" />
          </div>
        </Link>

        <div style={{ zIndex: 1, display: "flex" }}>
          {!th ? (
            <WiMoonAltWaxingCrescent6
              size={25}
              color="white"
              style={{ alignSelf: "center", marginRight: 30 }}
              onClick={() => {
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
                dispatch(setDark(!th));
                settheme(!th)

              }}
            />
          )}

          <div
            style={{ color: "#007bd9" }}
            onClick={toggleDrawer("right", false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
      </div>

      {/* --------------------------Menu List-------------------------- */}

      <MobileMenuList data={navbarMenuItems} />
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <h1
              style={{
                color: "#007bd9",
              }}
            >
              <CgMenuRight />
            </h1>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
