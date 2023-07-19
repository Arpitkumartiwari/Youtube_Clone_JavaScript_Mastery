import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import { Videos } from "./";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channel?part=snippet&id=${id}`).then(async (data) => {
      const response = await data;
      setChannelDetail(response.meta);
      setVideo(response.data);
    });
  }, [id]);

  if (channelDetail === null) {
    return <div>Loading...</div>;
  }

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(121,9,9,1) 0%, rgba(255,0,0,1) 100%)",
            zIndex: 10,
            height: "250px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box sx={{ display: "flex", p: "2" }}>
        <Box />
        <Videos videos={video} channelDetail={channelDetail}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
