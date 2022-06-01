import { useCallback } from "react";

export function useSelectEstablishmentRatingProp() {
  return useCallback((establishment: { [key: string]: string }) => {
    const { RatingValue } = establishment;

    return RatingValue;
  }, []);
}
