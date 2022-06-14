import React, {useState,useEffect} from 'react';
import './weatherCard.css';
import {GiModernCity} from 'react-icons/gi';
import {TiWeatherPartlySunny} from 'react-icons/ti'

function WeatherCard() {
const[city,setCity]=useState("Rourkela")
const [search,setSearch]=useState("Rourkela")


useEffect(()=>
{
    const fetchApi = async ()=>
    {   const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c9cd24c0be0ba0b98178c9af4d0f82cc`
        const response = await fetch(url);
        const jsonResponse = await response.json();
        setCity(jsonResponse.main)
        
        

        
    }


fetchApi();

},[search])

console.log(search)

  return (

<>
{!city ? (<div className="Card__container">
<div className="Card__input">
<input type='search' onChange={(event)=>setSearch(event.target.value)}   placeholder='City Name'/>

</div>

<div className="Card__head">
    <div className='City__logo'>
        <GiModernCity className='logo' />
    </div>

    <div className='City__name'> <h3 >{search}</h3></div>
   <p>No Data Found</p>
</div>





    </div>):( <div className="Card__container">
<div className="Card__input">
<input type='search' onChange={(event)=>setSearch(event.target.value)}   placeholder='City Name'/>

</div>

<div className="Card__head">
    <div className='City__logo'>
        <GiModernCity className='logo' />
    </div>

    <div className='City__name'> <h3 >{search}</h3></div>
   
</div>

<div className="Card__details">

    <div className="Main__info">
<div className="temp__logo"><TiWeatherPartlySunny /></div>
<h5>{city.temp}</h5>

    </div>

    <div className="Info__1">
        <h3>{city.temp_max}</h3>
        <p>High</p>
        
        <h3>{city.temp_min}</h3>
        <p>Low</p>
        
    </div>

    <div className="info__2">
        <h5>{city.humidity} %</h5>
        <p>Humidity</p>

    </div>

    <div className="info__3">
        <h5>{city.feels_like} Cel</h5>
        <h3>Feels Like</h3>
    </div>
</div>



    </div>)}

    </>
  )

}

export default WeatherCard