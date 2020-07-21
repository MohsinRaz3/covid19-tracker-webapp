import React from "react";
import "./App.css";
import kovid from "./image/kovid.png";
//import components

import { Cards, Chart, CountrySelector } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./FetchApi/api";
import Footer from "./components/footer";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={kovid} alt="COVID-19" />
        <Cards data={data} />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
