import React, { useState } from "react";

//material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import hamburger from "components/atoms/icons/hamburger.svg";
import CloseIcon from "@material-ui/icons/Close";
//components
import TopMenu from "./components/TopMenu";
import TopMenuToggle from "./components/TopMenuToggle";
//style
import {
  StyledAppBar,
  StyledToolbar,
  StyledTopbarBox,
  StyledLogoBox,
  StyledControlBox,
  StyledToggleBox,
  StyledTopMenuBox,
  StyledToggleButtonBox,
} from "./TopmenuStyle";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 2,
  },
  fab: {
    backgroundColor: "#2B5D7E",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#3498db",
    },
  },
  coinPriceLabel: {
    backgroundColor: theme.palette.secondary.dark,
  },
  logo: {
    width: "140px",
    marginRight: ".3rem",
    paddingTop: "0.33594rem",
    paddingBottom: "0.33594rem",
  },
  testnetMark: {
    marginTop: "1px",
    visibility: "hidden",
  },
  toggleIconBtn: {
    padding: "8px",
  },
  badge: {
    backgroundColor: "#de4437",
    paddingRight: ".6em",
    paddingLeft: ".6em",
    borderRadius: "10rem",
    padding: ".25em .4em",
    fontSize: "75%",
    color: "#fff",
    fontWeight: 700,
  },
  priceChangeMinus: {
    color: "#de4437!important",
  },
  priceChangePlus: {
    color: "#00c9a7!important",
  },
}));

function Topbar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    const visiable = !open;
    setOpen(visiable);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTopbarBox>
          <StyledLogoBox>
            <StyledToggleButtonBox>
              <IconButton
                onClick={handleToggleMenu}
                className={classes.toggleIconBtn}
                aria-label="delete"
              >
                {open ? <CloseIcon /> : <img src={hamburger} alt="hamburger" />}
              </IconButton>
            </StyledToggleButtonBox>
          </StyledLogoBox>
          <StyledToggleBox>{open ? <TopMenuToggle /> : ""}</StyledToggleBox>
          <StyledControlBox>
            <StyledTopMenuBox>
              <TopMenu />
            </StyledTopMenuBox>
          </StyledControlBox>
        </StyledTopbarBox>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Topbar;
