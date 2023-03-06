// REACT
import React, { useState } from "react";

// STYLES
import styles from "./Header.module.css";

// SVG
import Burger from "./assets/Burger";
import Arrow from "./assets/arrow.svg";

// Collapse
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse } from "@blueprintjs/core";

// COMPONENT
const Header = () => {
  ///////////////
  // FUNCTIONS //
  ///////////////

  const [Open, setOpen] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [block, setBlock] = useState(false);

  const handleOpen = () => {
    if (!block) {
      setOpen(!Open);
      setClicked(true);
      setBlock(true);

      const interval = setInterval(() => {
        setBlock(false);
        clearInterval(interval);
      }, 500);
    } else {
    }
  };

  // Resize
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  ////////////
  // RENDER //
  ////////////
  return (
    <header
      className={`${styles.Container} ${
        Open ? styles.Black : styles.Deg
      } Header_Index`}
    >
      <div className={styles.Header}>
        <a className={styles.Logo} href="#home" />
      </div>
    </header>
  );
};

export default Header;
