import { useState, useEffect } from "react";
import styles from "./Flag.module.css";

function Flag() {
  const [countries, setCountries] = useState([]);

  const getCountriesData = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const res = await data.json();
      setCountries(res);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div className={styles.container}>
      {countries.map((country) => {
        return (
          <div key={country.cca3} className={styles.cardStyle}>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className={styles.imageStyle}
            />
            <p className={styles.textStyle}>{country.name.common}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Flag;
