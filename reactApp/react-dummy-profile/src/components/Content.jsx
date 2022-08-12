import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import BodyCard from "./BodyCard";

const Content = () => {
  const [profile, setProfile] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const getProfile = async () => {
      const url = "https://randomuser.me/api/?results=10";
      const response = await fetch(url, { mthod: "get" });
      const json = response.json();
      return Promise.resolve(json);
    };
    getProfile().then((data) => {
      setProfile(data.results);
      setIsLoaded(true);
    });
  }, []);
  if (!isLoaded) {
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </>
    );
  } else {
    return (
      <Grid container spacing={1} style={{ marginTop: "1px" }}>
        {profile.forEach((element, index) => (
          <Grid item xs={4}>
            <BodyCard
              title={element["name"]["first"] + " " + element["name"]["last"]}
              subheader={element["gender"]}
              avatarUrl={element["picture"]["large"]}
              imageUrl={element["picture"]["large"]}
              text={element["location"]["city"]}
              detail={element["email"]}
              key={index}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default Content;
