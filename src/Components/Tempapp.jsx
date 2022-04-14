import React, { useEffect, useState } from 'react'
import "./css/style.css"
const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("delhi");
    const [time, setTime] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f735a78a32cded740b24a4a228040d26`
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main)
        };
        fetchApi();
    }, [search])
    const InputEvent = (event) => {
        setSearch(event.target.value)
    }
    return (
        <>
            <div className='box'>
                < div className='input'>
                    <input
                        type="search"
                        value={search}
                        className='inputField'
                        placeholder='Search Place'
                        onChange={InputEvent} />
                </div>
                {!city ? (
                    <p className='error'> no data found </p>
                ) : (
                    <div>
                        <h3 className='location'>
                            <i className="fas fa-street-view"> </i> {search}
                        </h3>
                        <div className='info'>

                            <h1 className='temp'>
                                {city.temp}॰Cel
                            </h1>
                            <h3 className='tempmin_max'>
                                Min: {city.temp_min}॰Cel | Max: {city.temp_max}॰Cel
                            </h3>

                        </div>
                    </div>

                )}
            </div>

        </>

    )
}
export default Tempapp;
