import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CompanyOverview from "../pages/CompanyOverview";
import BusinessIcon from "@mui/icons-material/Business";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      {" "}
      <List>
      
        <ListItem
          disablePadding
          button
          component={Link}
          to="/company-overview"
          style={{ color: "black" }}
        >
            <ListItemButton>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Company Overview" />
            </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          button
          component={Link}
          to="/treasury-yield"
          style={{ color: "black" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="Treasury Yield" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          button
          component={Link}
          to="/inflation"
          style={{ color: "black" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <InsightsIcon />
            </ListItemIcon>
            <ListItemText primary="Inflation" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
