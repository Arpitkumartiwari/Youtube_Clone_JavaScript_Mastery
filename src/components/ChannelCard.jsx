import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const ChannelCard = (channelDetail) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        marginTop: "-100px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          color: "#FFF",
        }}
      >
        <CardMedia
          image={
            channelDetail?.channelDetail?.image?.banner[0]?.url
              ? channelDetail?.channelDetail?.image?.banner[0]?.url
              : channelDetail?.channelDetail?.thumbnail[0]?.url
              ? channelDetail?.channelDetail?.thumbnail[0]?.url
              : channelDetail?.channelDetail?.image?.mobileBanner[0]?.url
          }
          alt={channelDetail?.title}
          sx={{
            borderRadius: "50%",
            height: "150px",
            width: "150px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant="h6" sx={{ color: "#FFF" }}>
          {channelDetail?.channelDetail?.title}
          <CheckCircle sx={{ fontSize: "20px" }} />
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#FFF" }}>
          {channelDetail?.channelDetail?.subscriberCount} Subscribers
        </Typography>
      </CardContent>
    </Box>
  );
};

export default ChannelCard;
