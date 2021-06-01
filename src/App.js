import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import fetchData from './api';
import coronaImage from '../src/img/image.png';


/**
* @author
* @function App
**/

class App extends React.Component {
    state = {
        data : {},
        country : '',
    }

    async componentDidMount()
    {
        const fetch = await fetchData();

        this.setState({data : fetch});
    }

    handleCountryChange = async (country) => {
        const fetch = await fetchData(country);

        this.setState({data : fetch, country: country});
    }

    render() {
        const { data,country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }

}

export default App;