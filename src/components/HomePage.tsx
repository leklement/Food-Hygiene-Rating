import { PaginatedEstablishmentsTable } from "./PaginatedEstabilismentsTable";
import Background from "../static/logo.svg";
import styles from "./styles.module.scss";
import { EstablishmentsProfile } from "./EstabilishmentProfile";

const logoStyle: { [key: string]: string | number } = {
  width: "640px",
  height: "25px",
  background: `transparent url(${Background}) no-repeat center`,
  margin: "20px auto",
};

const HomePage = () => {
  return (
    <div id="HomePage" className={styles.HomePage}>
      <header style={logoStyle} />
      <div className={styles.container}>
        <PaginatedEstablishmentsTable />
        <EstablishmentsProfile />
      </div>
    </div>
  );
};

export default HomePage;
