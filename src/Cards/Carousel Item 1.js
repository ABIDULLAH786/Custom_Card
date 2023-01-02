import { Box } from "@mui/material";

const CarouselItem1 = () => {
  return (
    <>
      <div
        className={"d-flex"}
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textTransform: "uppercase",
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
        {/* Logo  */}
        <span
          style={{
            position: "absolute",
            right: "10px",
            bottom: "60px",
            zIndex: 999,
            marginRight: "10px",
          }}
        >
          <span style={{ color: "white", marginRight: "40px" }}>
            €5,000,000 GBP
          </span>
          <img src="/SOTHERBYS LOGO.png" width="90" height="auto" />
        </span>

        {/* Percent svg  */}
        <span
          style={{
            position: "absolute",
            left: "10px",
            bottom: "30px",
            zIndex: 999,
          }}
        >
          <img
            src={require(".//Percentage 23 W.svg").default}
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
          <div
            className="d-flex justify-content-around"
            style={{ fontWeight: "lighter" }}
          >
            <div
              style={{
                display: "block",
                textAlign: "center",
                color: "white",
              }}
            >
              <div style={{ fontSize: "40px", letterSpacing: "0.1em" }}>90</div>
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
              <div style={{ fontSize: "40px", letterSpacing: "0.1em" }}>90</div>
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
            marginTop: "375px",
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
    </>
  );
};
export default CarouselItem1;