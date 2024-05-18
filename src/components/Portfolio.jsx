import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fitnezz from "../assets/Projects/Fitnezz.png";
import Snapsmart from "../assets/Projects/SnapSmart.png";
import One24 from "../assets/Projects/One24.png";

const Fitnez = () => {
  return (
    <Card sx={{ maxWidth: 345 }} className="hover:transition hover:scale-110">
      <CardMedia sx={{ height: 180 }} image={Fitnezz} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fitnezz
        </Typography>
        <Typography variant="body2" color="text.secondary">
          One of the most valuable possessions in human life is health. With
          good health, one can achieve anything in life. In order to perform
          effectively, one has to be in sound health.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href="https://fitnezzz.netlify.app/">View</a>
        </Button>
      </CardActions>
    </Card>
  );
};

const SnapSmartCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }} className="hover:transition hover:scale-110">
      <CardMedia sx={{ height: 180 }} image={Snapsmart} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SnapSmart
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SnapSmart provides you the insights to facilities management like
          never before
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href="https://www.snapsmart.in/">View</a>
        </Button>
      </CardActions>
    </Card>
  );
};

const One24Cards = () => {
  return (
    <Card sx={{ maxWidth: 345 }} className="hover:transition hover:scale-110">
      <CardMedia sx={{ height: 180 }} image={One24} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          One24 Digital
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Let's redefine your digital destiny.Break the Mold, dominate the
          market. Turning clicks into loyal fans
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href="https://one24digital.com/">View</a>
        </Button>
      </CardActions>
    </Card>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-white py-12 h-screen">
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-6xl text-center mb-4 font-bold text-gray-800">
          <span className="text-indigo-600">OUR </span>
          <span className="text-indigo-600">PORTFOLIO</span>
        </h1>
      </div>
      <div className="flex flex-row justify-evenly">
        <Fitnez />
        <SnapSmartCard />
        <One24Cards />
      </div>
    </div>
  );
};

export default Portfolio;
