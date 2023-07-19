import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  const fetchVideo = async () => {
    const options = {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`;
    const { data } = await axios.get(url, options);
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const videoData = await fetchVideo();
      setVideoDetail(videoData);
    };
    fetchData();
  }, [id, fetchVideo]);

  if (!videoDetail?.items[0]?.snippet) return "Loading......";

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "150px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#FFF" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.items[0]?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#FFF" }}
              py={1}
              px={2}
            >
              <Link
                to={`/channel/${videoDetail?.items[0]?.snippet?.channelId}`}
              >
                <Typography
                  variant={{ sx: "subtitle1", md: "h6" }}
                  color="#FFF"
                >
                  {videoDetail?.items[0]?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="10px">
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7 }}
                  alignItems="center"
                >
                  <RemoveRedEyeIcon
                    sx={{ color: "#FFF", fontSize: "16px", mr: "5px" }}
                  />
                  {parseInt(
                    videoDetail?.items[0]?.statistics?.viewCount
                  ).toLocaleString()}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7 }}
                  alignItems="center"
                >
                  <ThumbUpIcon
                    sx={{ color: "#FFF", fontSize: "16px", mr: "5px" }}
                  />
                  {parseInt(
                    videoDetail?.items[0]?.statistics?.likeCount
                  ).toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
