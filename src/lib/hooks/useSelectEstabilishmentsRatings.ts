import { useMemo, useEffect, useState } from "react";
import { APIClient } from "../api";
import { useSelectEstablishmentRatingProp } from "./useSelectEstablishmentRatingProp";

export const useSelectEstablishmentsRatings = (authorityId: number) => {
  // States

  const [establishments, setEstablishments] = useState<string[]>([]);

  // Hooks

  const selectEstablishmentRatingProp = useSelectEstablishmentRatingProp();

  // Effects

  useEffect(() => {
    APIClient.getEstablishmentByAuthority(authorityId).then(
      (result) => {
        if (!result) {
          return [];
        }

        setEstablishments(
          result.establishments.map((establishment) =>
            selectEstablishmentRatingProp(establishment)
          )
        );
      },
      (error) => {
        return [];
      }
    );
  }, [authorityId]);

  return useMemo(() => {
    return establishments;
  }, [establishments]);
};
