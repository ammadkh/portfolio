import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path d="M 2 2.5 L 20 2.5" />
      <Path d="M 2 9.423 L 20 9.423" transition={{ duration: 0.1 }} />
      <Path d="M 2 16.346 L 20 16.346" />
    </svg>
  </button>
);
