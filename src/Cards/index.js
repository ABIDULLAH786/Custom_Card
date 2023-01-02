import {  Grid} from "@mui/material";
import CustomCarousel1 from "./CusotmCarousel 1";
import CustomCarousel2 from "./CusotmCarousel 2";
const Cards = () => {
  return (
    <>
      <Grid container sx={{ marginTop: "40px" }}>
        {/* offset grid with column you want to offset */}
        <Grid item lg={2} md={2} sm={2} />
        <Grid item xs={5} md={5}>
          <CustomCarousel1/>
        </Grid>
        <Grid item xs={5} md={5}>
          <CustomCarousel2/>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
