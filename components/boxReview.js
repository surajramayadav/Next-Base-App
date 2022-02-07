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
import { Fonts, Colors } from "constant/Fonts";
import useStyleTheme from "hooks/context/useStyleTheme";
import { Colorize } from "@material-ui/icons";
import { AiFillStar } from "react-icons/ai";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function BoxReview({ data }) {
  const classes = useStyles();
  const { ThemeTxtColors, ThemeBgColors } = useStyleTheme();

  return (
    <Grid
      item
      md={6}
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
            <CardContent style={{ backgroundColor: ThemeBgColors }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: Fonts.h3,
                    color: ThemeTxtColors,
                    fontWeight: "bold",
                  }}
                >
                  {data.title}
                </p>
                <div>
                  <AiFillStar size={15} color="#feba01" />
                  <AiFillStar size={15} color="#feba01" />
                  <AiFillStar size={15} color="#feba01" />
                  <AiFillStar size={15} color="#feba01" />
                  <AiFillStar size={15} color="#feba01" />
                </div>
              </div>
              <p style={{ color: ThemeTxtColors }}>{data.desc}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Grid>
  );
}
