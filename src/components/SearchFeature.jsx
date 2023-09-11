import React, { useEffect, useState } from 'react'
import { data } from '../store'
import { useSelector } from 'react-redux'
const SearchFeature = () => {
    const [state, setState] = useState([])
    const trySearch = useSelector((state) => state.search)
    const keys = ['country_id', 'country_name', 'sortname']
    useEffect(() => {
        setState(data)
    }, [])
    return (
        <div className='search-feature'>
            <table>
                <tbody>
                    <tr>
                        <th>country id </th>
                        <th>country name</th>
                        <th>short name</th>
                        <th>states</th>
                    </tr>
                    {state.filter((data) => data.country_name.toLowerCase().includes(trySearch.query.toLowerCase())).map((country) => (
                        <tr key={country.country_id}>
                            <td>{country.country_id}</td>
                            <td>{country.country_name}</td>
                            <td>{country.sortname}</td>
                        </tr>
                    ))}
                    {state.map((state) => state.states.map(city =>
                        <tr key={city.state_id}>
                            <td>{city.state_id}</td>
                            <td>{city.state_name}</td>
                            <td>{city.country_id}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default SearchFeature