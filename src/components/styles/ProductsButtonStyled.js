import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Context
import { ProductContext } from "../../context/products";
//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  borderRadius: 100,
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  borderRadius: 100,
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  borderRadius: 100,
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const ProductsButtons = () => {
  const { featured } = useContext(ProductContext);

  if (!featured.length) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Box
        className="row justify-content-around text-center"
        style={{
          minHeight: "100vh",
        }}
      >
        {featured.map(({ image, title, id }) => (
          <div key={id} className="col-md-auto align-self-center p-3 ">
            <ImageButton
              focusRipple
              key={title}
              style={{
                width: 300,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  <Link
                    to={`/products/${id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h4>{title}</h4>
                  </Link>
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          </div>
        ))}
      </Box>
    </>
  );
};

export default ProductsButtons;
