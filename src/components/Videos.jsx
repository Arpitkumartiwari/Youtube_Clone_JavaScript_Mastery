import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard } from "./";

const Videos = ({ videos,channelDetail }) => {
  return (
    <Stack direction="row" flexWrap="Wrap" justifyContent="center" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>{item?.videoId && <VideoCard video={item} channeDetail={channelDetail}/>}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
