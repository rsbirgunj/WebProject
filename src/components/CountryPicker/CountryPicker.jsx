import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

/**
* @author
* @function countrypicker
**/

const CountryPicker = ({handleCountryChange}) => {

    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

  return(
    <FormControl classNames={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {fetchedCountries.map((country ,i) => <option key={1} value={country}>{country}</option>)}
        </NativeSelect>
    </FormControl>

   )

 }

export default CountryPicker;