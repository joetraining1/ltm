import { Button, Card, Grow, Typography } from "@mui/material";
import React from "react";
import Susu from "../../../assets/straweberries.png";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { H5style } from "../../../utils/constants";

const ShowcaseCard = () => {
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={200}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "310px",
          height: "375px",
          background: "#fff",
          justifyContent: "space-evenly",
        }}
        elevation={3}
      >
        <div
          style={{
            background: `url(${Susu})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          style={{
            height: "70%",
            width: "100%",
            padding: "1vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column'}}>
        <Typography variant="h6" sx={H5style}>Strawberry Variant</Typography>
        <Typography variant="h6" sx={H5style}>Rp. 7,000</Typography>
        <Typography variant="body2" sx={H5style}>stock: 1000</Typography>
        </div>
          <Button
            variant="contained"
            sx={{
              marginTop: "auto",
              width: "100%",
              background: "#32CD32",
              "&:hover": {
                background: "#00FF00",
              },
              fontFamily: 'Signika Negative, sans-serif',
              fontWeight: '600',
            }}
            startIcon={<AddShoppingCartRoundedIcon />}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </Grow>
  );
};

export default ShowcaseCard;
