import {  Grid} from "@mui/material";
import CustomCarousel from "./CusotmCarousel";
const Cards = () => {
  return (
    <>
      <Grid container sx={{ marginTop: "40px" }}>
        {/* offset grid with column you want to offset */}
        <Grid item lg={2} md={2} sm={2} />
        <Grid item xs={5} md={5}>
          <CustomCarousel/>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
