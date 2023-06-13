import React, { useState } from 'react'
import Spinner from './Spinner'
import SearchComponent from './SearchComponent'

const Search = (props) => {
    const [txt, setTxt] = useState(null)
    const [data, setData] = useState(null)
    const [spinner, setSpinner] = useState(false)
    let search = async (e,txt) => {
        e.preventDefault();
        setSpinner(true)
        if (txt) {
            try {
                let res = await fetch(`https://api.weatherapi.com/v1/current.json?key=b4e0e197f6bb45d08ab31832231006&q=${txt}`)
                res = await res.json();
                if (!res.error) {
                    setData(res)
                    setSpinner(false)
                } else {
                    props.alertFunc(res.error.message, "danger");
                    setSpinner(false)
                }
            } catch (err) {
                props.alertFunc(`Error while fetching weather ${err}`, "danger")
                setSpinner(false)
            }
        } else {
            props.alertFunc("Please enter a city or place name", "warning")
            setSpinner(false)
        }
    }
    return (
        <div className='container'>
            <div>
                <form onSubmit={(e) => search(e,txt)}>
                    <input className='bg-dark text-light ' type="text" onChange={(e) => { setTxt(e.target.value); setData(null) }} placeholder="Search" />
                    <button type='submit' className='mx-3 p-1 bg-dark text-light border-0'><span className='fa fa-search'></span></button>
                </form>
            </div>

            {data ? <SearchComponent data={data} /> : spinner ? <div className='container' style={{ margin: "120px -20px 0 150px" }}><Spinner /></div> : ""
            }
        </div>
    )
}

export default Search
