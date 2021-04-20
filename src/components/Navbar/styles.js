import React from "react";
import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";

import { generateMQ } from "../../helpers";

const mq = generateMQ("max");

export const HomeContainer = styled.div({});

export const StyledImage = styled.img({
  height: 120,
  width: 120,
});

export const StyledNavbar = styled(({ ...props }) => <AppBar {...props} />)({
  backgroundColor: "#fff !important",
  width: "inherit",
  minHeight: "100px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.1)",
  [mq[0]]: {
    minHeight: "55px",
    height: "60px",
    position: "sticky",
    top: 0,
  },
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-start",
});
