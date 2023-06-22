import React, { useState } from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Button, Drawer } from "@mui/material";

const Cart = ({ mode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      {mode === "one" ? (
        <Button variant="text" onClick={() => setIsOpen(!isOpen)}>
          <ShoppingCartRoundedIcon />
        </Button>
      ) : null}
      {mode === 'two' ? (
        <Button onClick={() => setIsOpen(!isOpen)} variant="contained" sx={{ height: "104%", width: '15%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Signika Negative, sans-serif', fontWeight: '600', fontSize: '1.1em' }}>
        <ShoppingCartRoundedIcon />
        CART
      </Button>
      ) : null}
      <Drawer
        open={isOpen}
        onClose={handleClose}
        anchor="right"
        PaperProps={{
          sx: {
            width: "400px",
          },
        }}
      >
        hey
      </Drawer>
    </React.Fragment>
  );
};

export default Cart;
