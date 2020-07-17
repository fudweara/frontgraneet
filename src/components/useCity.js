import {useEffect, useState} from 'react';


function useCity(searchQuery) {

    const [cities, setCities] = useState([])

    useEffect(() => {

        fetch('https://localhost:8083/' + searchQuery,
            {method: 'GET',})
            .then(res => res.json())
            .then((response) => {
                setCities(response)
            })
            .catch(error => console.log('error'))
    });

    return cities;

}
