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
import NoData from "../../global/NoData";

const Completion = () => {
  const [datas, setDatas] = useState([]);
  const [metas, setMetas] = useState({});
  const [selForm, setSelForm] = useState({
    pay: [],
    norek: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.auth.authState);
  const co = useSelector((state) => state.of.value);

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(`order/completion/form/${co}`).then(
      (res) => {
        return res.data;
      }
    );
    console.log(reqType)
    if (selForm.pay.length === 0 && selForm.norek.length === 0) {
      const reqPay = await ApiClient.get(`payment`).then((res) => {
        return res.data;
      });
      const reqRek = await ApiClient.get(`account`).then((res) => {
        return res.data;
      });
      setSelForm({
        pay: [...reqPay.result],
        norek: [...reqRek.result],
      });
    }
    setMetas(reqType.metadata);
    setDatas(reqType.dataset);
    setIsLoading(false);
    return;
  };

  const getLast = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(
      `order/completion/order/${user.id}`
    ).then((res) => {
      return res.data;
    });
    if (selForm.pay.length === 0 && selForm.norek.length === 0) {
      const reqPay = await ApiClient.get(`payment`).then((res) => {
        return res.data;
      });
      const reqRek = await ApiClient.get(`account`).then((res) => {
        return res.data;
      });
      setSelForm({
        pay: [...reqPay.result],
        norek: [...reqRek.result],
      });
    }
    setMetas(reqType.metadata);
    setDatas(reqType.dataset);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if (user.type !== "") {
      if (co !== 0) {
        getType();
        return;
      } else {
        getLast();
        return;
      }
    }
    return;
  }, [user]);

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
          minHeight: "35svh",
          margin: "1vw 0",
          padding: "1vw",
          gap: "1vw",
        }}
      >
        <Typography variant="h5" sx={LabelStyle2}>
          Detail Pesanan
        </Typography>
        {user?.type !== "" ? (
          datas.length === 0 ? (
            <NoData prop="pesanan apapun." />
          ) : (
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
                  height: "80svh",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <PaymentData dataset={datas} />
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
                <PaymentMeta
                  amount={metas.amount}
                  unit={metas.unit}
                  id={metas.id}
                  variant={metas.variant}
                />
                <PaymentForm
                  id={metas.id}
                  dataset={selForm}
                  refresh={() => getLast()}
                />
              </div>
            </div>
          )
        ) : (
          <Typography variant="h5" sx={{ ...H5style }}>
            Silahkan login terlebih dahulu.
          </Typography>
        )}
      </Card>
    </React.Fragment>
  );
};

export default Completion;
