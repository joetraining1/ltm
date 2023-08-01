import { Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import {
  H5style,
  LabelStyle,
  LabelStyle2,
  MetaStyle,
  SideNoteStyle,
} from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ApiClient from "../../../services/ApiClient";
import { useState } from "react";
import useNotif from "../../../hooks/useNotif";

const OrderItem = ({
  ind,
  spill,
  id,
  total,
  unit,
  cp,
  status,
  dibuat,
  refresh,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { infoToast, updateToast, toastInfo } = useNotif();

  const cancel = async () => {
    setIsLoading(true);
    infoToast("Membatalkan pesanan..");
    const payload = {
      status_id: 8,
    };
    const reqType = await ApiClient.put(`order/${id}`, payload)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        updateToast("Gagal.", "error");
        return;
      });
    updateToast("Pesanan dibatalkan.", "success");
    refresh();
    setIsLoading(false);
    return;
  };

  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 100}>
      <Card
        sx={{
          width: "300px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          padding: "1vw",
        }}
        elevation={4}
      >
        <div style={MetaStyle}>
          <Typography variant="h6" sx={H5style}>
            Total :
          </Typography>
          <Typography variant="h6" sx={{ ...H5style, marginLeft: "10%" }}>
            Rp. {total ? total : 0},000
          </Typography>
        </div>
        <Divider sx={{ margin: "2%" }} />
        <div style={{ ...MetaStyle, padding: "0 5px" }}>
          <Typography variant="body" sx={LabelStyle2}>
            Order No: 0{id}
          </Typography>
          <Typography variant="body" sx={H5style}>
            {status}
          </Typography>
        </div>
        <div style={{ ...MetaStyle, padding: "0 5px" }}>
          <Typography variant="body" sx={LabelStyle2}>
            Penerima
          </Typography>
          <Typography variant="body" sx={H5style}>
            {cp}
          </Typography>
        </div>
        <div style={{ ...MetaStyle, padding: "0 5px" }}>
          <Typography variant="body" sx={LabelStyle2}>
            jumlah item
          </Typography>
          <Typography variant="body" sx={H5style}>
            {unit ? unit : 0} botol
          </Typography>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
            gap: "5px",
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle }}>
            {dibuat?.slice(0, 10)}
          </Typography>
          {status === "Canceled" ? null : (
            <Button
              variant="text"
              size="small"
              sx={{
                minWidth: "20px",
                ...LabelStyle,
                color: "#ff0000",
                marginLeft: "auto",
              }}
              onClick={() => cancel()}
            >
              cancel
            </Button>
          )}
          <Divider orientation="vertical" />
          <Button
            size="small"
            variant="text"
            sx={{
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "700",
              width: "50px",
              padding: "5px 0",
              marginLeft: status === "Canceled" ? 'auto' : 0
            }}
            onClick={() => spill()}
          >
            Lihat
          </Button>
        </div>
      </Card>
    </Grow>
  );
};

export default OrderItem;
