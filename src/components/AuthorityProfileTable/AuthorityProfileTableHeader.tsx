import React from "react";
import styles from "./styles.module.scss";

/* Template
-------------------------------------------------------------------------*/

export const AuthorityProfileTableHeader: React.FC = () => {
  return (
    <tr>
      <th className={styles.headCell}>Rating</th>
      <th className={styles.headCell}>Percentage</th>
    </tr>
  );
};
