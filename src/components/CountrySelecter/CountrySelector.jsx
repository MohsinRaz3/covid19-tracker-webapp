import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../FetchApi/api";

import styles from "./CountrySelector.module.css";

const CountrySelector = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetechedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountrySelector;
