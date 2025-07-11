import React, { CSSProperties } from "react";
import Image from "next/image";
//
import styles from "./styles.module.scss";
//
type Props = {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  sx?: CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
  children,
  loading,
  className,
  sx,
  ...rest
}) => {
  return (
    <button
      className={`${styles.styleButton} ${className || ""}`}
      style={sx}
      {...rest}
    >
      {loading ? (
        <Image
          src="/assets/svgs/spinner.svg"
          alt="loading-svg"
          width={17}
          height={36}
          loading="lazy"
        />
      ) : (
        children
      )}
    </button>
  );
};
