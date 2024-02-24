import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./footer.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Box style={{ display: "flex" }} className="headerItem">
      <Box className="container">
        <Box>
          <Box>
            <Typography
              style={{
                fontSize: "50px",
                fontFamily: "inherit",
              }}
              className="a1"
              variant="h1"
            >
              Popular right now
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link to={"/samba"}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      width: "300px",
                    }}
                    variant="h2"
                  >
                    samba
                  </Typography>
                </Link>

                <Link to={"/samba"}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      width: "300px",
                    }}
                    variant="h2"
                  >
                    messi
                  </Typography>
                </Link>

                <Link to="/samba">
                  <Typography
                    sx={{
                      textAlign: "left",
                      width: "300px",
                    }}
                    variant="h2"
                  >
                    campus
                  </Typography>
                </Link>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link to={"/samba"}>
                  <h2
                    sx={{
                      textAlign: "left",
                      width: "300px",
                    }}
                    variant="h2"
                  >
                    ultraboost
                  </h2>
                </Link>
                <Link to={"/samba"}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      width: "300px",
                    }}
                    variant="h2"
                  >
                    gazelle
                  </Typography>
                </Link>

                <Link to={"/samba"}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      width: "300px",
                    }}
                    variant="h2"
                  >
                    nmd
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
