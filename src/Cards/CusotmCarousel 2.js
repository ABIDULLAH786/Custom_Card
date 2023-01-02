import {  Box, Card, Grid, CardActions } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
import RedoIcon from '@mui/icons-material/Redo';
import CarouselItem2 from "./Carousel Item 2";
const CusotmCarousel2 = () => {
  return (
    <>
      <Card sx={{ maxWidth: 400, borderRadius: "25px" }}>
        <Carousel fade style={{ position: "relative" }}>
        
          {/* Days anD months portion */}
          <Carousel.Item>
            <CarouselItem2/>
          </Carousel.Item>
          </Carousel>
        <hr style={{ margin: 0, height: "5px", color: "white" }} />
        <CardActions style={{ backgroundColor: "black", color: "white" }}>
          <Grid
            container
            // direction="row"
            justifyContent="space-between"
          >
            <Grid item xs={4} md={4}>
              <span>$25.00 GBP</span>
            </Grid>
            <Grid item xs={5} md={5}>
              <span
                style={{
                  textTransform: "uppercase",
                  textAlign: "end",
                  display: "block",
                  marginRight: "20px",
                }}
              >
                <span> BUy Entry Now</span>
              </span>
              <span
                style={{
                  textAlign: "end",
                  display: "block",
                  fontSize: "10px",
                  marginRight: "20px",
                }}
              >
                <span>ZM7861234567</span>
              </span>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default CusotmCarousel2;
