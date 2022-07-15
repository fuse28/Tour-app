import React, { useEffect } from "react";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Cards() {
  const url = "https://course-api.com/react-tours-project";

  const [data, setData] = useState([]);
  const [learnMore, setLearnMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(3);

  const getInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getInfo();
    setLoading(true);
  }, []);

  const removeTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id);
    setData(newTours);
  };
  if (data.length === 0) {
    return (
      <main>
        <div className="text-center">
          <h2>Nothing left to see, Click on refresh</h2>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onClick={() => getInfo()}
          >
            Refresh
          </Button>
        </div>
      </main>
    );
  }

  return (
    <>
      <div>
        {data.map((data) => {
          return (
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: 50,
                padding: 2,
                marginBottom: 5,
              }}
              key={data.id}
              style={{
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                borderRadius: 5,
              }}
            >
              <CardMedia
                component="img"
                height="250"
                width="100"
                image={data.image}
                alt="img"
                style={{ borderRadius: 5, padding: 0 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {learnMore ? data.info : `${data.info.substring(0, 200)}...`}
                  <Button size="small" onClick={() => setLearnMore(!learnMore)}>
                    {learnMore ? "show less" : "learn more"}
                  </Button>
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="text" size="large">
                  ${data.price}
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => removeTour(data.id)}
                >
                  Not interested
                </Button>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
