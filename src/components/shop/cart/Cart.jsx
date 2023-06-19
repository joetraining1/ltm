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
