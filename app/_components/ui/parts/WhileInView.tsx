"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

const WhileInView: FC<{ children: ReactNode; delay?: number }> = ({ children, delay }) => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        delay: delay ?? 0,
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default WhileInView;
