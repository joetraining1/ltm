import React, { useRef, useState } from "react";
import HomeItem from "../HomeItem";
import { Button, Card, Typography } from "@mui/material";
import { H5style, MetaStyle } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDraggable } from "react-use-draggable-scroll";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";

const SideScroll = ({ title, to, ItemCard }) => {
  const [example, setExample] = useState([...Array(9)])

  const navigate = useNavigate();
  const sideRef = useRef();
  const { events } = useDraggable(sideRef);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
        width: "100%",
        alignItems: "center",
        padding: "1vw",
      }}
    >
      <div style={MetaStyle}>
        <Typography variant="h5" sx={H5style}>
          {title}
        </Typography>
        <Button
          variant="text"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            color: "#262626",
            fontSize: "1.3em",
          }}
          onClick={() => navigate(to)}
          endIcon={<KeyboardDoubleArrowRightRoundedIcon />}
        >
          Lihat
        </Button>
      </div>
      <div
        className="horizontalScroll"
        ref={sideRef}
        style={{ height: "fit-content" }}
        {...events}
      >
        {example.map((item, index) => {
          return <ItemCard key={index} ind={index}/>
        })}
      </div>
    </Card>
  );
};

export default SideScroll;
