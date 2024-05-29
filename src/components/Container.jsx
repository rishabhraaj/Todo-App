import styles from "./Container.module.css";

import React from "react";

const Container = ({ children }) => {
  return <center className={styles.containerBox}>{children}</center>;
};

export default Container;
