import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import BodyCard from "./BodyCard";

const apiKey = process.env.REACT_APP_API_KEY;

const Content = () => {
  const [profile, setProfile] = useState();
  const [photo, setPhoto] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const displayNum = 15;
  let countA = 0;
  let countB = 0;

  const getProfile = async () => {
    const profileUrl = "https://randomuser.me/api/?results=" + displayNum;
    const profileResponse = await fetch(profileUrl, { mthod: "get" });
    const profileJson = profileResponse.json();
    return Promise.resolve(profileJson);
  };
  const getPhoto = async () => {
    const photoUrl =
      "https://pixabay.com/api/?category=computer&&key=" + apiKey;
    const photoResponse = await fetch(photoUrl, { mthod: "get" });
    const photoJson = photoResponse.json();
    return Promise.resolve(photoJson);
  };

  useEffect(() => {
    Promise.all([
      getProfile().then((data) => {
        setProfile(data.results);
      }),
      getPhoto().then((data) => {
        setPhoto(data.hits);
      }),
    ]).then(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return <h2 style={{ textAlign: "center", margin: "30px" }}>Loading...</h2>;
  } else {
    return (
      <Grid
        container
        spacing={1}
        style={{ marginTop: "1px", marginBottom: "3px" }}
      >
        {profile.map((element, index) => (
          <Grid item xs={4} key={index}>
            <BodyCard
              title={element["name"]["first"] + " " + element["name"]["last"]}
              subheader={element["nat"]}
              avatarUrl={element["picture"]["large"]}
              imageUrl={photo[index]["webformatURL"]}
              gender={element["gender"]}
              location={element["location"]}
              email={element["email"]}
              dob={element["dob"]}
              phone={element["phone"]}
              key={index}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default Content;
