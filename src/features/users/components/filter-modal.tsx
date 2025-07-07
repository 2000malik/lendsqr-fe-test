import React from "react";

import styles from "./styles.module.scss";
import { FilterForm } from "./filter-form";

// TODO: CONVERT MODAL TO A USEABLE COMPONENT

type Props = {
  show: boolean;
  onClose: () => void;
};

export const FilterModal: React.FC<Props> = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div>Filter</div>
        <FilterForm />
      </div>
    </div>
  );
};
