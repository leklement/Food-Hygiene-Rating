import { useEffect, useState, useMemo } from "react";
import { IAuthorityOption } from "../../components/EstabilishmentProfile/EstablishmentsProfile";
import { APIClient } from "../api";
import { useSelectAuthorityProps } from "./useSelectAuthorityProps";

export const useGetAuthorities = () => {
  // States

  const [authorities, setAuthorities] = useState<IAuthorityOption[]>([]);

  // Memos

  const selectAuthorityProps = useSelectAuthorityProps();

  // Effects

  useEffect(() => {
    APIClient.getAuthorities().then(
      (result) => {
        if (!result) {
          return;
        }

        setAuthorities(result?.authorities.map(selectAuthorityProps));
      },
      (error) => {
        console.log(error);
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(() => {
    return authorities;
  }, [authorities]);
};
