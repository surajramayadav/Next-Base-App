import { ThemeProvider } from "hooks/context/ThemeProvider";
import useStyleTheme from "hooks/context/useStyleTheme";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Wrapper({ children }) {
  const Apptheme = useSelector((state) => state.dark);

  const { settheme } = useContext(ThemeProvider);

  useEffect(() => {
    settheme(Apptheme.Dark);
  }, [Apptheme.Dark]);

  const theme = useStyleTheme();
  return (
    <div style={{backgroundColor:theme.ThemeBgColors}}>
      
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
    </div>
  );
}
