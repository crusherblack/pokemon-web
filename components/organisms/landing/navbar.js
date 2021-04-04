import React, { useState } from "react";
import ToolbarComponent from "../../molecules/navbar/toolbar";
import DrawerComponent from "../../molecules/navbar/drawer";

const NavbarComponent = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => setDrawerVisible((prev) => !prev);

  return (
    <div
      style={{
        marginBottom: "72px",
      }}
    >
      <ToolbarComponent openDrawerHandler={toggleDrawer} />
      <DrawerComponent
        drawerVisible={drawerVisible}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
};

export default NavbarComponent;
