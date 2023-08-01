import { Avatar, Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import InvoicesMeta from "./invoices/InvoicesMeta";
import InvoicesItem from "./invoices/InvoicesItem";
import InvoicesDetail from "./invoices/InvoicesDetail";
import InvoicesHead from "./invoices/InvoicesHead";
import InvoicesFooter from "./invoices/InvoicesFooter";
import { H5style, LabelStyle2 } from "../../../utils/constants";
import Logo from "../../../assets/marino.png";
import ApiClient from "../../../services/ApiClient";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Invoices = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [metas, setMetas] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  console.log(metas);
  console.log(datas);

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(`order/invoice/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error));
    setDatas(reqType?.result.items);
    setMetas(reqType?.result.metadata);
    setIsLoading(false);
    return;
  };

  const user = useSelector((state) => state.auth.authState);

  useEffect(() => {
    if (user.type !== "") {
      getType();
      return;
    }
    return;
  }, [user]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "fit-content",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Button
        sx={{
          fontFamily: "Signika Negative, sans-serif",
          fontWeight: "600",
          color: "#262626",
          fontSize: "1.3em",
        }}
        variant="text"
        onClick={() => navigate(-1)}
        startIcon={<UndoRoundedIcon />}
      >
        Back
      </Button>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          height: "180svh",
          flexDirection: "column",
          padding: "2vw",
          alignItems: "center",
          gap: "1vw",
        }}
        elevation={3}
      >
        <img src={Logo} style={{ objectFit: "cover", width: "10%" }} />
        <Typography variant="h4" sx={H5style}>
          Marino's Milk & Yohurt
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1vw",
          }}
        >
          <Typography variant="h6" sx={LabelStyle2}>
            Kepada :{" "}
          </Typography>
          <Typography variant="h6" sx={H5style}>
            {metas.penerima}
          </Typography>
        </div>
        <Divider style={{ width: "100%" }} />
        <InvoicesHead
          email={metas.email}
          id={metas.id}
          info={metas.info}
          name={metas.name}
          status={metas.status}
          url={metas.url}
        />
        <Divider style={{ width: "100%" }} />
        <InvoicesMeta
          id={metas.id}
          variant={metas.variant}
          unit={metas.unit}
          amount={metas.amount}
          shipping={metas.shipping}
          total={metas.total}
          dibuat={metas.createdAt}
          cp={metas.cp}
          alamat={metas.address}
          metode={metas.pembayaran}
          bank={metas.bank}
          norek={metas.norek}
        />
        <Divider style={{ width: "100%" }} />
        <InvoicesItem dataset={datas}/>
        <Divider style={{ width: "100%", marginTop: "auto" }} />
        <InvoicesDetail proof={metas.proof_url} ship={metas.ship_url}/>
        <Divider style={{ width: "100%" }} />
        <InvoicesFooter note={metas.note}/>
      </Card>
    </div>
  );
};

export default Invoices;
