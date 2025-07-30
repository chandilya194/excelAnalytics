"use client";
import * as React from "react";
import { useState } from "react";
import styles from "../components/InputDesign.module.css";
import StaticMenu from "../components/StaticMenu";
import MainContent from "../components/MainContent";

export function Dashboard() {
  
 

  return ( 
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap"
      />
      <div className={styles.desktop1}>
        <StaticMenu />
        <MainContent />
      </div>
    </>
  );
}

