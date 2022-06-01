import React from "react";
import { useAuthorityRatingFrequencies } from "../../lib/hooks/useAuthorityRatingFrequencies";
import { IAuthorityOption } from "../EstabilishmentProfile/EstablishmentsProfile";
import styles from "./styles.module.scss";

/* Outer props
-------------------------------------------------------------------------*/

interface IOuterProps {
  authority: IAuthorityOption;
}

/* Template
-------------------------------------------------------------------------*/

export const AuthorityProfileTable: React.FC<IOuterProps> = ({ authority }) => {
  const { ratingValues, ratingFrequencies } =
    useAuthorityRatingFrequencies(authority);

  // Render

  return (
    <table className={styles.AuthorityProfileTable}>
      <tbody>
        <tr>
          <th className={styles.headCell}>Rating</th>
          <th className={styles.headCell}>Percentage</th>
        </tr>

        {ratingValues.map((rating, key) => {
          return (
            <tr key={`${key}-${rating}`}>
              <td className={styles.bodyCell}>{rating}</td>
              <td className={styles.bodyCell}>
                {ratingFrequencies.get(rating)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
