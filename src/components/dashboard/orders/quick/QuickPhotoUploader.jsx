import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { H5style, MetaStyle2 } from "../../../../utils/constants";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";

const QuickPhotoUploader = ({ title }) => {
  const [picFile, setPicFile] = useState("");

  const FileExtractor = (submitted) => {
    if (submitted) {
      if (submitted.size > 2000000) {
        return toastError("Ukuran file melebihi batas.");
      }
      if (submitted.name.length > 11) {
        const name = submitted?.name;
        const lastExt = name.lastIndexOf(".");
        const fileName = name.substring(0, 10).concat("...");
        const ext = name.substring(lastExt + 1);
        return setPicFile(fileName.concat(ext));
      }
      return setPicFile(submitted?.name);
    }
    return null;
  };

  return (
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
          {title}
        </Typography>
        <Typography variant="body" sx={H5style}>
          :
        </Typography>
      </div>
      {picFile !== "" ? (
        <div style={{ display: 'flex', width: '100%', alignItems: 'center'}}>
          <Typography
            variant="body"
            style={{ ...H5style, marginLeft: 'auto' }}
          >
            {picFile}
          </Typography>
          <Button
          component="label"
          variant="contained"
          sx={{
            background: "#fff",
            color: "#00ff00",
            minWidth: '10px',
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            display: "flex",
            marginLeft: 'auto',
            alignItems: "center",
            "&:hover": {
              background: "#00ff00",
              color: "#fff",
            },
          }}
          startIcon={<CloudUploadRoundedIcon />}
        >
          Ubah file
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => FileExtractor(e.target.files[0])}
          />
        </Button>
        </div>
      ) : (
        <Button
          component="label"
          variant="contained"
          sx={{
            background: "#fff",
            color: "#00ff00",
            width: "95%",
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              background: "#00ff00",
              color: "#fff",
            },
          }}
          startIcon={<CloudUploadRoundedIcon />}
        >
          {title}
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => FileExtractor(e.target.files[0])}
          />
        </Button>
      )}
    </div>
  );
};

export default QuickPhotoUploader;
