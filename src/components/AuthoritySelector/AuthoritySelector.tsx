import React from "react";
import ReactSelect from "react-select";
import { IAuthorityOption } from "../EstabilishmentProfile/EstablishmentsProfile";
import styles from "./styles.module.scss";

/* Outer props
-------------------------------------------------------------------------*/

interface IOuterProps {
  options: IAuthorityOption[];
  onChange: (authority: IAuthorityOption) => void;
}

/* Template
-------------------------------------------------------------------------*/

export const AuthoritySelector: React.FC<IOuterProps> = (props) => {
  const { options, onChange } = props;

  // Callback

  const handleChange = React.useCallback(
    (value) => {
      if (value) {
        onChange({
          value: value.value,
          label: value.label,
          schemeType: value.schemeType,
        });
      }
    },
    [onChange]
  );

  // Render

  return (
    <ReactSelect
      options={options}
      onChange={handleChange}
      className={styles.AuthoritySelector}
      placeholder="Select authority"
    />
  );
};
