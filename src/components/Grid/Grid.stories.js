import React from "react";
import Grid from "./index";
import GridItem from "../GridItem";

// export default {
//   title: "Base/Grid",
//   component: Grid,
// };

export const Basic = (args) => (
  <Grid {...args}>
    <GridItem size={3} key="aa">
      <span
        style={{
          display: "block",
          minHeight: "100px",
          border: "1px solid #6e6e6e",
          background: "#e2e2e2",
        }}
      />
    </GridItem>
    <GridItem size={3} key="bb">
      <span
        style={{
          display: "block",
          minHeight: "100px",
          border: "1px solid #6e6e6e",
          background: "#c4c4c4",
        }}
      />
    </GridItem>
  </Grid>
);
Basic.args = {};
