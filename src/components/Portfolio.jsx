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

const projectData = [
  {
    id: 1,
    title: "Fitnezz",
    description:
      "One of the most valuable possessions in human life is health. With good health, one can achieve anything in life. In order to perform effectively, one has to be in sound health.",
    image: Fitnezz,
    link: "https://fitnezzz.netlify.app/",
  },
  {
    id: 2,
    title: "SnapSmart",
    description:
      "SnapSmart provides you the insights to facilities management like never before",
    image: Snapsmart,
    link: "https://www.snapsmart.in/",
  },
  {
    id: 3,
    title: "One24 Digital",
    description:
      "Let's redefine your digital destiny.Break the Mold, dominate the market. Turning clicks into loyal fans",
    image: One24,
    link: "https://one24digital.com/",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Card className="max-w-xs mx-auto sm:mx-0 hover:scale-110 transition-transform ">
      <CardMedia
        sx={{ height: 180 }}
        image={project.image}
        title={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href={project.link}>View</a>
        </Button>
      </CardActions>
    </Card>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-6xl text-center mb-4 font-bold text-gray-800">
          <span className="text-indigo-600">OUR </span>
          <span className="text-indigo-600">PORTFOLIO</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-evenly gap-6">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
