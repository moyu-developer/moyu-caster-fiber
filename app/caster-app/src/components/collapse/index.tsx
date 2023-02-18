import * as React from "react";
import {
  Box,
  Collapse,
  ListItemText,
  ListItemButton,
  ListItem,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useBoolean } from "react-use";

export function CollapseItem(props: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  const [expand, toggle] = useBoolean(false);

  const ExpandIcon = expand ? ExpandLess : ExpandMore;

  return (
    <Box>
      <ListItem sx={{
        cursor: 'pointer'
      }} onClick={toggle}>
        <ListItemText primary={props.title} />
        <ExpandIcon fontSize="small" />
      </ListItem>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <Box>{props.children}</Box>
      </Collapse>
    </Box>
  );
}
