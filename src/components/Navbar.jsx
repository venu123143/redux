import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import axios from 'axios'
import { trySearch } from '../redux-container/SearchSlice'
const Navbar = () => {
  const [state, setState] = useState([])
  const [query, setQuery] = useState('')
  const [slider, setSlider] = useState(false)
  const dispach = useDispatch()

  // `cart` comes from store->reducer
  const data =
    [
      {
        "country_id": "1", "sortname": "AF", "country_name": "Afghanistan", "states": [
          { "state_id": "42", "state_name": "Badakhshan", "country_id": "1" },
          { "state_id": "43", "state_name": "Badgis", "country_id": "1" },
          { "state_id": "44", "state_name": "Baglan", "country_id": "1" }]
      },
      {
        "country_id": "2", "sortname": "AL", "country_name": "Albania", "states": [
          { "state_id": "74", "state_name": "Berat", "country_id": "2" },
          { "state_id": "75", "state_name": "Bulqize", "country_id": "2" },
          { "state_id": "76", "state_name": "Delvine", "country_id": "2" },
          { "state_id": "77", "state_name": "Devoll", "country_id": "2" }]
      },
      {
        "country_id": "13", "sortname": "AU", "country_name": "Australia", "states": [
          { "state_id": "245", "state_name": "Auckland", "country_id": "13" },
          { "state_id": "246", "state_name": "Australian Capital Territory", "country_id": "13" },
          { "state_id": "247", "state_name": "Balgowlah", "country_id": "13" },
          { "state_id": "248", "state_name": "Balmain", "country_id": "13" },
          { "state_id": "249", "state_name": "Bankstown", "country_id": "13" }]
      },
      {
        "country_id": "101", "sortname": "IN", "country_name": "India",
        "states": [
          { "state_id": "1", "state_name": "Andaman and Nicobar Islands", "country_id": "101" },
          { "state_id": "2", "state_name": "Andhra Pradesh", "country_id": "101" },
          { "state_id": "3", "state_name": "Arunachal Pradesh", "country_id": "101" },
          { "state_id": "4", "state_name": "Assam", "country_id": "101" },
          { "state_id": "5", "state_name": "Bihar", "country_id": "101" },
          { "state_id": "6", "state_name": "Chandigarh", "country_id": "101" },
          { "state_id": "7", "state_name": "Chhattisgarh", "country_id": "101" },
          { "state_id": "8", "state_name": "Dadra and Nagar Haveli", "country_id": "101" },
          { "state_id": "9", "state_name": "Daman and Diu", "country_id": "101" },
          { "state_id": "10", "state_name": "Delhi", "country_id": "101" },
          { "state_id": "11", "state_name": "Goa", "country_id": "101" },
          { "state_id": "12", "state_name": "Gujarat", "country_id": "101" },
          { "state_id": "13", "state_name": "Haryana", "country_id": "101" },
          { "state_id": "14", "state_name": "Himachal Pradesh", "country_id": "101" },
          { "state_id": "15", "state_name": "Jammu and Kashmir", "country_id": "101" },
          { "state_id": "16", "state_name": "Jharkhand", "country_id": "101" },
          { "state_id": "17", "state_name": "Karnataka", "country_id": "101" },
          { "state_id": "18", "state_name": "Kenmore", "country_id": "101" },
          { "state_id": "19", "state_name": "Kerala", "country_id": "101" },
          { "state_id": "20", "state_name": "Lakshadweep", "country_id": "101" },
          { "state_id": "21", "state_name": "Madhya Pradesh", "country_id": "101" },
          { "state_id": "22", "state_name": "Maharashtra", "country_id": "101" },
          { "state_id": "23", "state_name": "Manipur", "country_id": "101" },
          { "state_id": "24", "state_name": "Meghalaya", "country_id": "101" },
          { "state_id": "25", "state_name": "Mizoram", "country_id": "101" },
          { "state_id": "26", "state_name": "Nagaland", "country_id": "101" },
          { "state_id": "27", "state_name": "Narora", "country_id": "101" },
          { "state_id": "28", "state_name": "Natwar", "country_id": "101" },
          { "state_id": "29", "state_name": "Odisha", "country_id": "101" },
          { "state_id": "30", "state_name": "Paschim Medinipur", "country_id": "101" },
          { "state_id": "31", "state_name": "Pondicherry", "country_id": "101" },
          { "state_id": "32", "state_name": "Punjab", "country_id": "101" },
          { "state_id": "33", "state_name": "Rajasthan", "country_id": "101" },
          { "state_id": "34", "state_name": "Sikkim", "country_id": "101" },
          { "state_id": "35", "state_name": "Tamil Nadu", "country_id": "101" },
          { "state_id": "36", "state_name": "Telangana", "country_id": "101" },
          { "state_id": "37", "state_name": "Tripura", "country_id": "101" },
          { "state_id": "38", "state_name": "Uttar Pradesh", "country_id": "101" },
          { "state_id": "39", "state_name": "Uttarakhand", "country_id": "101" },
          { "state_id": "40", "state_name": "Vaishali", "country_id": "101" },
          { "state_id": "41", "state_name": "West Bengal", "country_id": "101" }
        ]
      }
    ]
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  const handleState = (e) => {
    setState(data.filter((data) => {
      if (data.country_id === e.target.value) {
        return data.states
      }
    }))
  }
  console.log(slider);

  return (
    <>
      <div className='nav'>
        <div className="elements">
          <Link to="/"><h3>redux Shoping </h3></Link>
          <select name="countries" onChange={handleState} id="countries">
            <option value="">--country--</option>
            {data.map((country) => (
              <option key={country.country_id} value={country.country_id}>{country.country_name}</option>
            ))}x

          </select>

          <select name="countries" id="countries">
            <option value="">--state--</option>
            {state[0]?.states.map((state) => (
              <option key={state.state_id} value={state.state_id}>{state.state_name}</option>
            ))}
          </select>
          <ul>
            <Link to="/search"><li>search</li></Link>
            <Link to="/popup"><li>popup</li></Link>
            <Link to="/magnifier"><li>magnifier</li></Link>
            <Link to="/latest"><li>circle</li></Link>
          </ul>
        </div>
        <div className="bag">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                dispach(trySearch(query))
              }} placeholder='Search..' />
            <button>submit</button>
          </div>
          <Link to="/cart ">
            <i className="fa-solid fa-bag-shopping"><sup>{cartTotalQuantity}</sup>
            </i>
          </Link>
          <div>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
            <label class={slider ? "switch changebg" : "switch"}>
              <input type="checkbox" onClick={() => setSlider(!slider)} />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar