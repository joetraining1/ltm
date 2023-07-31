import { Card, Typography } from "@mui/material";
import React from "react";
import { H4style, H5style, LabelStyle2 } from "../../../utils/constants";
import PaymentMeta from "./PaymentMeta";
import PaymentForm from "./PaymentForm";
import PaymentData from "./PaymentData";
import ApiClient from "../../../services/ApiClient";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Completion = () => {
  const [datas, setDatas] = useState([])
  const [metas, setMetas] = useState({})
    const [isLoading, setIsLoading] = useState(false);


  const user = useSelector((state) => state.auth.authState)
  const co = useSelector((state) => state.of.value)

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(`order/completion/form/${co}`).then((res) => {
      return res.data;
    });
    setMetas(reqType.metadata);
    setDatas(reqType.dataset);
    setIsLoading(false);
    return;
  };

  const getLast = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(`order/completion/order/${user.id}`).then((res) => {
      return res.data;
    });
    setMetas(reqType.metadata);
    setDatas(reqType.dataset);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if(co !== 0){
      getType()
      return
    } else {

    }
    return
  }, [co])

  return (
    <React.Fragment>
      <Typography variant="h4" sx={H4style}>
        Menyelesaikan Pesanan
      </Typography>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "fit-content",
          minHeight: "75svh",
          margin: "1vw 0",
          padding: "1vw",
          gap: "1vw",
        }}
      >
        <Typography variant="h5" sx={LabelStyle2}>
          Detail Pesanan
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "1vw",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <PaymentData />
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1vw",
              justifyContent: "space-evenly",
            }}
          >
            <PaymentMeta />
            <PaymentForm />
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Completion;
