import { FooterList } from "@components/global/layout/FooterList/FooterList";
import { Grid } from "@material-ui/core";
import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import useThemeColors from "hooks/useThemeColors";
import React from "react";

const Footer = () => {
  const theme = useThemeColors();
  return (
    <div style={{ backgroundColor: Colors.main, padding: "0rem 1rem" }}>
      <div className={"root"} style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className={"footer-section"}>
          <Grid container className={`footer-address`}>
            <Grid item md={6} sm={12}>
              <div style={{ marginInline: "0rem 2rem" }}>
                <p
                  style={{
                    borderBottom: "1px solid white",
                    padding: "1rem 0.5rem",
                    color: "white",
                    fontSize: Fonts.h2,
                  }}
                >
                  About Us
                </p>
                <div style={{ padding: "0rem 0rem" }}>
                  <p style={{ fontSize: 18, color: "white" }}>
                    Our mission at Instamobile is to help mobile developers and
                    entrepreneurs launch their own native app with minimum
                    effort and cost, but with maximum speed.
                    <br />
                    <br />
                    Download our premium or free app templates to make your own
                    app today! Highly customizable, our app templates, coded in
                    Swift, Kotlin and React Native, will jump start your mobile
                    app development and will help you launch your app 10x
                    faster.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item md={3} sm={12}>
              <div style={{ marginInline: "0rem 2rem" }}>
                <p
                  style={{
                    borderBottom: "1px solid white",
                    padding: "1rem 0.5rem",
                    color: "white",
                    fontSize: Fonts.h2,
                  }}
                >
                  React Native India
                </p>
                <div style={{ padding: "0rem 0rem" }}>
                  <p style={{ fontSize: 18, color: "white" }}>
                    <ul>
                      <li style={{ marginTop: 10 }}>Blog</li>
                      <li style={{ marginTop: 10 }}>Contact Us</li>
                      <li style={{ marginTop: 10 }}>About Us</li>
                      <li style={{ marginTop: 10 }}>Refunds</li>
                      <li style={{ marginTop: 10 }}>Careers</li>
                      <li style={{ marginTop: 10 }}>Terms of service</li>
                    </ul>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item md={3} sm={12}>
              <div style={{ marginInline: "0rem 2rem" }}>
                <p
                  style={{
                    borderBottom: "1px solid white",
                    padding: "1rem 0.5rem",
                    color: "white",
                    fontSize: Fonts.h2,
                  }}
                >
                  Find us on
                </p>
                <div style={{ padding: "0rem 0rem" }}>
                  <p style={{ fontSize: 18, color: "white" }}>
                    <ul>
                      <li style={{ marginTop: 10 }}>Facebook</li>
                      <li style={{ marginTop: 10 }}>Twitter</li>
                      <li style={{ marginTop: 10 }}>Dribbble</li>
                      <li style={{ marginTop: 10 }}>Youtube</li>
                      <li style={{ marginTop: 10 }}>Instagram</li>
                    </ul>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div style={{ marginTop: 20 }}>
          <div style={{ borderTop: "1px solid white" }} />
          <div style={{ display: "flex", justifyContent: "center",marginTop:20 }}>
            <p style={{ color: Colors.white }}>
              ReactNativeIndia © 2021. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
