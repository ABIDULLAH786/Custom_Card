import {  Box, Card, Grid, CardActions } from "@mui/material";
import { Carousel } from "react-bootstrap";
import RedoIcon from '@mui/icons-material/Redo';
const Cards = () => {
  return (
    <>
      <Card sx={{ maxWidth: 400, borderRadius: "25px" }}>
        <Carousel fade style={{ position: "relative" }}>
        
          {/* Days anD months portion */}
          <Carousel.Item>
            <div
              className={"d-flex"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                textTransform:"uppercase"
              }}
            >
              <span
                style={{
                  position: "absolute",
                  right: "30px",
                  top: "100px",
                  zIndex: 999,
                }}
              >
                {/* <span style={{color:"white"}}><RedoIcon tyle={{transform: "rotate(90deg)"}}/></span> */}
                <span style={{ fontSize: "30px", color: "red" }}>❤</span>
              </span>
              <span
                style={{
                  position: "absolute",
                  left: "10px",
                  bottom: "30px",
                  zIndex: 999,
                }}
              >
                <img
                  src={require("./card stuff/Percentage 23 W.svg").default}
                  alt="Progress"
                  style={{
                    paddingTop: "10px",
                    borderRadius: "15px",
                    width: "90px",
                    height: "auto",
                  }}
                />
              </span>

              {/* counter */}
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  zIndex: 99,
                  width: "100%",
                }}
              >
                <div className="d-flex justify-content-around" style={{fontWeight:"lighter"}}>
                  <div
                    style={{
                      display: "block",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    <div style={{ fontSize: "40px",letterSpacing: "0.1em" }}>90</div>
                    <div style={{ fontSize: "15px" }}>Days</div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    <div style={{ fontSize: "40px", letterSpacing: "0.1em" }}>90</div>
                    <div style={{ fontSize: "15px" }}>Hours</div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    <div style={{ fontSize: "40px", letterSpacing: "0.1em"}}>90</div>
                    <div style={{ fontSize: "15px" }}>Minuets</div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    <div style={{ fontSize: "40px", letterSpacing: "0.1em" }}>90</div>
                    <div style={{ fontSize: "15px" }}>Seconds</div>
                  </div>
                </div>
              </span>

              <img
                className="d-block "
                src="/Image 1.jpg"
                alt="First slide"
                style={{
                  // paddingTop: "10px",
                  borderRadius: "20px",
                  height: "400px",
                }}
              />
              <p
                style={{
                  textTransform: "uppercase",
                  fontSize: "12px",
                  position: "absolute",
                  color: "white",
                  marginTop: "350px",
                }}
              >
                <span style={{ display: "block" }}>
                  SHelton Street Covent Garden London WC2H United Kingdom
                </span>
                <span
                  style={{
                    textAlign: "end",
                    display: "block",
                    fontSize: "10px",
                  }}
                >
                  <span>ZM7861234567</span>
                </span>
              </p>

              <Box justifyContent="end">
                <span
                  style={{
                    textTransform: "uppercase",
                    fontSize: "11px",
                    position: "absolute",
                    color: "white",
                    marginTop: "380px",
                  }}
                >
                  ZM7861200034567
                </span>
              </Box>
            </div>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
              <div
                className={"d-flex"}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    right: "30px",
                    top: "100px",
                    zIndex: 999,
                  }}
                >
                  <span style={{ fontSize: "30px" }}>❤</span>
                </span>
                <span
                  style={{
                    position: "absolute",
                    left: "20px",
                    bottom: "10px",
                    zIndex: 999,
                  }}
                >
                  <img
                    src="https://random.imagecdn.app/50/50"
                    alt="Progress"
                    style={{
                      paddingTop: "10px",
                      borderRadius: "15px",
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </span>

                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    zIndex: 99,
                    width: "100%",
                  }}
                >
                  <div className="d-flex justify-content-around">
                    <div
                      style={{
                        display: "block",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      <div style={{ fontSize: "40px" }}>90</div>
                      <div>Days</div>
                    </div>
                    <div
                      style={{
                        display: "block",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      <div style={{ fontSize: "40px" }}>90</div>
                      <div>Hours</div>
                    </div>
                    <div
                      style={{
                        display: "block",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      <div style={{ fontSize: "40px" }}>90</div>
                      <div>Min</div>
                    </div>
                    <div
                      style={{
                        display: "block",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      <div style={{ fontSize: "40px" }}>90</div>
                      <div>Sec</div>
                    </div>
                  </div>
                </span>

                <img
                  className="d-block "
                  src="/Image 2.png"
                  alt="First slide"
                  style={{
                    paddingTop: "10px",
                    borderRadius: "20px",
                    height: "400px",
                  }}
                />
              </div>

              <Carousel.Caption>
              
              
              </Carousel.Caption>
            </Carousel.Item> */}
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

export default Cards;
