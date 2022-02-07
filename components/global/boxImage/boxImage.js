import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Demoimg from "@images/demo.png";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import { Fonts } from "constant/Fonts";
import useStyleTheme from "hooks/context/useStyleTheme";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function BoxImage() {
  const classes = useStyles();
  const { ThemeTxtColors, ThemeBgColors } = useStyleTheme();

  return (
    <Grid
      item
      md={4}
      xs={12}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
  
      }}
    >
      <div style={{}}>
        <Card className={classes.root}>
          <CardActionArea>
            <div>
              <Image className={classes.media} src={Demoimg} alt="loading" />
            </div>
            <CardContent style={{ backgroundColor: ThemeBgColors }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: Fonts.h3, color: ThemeTxtColors,fontWeight:'bold' }}>
                  React Native Chat App
                </p>
                <p style={{ fontSize: Fonts.h3, color: ThemeTxtColors ,fontWeight:'bold' }}>$15</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Grid>
  );
}
