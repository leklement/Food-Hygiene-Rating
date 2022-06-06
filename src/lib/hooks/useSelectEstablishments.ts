import { useEffect, useState, useMemo } from "react";
import { APIClient } from "../api";

export const useSelectEstablishments = (pageNum: number) => {
  // States

  const [establishments, setEstablishments] = useState<
    { [key: string]: string }[]
  >([]);

  const [error, setError] = useState<{
    message: string;
    [key: string]: string;
  }>();

  // Effects
  useEffect(() => {
    APIClient.getEstablishmentRatings(pageNum).then(
      (result) => {
        if (!result) {
          setError({
            message: "Not found",
          });
          return;
        }

        setEstablishments(result?.establishments);
      },
      (error) => {
        setError(error);
      }
    );
  }, [pageNum]);

  return useMemo(() => {
    return { establishments, error };
  }, [establishments, error]);
};
