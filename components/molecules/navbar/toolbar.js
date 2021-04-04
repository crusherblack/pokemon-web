import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "-46px",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navbar: {
    background: "white",
    height: "72px",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.black.main,
    paddingLeft: "7.7%",
    paddingRight: "7.7%",
  },
  textMenu: {
    fontSize: "14px",
    marginRight: "32px",
    fontFamily: "'Manrope', sans-serif",
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
      color: "#6b6b6b",
    },
  },
  baseBtn: {
    fontFamily: "'Manrope', sans-serif",
    height: "40px",
    width: "100px",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    textTransform: "none",
  },
  btnPrimary: {
    background: "#8C30F5",
    color: "white",
    "&:hover": {
      background: "#F1E4FF",
      color: "#8C30F5",
    },
  },
  btnSecondary: {
    background: "#F1E4FF",
    color: "#8C30F5",
    marginRight: "14px",
    "&:hover": {
      background: "#8C30F5",
      color: "white",
    },
  },
  navbarTitle: {
    fontFamily: "'Manrope', sans-serif",
    color: theme.palette.black.main,
    fontWeight: "bold",
    fontSize: "18px",
  },
  logo: {
    height: "55px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "-46px",
    },
  },
}));

const menus = ["Home", "Tutorial", "Blog", "About Me"];

const ToolbarComponent = ({ openDrawerHandler }) => {
  const styles = useStyles();
  const [anchorEl, setAchorEl] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";

  const handleMenuClose = () => {
    setAchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={styles.grow}>
      <AppBar position="fixed" className={styles.navbar} elevation={0}>
        <Toolbar>
          <img src="/icon.svg" alt="Tahu Coding Logo" className={styles.logo} />
          <div className={styles.grow} />
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              className={styles.sectionDesktop}
              style={{
                alignItems: "center",
              }}
            >
              {menus.map((menu, index) => (
                <Typography
                  className={`${styles.title} ${styles.textMenu}`}
                  variant="h6"
                  noWrap
                  key={`${menu}-${index}`}
                >
                  {menu}
                </Typography>
              ))}
            </div>
            <div className={styles.sectionDesktop}>
              <Button
                variant="contained"
                className={`${styles.baseBtn} ${styles.btnSecondary}`}
                disableElevation={true}
              >
                Login
              </Button>
              <Button
                variant="contained"
                className={`${styles.baseBtn} ${styles.btnPrimary}`}
                disableElevation={true}
              >
                Sign Up
              </Button>
            </div>
          </div>
          <IconButton
            edge="start"
            className={`${styles.menuButton} ${styles.sectionMobile}`}
            color="inherit"
            aria-label="open drawer"
            onClick={openDrawerHandler}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default ToolbarComponent;
