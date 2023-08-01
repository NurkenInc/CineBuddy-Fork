import React from "react";
import classNames from "classnames";
import Link from "next/link";

import styles from "./logo.module.scss";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link className={classNames(styles.link, className)} href="/">
      <h1 className={styles.text}>
        Cine<span>Buddy</span>
      </h1>
    </Link>
  );
};

export default Logo;
