import { useCallback, useMemo } from "react";
import { IAuthorityOption } from "../../components/EstabilishmentProfile/EstablishmentsProfile";
import { useSelectEstablishmentsRatings } from "./useSelectEstabilishmentsRatings";

export const useAuthorityRatingFrequencies = (authority: IAuthorityOption) => {
  // Hooks

  const establishmentsRatings = useSelectEstablishmentsRatings(authority.value);

  // Memo

  const numOfEstablishments = establishmentsRatings.length;

  // Callbacks

  const frequencies = useCallback((arr: string[]) => {
    // Create a empty map
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
      if (map.has(arr[i])) {
        // When key exists then update value
        map.set(arr[i], map.get(arr[i]) + 1);
      } else {
        // Add new element
        map.set(arr[i], 1);
      }
    }

    return map;
  }, []);

  const precentage = useCallback(
    (frequency: number) => {
      return Math.round((frequency * 100) / numOfEstablishments) || 0;
    },
    [numOfEstablishments]
  );

  return useMemo(() => {
    const ratingFrequencies = frequencies(establishmentsRatings);

    const ratingValues =
      authority.schemeType === 1
        ? ["5", "4", "3", "2", "1", "Exempt"]
        : [
            "Pass and Eat Safe",
            "Pass",
            "Needs Improvement",
            "Awaiting Inspection",
            "Exempt",
          ];

    ratingValues.forEach((item) => {
      ratingFrequencies.set(item, precentage(ratingFrequencies.get(item)));
    });
    return {
      ratingValues,
      ratingFrequencies,
    };
  }, [authority.schemeType, establishmentsRatings, frequencies, precentage]);
};
