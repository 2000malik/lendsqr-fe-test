import React from "react";
//
import { Tabs } from "@/src/components";
//
import { tabsOption } from "../../data";
import styles from "../../styles.module.scss";

export const BasicInfo = () => {
  return (
    <div className={styles.basicInfoContainer}>
         <div> d Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur odio exercitationem excepturi laboriosam accusamus voluptatem aut. Eius repudiandae optio ea porro dolorem fugit assumenda vel, at repellat odio cupiditate.{/* content above tabs here */} </div>
      <Tabs options={tabsOption} />
    </div>
  );
};
