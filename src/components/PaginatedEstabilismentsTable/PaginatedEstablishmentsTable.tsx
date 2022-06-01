import { useState, useEffect } from "react";
import { getEstablishmentRatings } from "../../lib/api/ratingsAPI";
import { APIClient } from "../../lib/api";
import {
  EstablishmentsTable,
  EstablishmentsTableNavigation,
} from "../EstablishmentsTable";
import styles from "./styles.module.scss";

/* Template
-------------------------------------------------------------------------*/

export const PaginatedEstablishmentsTable = () => {
  const [error, setError] = useState<{
    message: string;
    [key: string]: string;
  }>();
  const [establishments, setEstablishments] = useState<
    { [key: string]: string }[]
  >([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageCount] = useState(100);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handlePreviousPage() {
    pageNum > 1 && setPageNum(pageNum - 1);
    getEstablishmentRatings(pageNum).then(
      (result) => {
        setEstablishments(result.establishments);
      },
      (error) => {
        setError(error);
      }
    );
  }

  async function handleNextPage() {
    pageNum < pageCount && setPageNum(pageNum + 1);
    getEstablishmentRatings(pageNum).then(
      (result) => {
        setEstablishments(result.establishments);
      },
      (error) => {
        setError(error);
      }
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className={styles.PaginatedEstablishmentsTable}>
        <h2>Food Hygiene Ratings</h2>
        <EstablishmentsTable establishments={establishments} />
        <EstablishmentsTableNavigation
          pageNum={pageNum}
          pageCount={pageCount}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
        />
      </div>
    );
  }
};
