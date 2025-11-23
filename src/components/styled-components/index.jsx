import styled from "styled-components";

import { Menubar } from "primereact/menubar";

import { Button } from "primereact/button";
import { Card } from "primereact/card";

export const StyledMenubar = styled(Menubar)(({ theme }) => ({
  // Root Menubar styles
  "&.p-menubar": {
    backgroundColor: "hsl(var(--background))",
    // backgroundColor: "black",
    border: "none",
  },
  svg: {
    color: "black",
  },
  // Menu list (ul) styles
  "& .p-menubar-root-list": {
    gap: "1rem",
  },

  // Menu item text base styles
  "& .p-menuitem-text": {
    color: "hsl(var(--muted-foreground))",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
  },

  // Menu item link base styles with transitions
  "& .p-menuitem-link": {
    // Apply transitions to relevant properties
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",

    // Base color (inherits or sets explicitly if needed)
    color: "hsl(var(--muted-foreground))",
  },

  "& .p-submenu-list": {
    padding: "4px",
    border: "1px solid hsl(var(--border))",
  },
  "& .p-menuitem-content": {
    padding: "6px",
  },
}));

export const StyledPrimaryButton = styled(Button)(({ theme }) => ({
  color: "hsl(var(--primary-foreground))",
  fontWeight: "500",
  padding: "12px 24px",
  borderRadius: "calc(var(--radius) - 2px)",
}));

export const StyledOutlineButton = styled(Button)(({ theme }) => ({
  color: "hsl(var(--button-foreground))",
  fontWeight: "500",
  padding: "12px 24px",
  borderRdius: "calc(var(--radius) - 2px)",
}));

export const StyledColoredDiv = styled("div")(({ theme }) => ({
  backgroundColor: "hsl(var(--card)) !important",
}));

export const StyledColoredContact = styled("div")(({ theme }) => ({
  backgroundColor: "hsl(var(--card))",
}));

export const StyledFeatureCards = styled(Card)(({ theme }) => ({
  ".p-card-title": {
    padding: "24px",
    fontSize: "1.25rem",
    fontWeight: "600",
    fontFamily: "Space Grotesk, sans-serif;",
  },
  ".p-card-subtitle": {
    padding: "24px",
    paddingTop: "0px",

    fontSize: ".875rem",
    color: "hsl(var(--muted-foreground))",
  },
}));
