import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="column"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%", flexDirection: { md: "row" } },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.color === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "cyan" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
