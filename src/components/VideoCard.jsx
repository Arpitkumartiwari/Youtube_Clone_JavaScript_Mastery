import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoVideoTitle, demoVideoUrl } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { md: "220px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <Link to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
        <CardMedia
          image={video?.thumbnail[0]?.url}
          alt={video.title}
          sx={{ width: 220, height: 150, objectFit: "cover" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px" }}>
        <Link to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
          <Typography
            variant="title3"
            fontWeight="bold"
            fontFamily={("Lobster Two", "sans-serif")}
            color="#FFF"
          >
            {video.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}
          </Typography>
        </Link>
        <Link to={`/channel/${video.channelId}`}>
          <CardContent
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "start",
              justifyContent: "start",
              textAlign: "start",
              color: "#FFF",
            }}
          >
            {video.channelTitle ? (
              <>
                <CardMedia
                  image={video.thumbnail[0]?.url}
                  alt={video.channelTitle}
                  sx={{
                    borderRadius: "50%",
                    height: "20px",
                    width: "20px",
                    border: "1px solid #e3e3e3",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#FFF", fontSize: "12px" }}
                >
                  {video.channelTitle}
                  <CheckCircle sx={{ fontSize: "12px" }} />
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#FFF", fontSize: "12px" }}
                >
                 Duration: {video.lengthText}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#FFF", fontSize: "12px" }}
                >
                  {video.publishedText}
                </Typography>
              </>
            )}
          </CardContent>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
