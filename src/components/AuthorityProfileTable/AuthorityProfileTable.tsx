import React from "react";
import { useAuthorityRatingFrequencies } from "../../lib/hooks/useAuthorityRatingFrequencies";
import { IAuthorityOption } from "../EstabilishmentProfile/EstablishmentsProfile";
import { AuthorityProfileTableHeader } from "./AuthorityProfileTableHeader";
import { AuthorityProfileTableRow } from "./AuthorityProfileTableRow";
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
        <AuthorityProfileTableHeader />
        {ratingValues.map((rating, key) => {
          return (
            <AuthorityProfileTableRow
              key={`${rating}-${key}`}
              rating={rating}
              frequency={ratingFrequencies.get(rating)}
            />
          );
        })}
      </tbody>
    </table>
  );
};
