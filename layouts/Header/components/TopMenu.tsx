import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import DropDownMenu from "./DropDownMenu";
import { useStyles } from "../TopmenuStyle";

import routes from "../../../routes";

const TopMenu = () => {
  const classes = useStyles();
  let initTab = "Home";
  let saveTab = localStorage.getItem("menuName");
  if (!saveTab) {
    saveTab = initTab;
  }
  const [menuName, setMenuName] = React.useState<string | null>(saveTab);
  const [parentName, setParentName] = React.useState<string | null>(saveTab);

  const handleMenuClick = (linkName: any) => {
    setMenuName(linkName);
    setParentName(linkName);
    localStorage.setItem("menuName", linkName);
  };
  let username = "";
  return (
    <Box display="flex">
      {routes.map((prop, key) => {
        if (!prop.children) {
          return (
            <Link
              key={key}
              to={prop.path}
              onClick={() => handleMenuClick(`${prop.name}`)}
              className={clsx(classes.menuLink, {
                [classes.activeLink]: menuName === `${prop.name}`,
              })}
            >
              {prop.name}
            </Link>
          );
        } else if (prop.path !== "/logout") {
          return (
            <Box key={key}>
              <DropDownMenu
                setParentName={handleMenuClick}
                data={prop}
                menuName={menuName}
                parentName={parentName}
                username={username}
              />
            </Box>
          );
        } else {
          return <div></div>;
        }
      })}
    </Box>
  );
};

export default TopMenu;
