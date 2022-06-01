import { useState } from "react";
import {
  EstablishmentsTable,
  EstablishmentsTableNavigation,
} from "../EstablishmentsTable";
import styles from "./styles.module.scss";
import { useSelectEstablishments } from "../../lib/hooks/useSelectEstablishments";

/* Template
-------------------------------------------------------------------------*/

export const PaginatedEstablishmentsTable = () => {
  const [pageNum, setPageNum] = useState(1);
  const [pageCount] = useState(100);

  // Hooks

  const { establishments, error } = useSelectEstablishments(pageNum);

  async function handlePreviousPage() {
    pageNum > 1 && setPageNum(pageNum - 1);
  }

  async function handleNextPage() {
    pageNum < pageCount && setPageNum(pageNum + 1);
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
