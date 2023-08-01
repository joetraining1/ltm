import {
  Avatar,
  Button,
  Card,
  Divider,
  Grow,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AvaSize,
  H5style,
  LabelStyle,
  LabelStyle2,
  MetaStyle2,
  MetaStyle3,
  MetaStyle5,
  MetaValue,
  MetaValue2,
  SideNoteStyle,
  StatusPesanan,
} from "../../../utils/constants";
import Paganini from "../../../assets/pagani.jpg";
import QuickPhotoUploader from "./quick/QuickPhotoUploader";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ApiClient from "../../../services/ApiClient";
import { useSelector } from "react-redux";
import useNotif from "../../../hooks/useNotif";
import { useEffect } from "react";
import FormData from "form-data";

const QuickEdit = () => {
  const [shipFee, setShipFee] = useState("");
  const [notes, setNotes] = useState("");
  const [states, setStates] = useState(false);
  const [metas, setMetas] = useState({});
  const [proofing, setProofing] = useState("");
  const [ship, setShip] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [curl, setCurl] = useState(null);
  const [surl, setSurl] = useState(null);
  const { id } = useParams();
  const [activeId, setActiveId] = useState(id);
  const resiRef = useRef();
  const [filter, setFilters] = useState([
    {
      id: 0,
      title: "",
    },
  ]);
  const [activeF, setActiveF] = useState({
    id: 0,
    title: "",
  });

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.authState);
  const { infoToast, updateToast, toastInfo } = useNotif();

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(`order/edit/${id}`).then((res) => {
      return res.data;
    });
    if (filter.length === 1) {
      const getStatus = await ApiClient.get(`status`).then((res) => res.data);
      setFilters([...filter, ...getStatus.result]);
    }
    setActiveF({
      id: reqType.result.sId,
      title: reqType.result.status
    })
    setShipFee(reqType.result.shipping?.toString().concat('000'));
    setProofing(reqType.result.proof_url);
    setShip(reqType.result.ship_url);
    setNotes(reqType.result.note === undefined ? "" : reqType.result.note);
    setMetas(reqType.result);
    setIsLoading(false);
    return;
  };

  const setterF = async (ctg_id, title) => {
    setActiveF({
      id: ctg_id,
      title: title,
    });
    return;
  };

  const falseApi = async () => {
    setActiveId(id);
    setStates(false);
    return;
  };

  id === activeId ? null : falseApi();
  useEffect(() => {
   
    if (user?.type !== "") {
      if (!states) {
        getType();
        setStates(true);
        return;
      }
      return;
    }
    return;
  }, [states]);

  const checkout = async () => {
    infoToast("menambahkan informasi..");
    setIsLoading(true);
    try {
      const FormPayload = new FormData();
      if(shipFee !== ""){
        FormPayload.append("shipping", shipFee?.slice(0, -3));
      }
      if(notes !== ""){
        FormPayload.append("note", notes);
      }
      if(activeF.id !== 0){
        FormPayload.append("status_id", activeF.id);
      }
      const checkout = await ApiClient.put(`order/${id}`, FormPayload).then(
        (res) => {
          return res.data;
        }
      );
      setIsLoading(false);
      updateToast("Berhasil.", "success");
      getType();
      return;
    } catch (error) {
      console.log(error);
      updateToast("Gagal.", "error");
      setIsLoading(false);
      return;
    }
  };

  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={200}>
      <Card
        sx={{
          width: "100%",
          height: "65vh",
          padding: "2vw",
          display: "flex",
          flexDirection: "column",
          gap: "1vw",
        }}
        elevation={3}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "1vw",
            alignItems: "center",
            height: "10%",
          }}
        >
          <Avatar
            sx={{ height: AvaSize.profile2, width: AvaSize.profile2 }}
            src={metas.url}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant="body" sx={H5style}>
              {metas.name}
            </Typography>
            <Typography variant="body" sx={SideNoteStyle}>
              {metas.email}
            </Typography>
          </div>
          <TextField
            label="Status"
            select
            sx={{ width: "40%", marginLeft: "auto" }}
            InputProps={{
              sx: {
                height: "53px",
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                minHeight: "10px",
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
              },
            }}
            defaultValue={activeF.title}
            value={activeF.title}
          >
            {filter.map((item, index) => {
              return (
                <MenuItem
                  key={item.id}
                  value={item.title}
                  sx={H5style}
                  onClick={() => setterF(item.id, item.title)}
                >
                  {item.title}
                </MenuItem>
              );
            })}
          </TextField>
        </div>
        <Divider />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "1vw",
            alignItems: "center",
          }}
        >
          <div style={MetaStyle5}>
            <div style={{ display: "flex", width: "100%" }}>
              <Typography variant="body" sx={LabelStyle2}>
                Order No.
              </Typography>
              <Typography variant="body" sx={{ marginLeft: "auto" }}>
                0{id}
              </Typography>
            </div>

            <Typography variant="body" sx={MetaValue2}>
              {metas.pembayaran}
            </Typography>
            <Typography variant="body" sx={MetaValue2}>
              {metas.bank} - {metas.norek}
            </Typography>

            <Typography variant="body" sx={MetaValue2}>
              {metas.cp}
            </Typography>

            <Typography variant="body" sx={MetaValue2}>
              {metas.address}
            </Typography>
          </div>
          <div style={MetaStyle5}>
            <div style={MetaStyle3}>
              <div style={MetaStyle2}>
                <Typography variant="body" sx={LabelStyle2}>
                  Jumlah variant
                </Typography>
                <Typography variant="body" sx={LabelStyle2}>
                  :
                </Typography>
              </div>
              <Typography variant="body" sx={MetaValue}>
                {metas.variant ? metas.variant : 0} produk
              </Typography>
            </div>
            <div style={MetaStyle3}>
              <div style={MetaStyle2}>
                <Typography variant="body" sx={LabelStyle2}>
                  Jumlah produk
                </Typography>
                <Typography variant="body" sx={LabelStyle2}>
                  :
                </Typography>
              </div>
              <Typography variant="body" sx={MetaValue}>
                {metas.unit ? metas.unit : 0} produk
              </Typography>
            </div>
            <div style={MetaStyle3}>
              <div style={MetaStyle2}>
                <Typography variant="body" sx={LabelStyle2}>
                  Total produk
                </Typography>
                <Typography variant="body" sx={LabelStyle2}>
                  :
                </Typography>
              </div>
              <Typography variant="body" sx={MetaValue}>
                Rp {metas.amount ? metas.amount : 0},000
              </Typography>
            </div>
            <div style={MetaStyle3}>
              <div style={MetaStyle2}>
                <Typography variant="body" sx={LabelStyle2}>
                  Pengiriman
                </Typography>
                <Typography variant="body" sx={LabelStyle2}>
                  :
                </Typography>
              </div>
              <Typography variant="body" sx={MetaValue}>
                Rp {metas.shipping ? metas.shipping : 0},000
              </Typography>
            </div>
            <div style={MetaStyle3}>
              <div style={MetaStyle2}>
                <Typography variant="body" sx={LabelStyle2}>
                  Total Harga
                </Typography>
                <Typography variant="body" sx={LabelStyle2}>
                  :
                </Typography>
              </div>
              <Typography variant="h6" sx={MetaValue}>
                Rp {metas.total ? metas.total : 0},000
              </Typography>
            </div>
          </div>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            gap: "1vw",
            alignItems: "center",
          }}
        >
          <div style={MetaStyle2}>
            <Typography variant="body" sx={H5style}>
              Biaya pengiriman
            </Typography>
            <Typography variant="body" sx={H5style}>
              :
            </Typography>
          </div>
          Rp.
          <TextField
            type="number"
            label="Biaya kirim.."
            value={shipFee}
            onChange={(e) => setShipFee(e.target.value)}
            sx={{
              width: "100%",
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                },
            }}
            inputProps={{
              sx: {
                ...H5style,
              },
            }}
            InputLabelProps={{
              sx: {
                ...LabelStyle,
              },
            }}
            size="small"
          />
        </div>
        <QuickPhotoUploader
          title="Bukti pembayaran"
          url={proofing ? proofing : null}
          id={id}
        />
        <QuickPhotoUploader title="Nomor Resi" url={ship ? ship : null} id={id}/>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            gap: "3.2vw",
            alignItems: "start",
          }}
        >
          <div style={MetaStyle2}>
            <Typography variant="body" sx={H5style}>
              Catatan
            </Typography>
            <Typography variant="body" sx={H5style}>
              :
            </Typography>
          </div>
          <TextField
            label="catatan order.."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            inputProps={{ sx: H5style }}
            InputLabelProps={{ sx: LabelStyle }}
            sx={{ width: "100%" }}
            size="small"
            multiline={true}
            minRows={4}
            maxRows={4}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle, marginLeft: "3%" }}>
            {metas.createdAt?.slice(0, 10)}
          </Typography>
          <Button
            variant="text"
            sx={{ marginLeft: "auto", ...LabelStyle }}
            onClick={() => navigate(`/dashboard/orders/${id}`)}
          >
            lihat
          </Button>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "600",
              width: "150px",
            }}
            onClick={() => checkout()}
          >
            Simpan
          </Button>
        </div>
      </Card>
    </Grow>
  );
};

export default QuickEdit;
