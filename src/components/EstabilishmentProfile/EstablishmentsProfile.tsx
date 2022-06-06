import React, { useState } from "react";
import { useGetAuthorities } from "../../lib/hooks/useGetAuthorities";
import { AuthorityProfileTable } from "../AuthorityProfileTable";
import { AuthoritySelector } from "../AuthoritySelector/AuthoritySelector";
import styles from "./styles.module.scss";

export interface IAuthorityOption {
  value: number;
  label: string;
  schemeType: number;
}

/* Template
-------------------------------------------------------------------------*/

export const EstablishmentsProfile: React.FC = () => {
  const [selectedAuthority, setSelectedAuthority] =
    useState<IAuthorityOption>();

  // Hooks

  const authorities = useGetAuthorities();

  // Render

  return (
    <section className={styles.EstablishmentsProfile}>
      <h2>Local Authorities Food Hygiene Profile</h2>
      <AuthoritySelector
        options={authorities}
        onChange={setSelectedAuthority}
      />
      {selectedAuthority && (
        <AuthorityProfileTable authority={selectedAuthority} />
      )}
    </section>
  );
};
