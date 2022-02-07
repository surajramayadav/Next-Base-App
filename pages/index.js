import Wrapper from "hoc/wrapper/wrapper";
import { ThemeProvider } from "hooks/context/ThemeProvider";
import useStyleTheme from "hooks/context/useStyleTheme";
import useThemeColors from "hooks/useThemeColors";
import Head from "next/head";

import Typical from "react-typical";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Avatar, Grid } from "@material-ui/core";
import { Fonts } from "constant/Fonts";
import Chip from "@material-ui/core/Chip";
import Colors from "constant/Colors";
import Bg from "@images/Vector_2640.jpg";
import React from "react";
import BoxImage from "@components/global/boxImage/boxImage";
import BoxReview from "@components/boxReview";
import { Reviews } from "json/components/home";


const arr = [1, 2, 3, 4, 5, 6];
export default function Home() {
  const { ThemeTxtColors, ThemeBgColors } = useStyleTheme();

  console.log(ThemeTxtColors);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Grid container style={{ padding: "1rem 1rem 0rem 1rem" }}>
            <Grid item md={6} xs={12}></Grid>
            <Grid item md={6} xs={12} style={{ padding: 10 }}>
              <div style={{}}>
                <h1 style={{ fontSize: Fonts.h1, color: Colors.white }}>
                  <Typical
                    steps={[
                      "Join forces",
                      1000,
                      "Join forces with talented designers ",
                      2000,
                      "Join forces with talented designers.",
                      2000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </h1>
                <h5 style={{ fontSize: Fonts.h2, color: Colors.white }}>
                  Accelerate your projects with millions of ready-to-use
                  products.
                </h5>

                <h5 style={{ fontSize: Fonts.h4, color: Colors.white }}>
                  TRENDING NOW
                </h5>
                <div style={{}}>
                  <Chip
                    label="Ecommerce"
                    style={{
                      backgroundColor: Colors.main,
                      color: Colors.white,
                      marginRight: 10,
                    }}
                  />
                  <Chip
                    label="Social"
                    style={{
                      backgroundColor: Colors.main,
                      color: Colors.white,
                      marginRight: 10,
                    }}
                  />
                  <Chip
                    label="Dashboard"
                    style={{
                      backgroundColor: Colors.main,
                      color: Colors.white,
                    }}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <Chip
                    label="Chat"
                    style={{
                      backgroundColor: Colors.main,
                      color: Colors.white,
                      marginRight: 10,
                    }}
                  />
                  <Chip
                    label="Dating"
                    style={{
                      backgroundColor: Colors.main,
                      color: Colors.white,
                      marginRight: 10,
                    }}
                  />
                  <Chip
                    label="Study"
                    style={{
                      backgroundColor: Colors.main,
                      color: Colors.white,
                      marginRight: 10,
                    }}
                  />
                  <Chip
                    label="Travel"
                    style={{
                      backgroundColor: Colors.main,
                      color: Colors.white,
                    }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <div style={{ marginTop: 40, maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <p style={{ fontSize: Fonts.h1, color: ThemeTxtColors }}>
            Our Services
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 20,
            backgroundColor: Colors.main,
            borderRadius: 10,
          }}
        >
          <p style={{ fontSize: Fonts.h3, color: Colors.white, padding: 10 }}>
            Mega SALE is ON! Get ALL of our amazing React Native codebases with
            85% OFF discount 🔥
          </p>
        </div>
        <Grid container style={{ padding: "1rem 0rem " }}>
          {arr.map((d, i) => {
            return <BoxImage key={i} />;
          })}
        </Grid>
      </div>

      {/* +++++++++++++++++++++++++++++++++++++++++++ */}

      <div style={{ marginTop: 0, maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            fontSize: Fonts.h1,
            color: ThemeTxtColors,
            textAlign: "center",
          }}
        >
          Happy Customers
        </p>
        <p
          style={{
            fontSize: Fonts.h3,
            color: ThemeTxtColors,
            padding: 10,
            textAlign: "center",
          }}
        >
          Join more than 10.000 satisfied customers making iOS & Android apps
          using our React Native templates globally.
        </p>
      </div>
      
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++ */}
      
      <div style={{ marginTop: 20, maxWidth: 1200, margin: "0 auto" }}>
        <Grid container style={{ padding: "1rem 0rem " }}>
          {Reviews.map((d,i)=>{
            return <BoxReview key={i} data={d}/>
          })}
        
        </Grid>
      </div>
    </>
  );
}
