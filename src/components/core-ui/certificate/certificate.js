import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Link,
  Typography
} from "@mui/material";
import React, { useContext } from "react";
import { HiExternalLink } from "react-icons/hi";
import Slider from "react-slick";
import { ThemeContext } from "../../../contexts/theme-context";
import { certificateData } from "../../../data/certificate-data";
import "./certificate.css";

const Certificate = () => {
  const { theme } = useContext(ThemeContext);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ py: 5 }}>
      <div className='certificate-header'>
        <h1
          style={{
            color: theme.primary,
          }}>
          Certificates
        </h1>
      </div>
      <Slider {...settings}>
        {certificateData.map((item) => (
          <Card key={item.id} sx={{ height: { xs: 320, sm: 480 } }}>
            <CardActionArea>
              <CardMedia
                component='img'
                sx={{
                  height: { xs: 270, sm: 420 },
                  borderBottom: "1px solid #f5f5f5",
                }}
                image={item.image}
                alt={item.title}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Typography>{item.title}</Typography>
                <IconButton>
                  <Link href={item.link}>
                    <HiExternalLink />
                  </Link>
                </IconButton>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default Certificate;
