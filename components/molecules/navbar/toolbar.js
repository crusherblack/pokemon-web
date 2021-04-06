import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import styles from "../../../styles/landing/Navbar.module.scss";

const ToolbarComponent = ({ openDrawerHandler }) => {
  const [anchorEl, setAchorEl] = useState(false);
  const menus = ["Home", "Tutorial", "Blog", "About Me"];

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
                  className={styles.textMenu}
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
                className={`${styles.btn} ${styles.btnSecondary} `}
                disableElevation={true}
                style={{
                  marginRight: "15px",
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                className={`${styles.btn} ${styles.btnPrimary}`}
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
