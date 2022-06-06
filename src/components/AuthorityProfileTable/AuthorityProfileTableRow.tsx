import React from "react";
import styles from "./styles.module.scss";

/* Outer props
-------------------------------------------------------------------------*/

interface IOuterProps {
  rating: string;
  frequency: number;
}

/* Template
-------------------------------------------------------------------------*/

export const AuthorityProfileTableRow: React.FC<IOuterProps> = ({
  frequency,
  rating,
}) => {
  return (
    <tr>
      <td className={styles.bodyCell}>{rating}</td>
      <td className={styles.bodyCell}>{frequency}</td>
    </tr>
  );
};
