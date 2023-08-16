import React from 'react';
import { useState } from 'react';
import Moon from './assets/images/moon.png'

// This component handles the UI logic that 
// outputs to the user their horoscope.
export function Horoscope() {
    // State objects that are set when a user clicks the 
    // {Show Horoscope} button, or selects a sign/timeframe.
    const [horoscope, setHoroscope] = useState('Select your zodiac sign from the dropdown menu, and select a timeframe to view your horoscope');
    const [selectedSign, setSelectedSign] = useState('Aries');
    const [selectedTimeframe, setSelectedTimeframe] = useState('Yesterday');
    
    const sign = [
        { key: 1, value: 'Aries', label: 'Aries'},
        { key: 2, value: 'Taurus', label: 'Taurus'},
        { key: 3, value: 'Gemini', label: 'Gemini'},
        { key: 4, value: 'Cancer', label: 'Cancer'},
        { key: 5, value: 'Leo', label: 'Leo'},
        { key: 6, value: 'Virgo', label: 'Virgo'},
        { key: 7, value: 'Libra', label: 'Libra'},
        { key: 8, value: 'Scorpio', label: 'Scorpio'},
        { key: 9, value: 'Sagittarius', label: 'Sagittarius'},
        { key: 10, value: 'Capricorn', label: 'Capricorn'},
        { key: 11, value: 'Aquarius', label: 'Aquarius'},
        { key: 12, value: 'Pisces', label: 'Pisces'}
    ]

    const timeframe = [
        { key: 1, value: 'Yesterday', label: 'Yesterday'},
        { key: 2, value: 'Today', label: 'Today'},
        { key: 3, value: 'Tomorrow', label: 'Tomorrow'},
        { key: 4, value: 'Weekly', label: 'Weekly'},
        { key: 5, value: 'Monthly', label: 'Monthly'}
    ]

    // Sets the selectedSign state object 
    // when the user selects a sign.
    const handleSelectedSign = (event) => {
        setSelectedSign(event.target.value);
    }

    // Sets the selectedTimeframe state object
    // when the selects a timeframe.
    const handleSelectedTimeframe = (event) => {
        setSelectedTimeframe(event.target.value);
    }

    // Sets the horoscope state object when 
    // the user presses the {Show Horoscope} button.
    // The function getEndpoint is used to get the correct
    // API endpoint depending on the selections made by the user.
    const handleClick = async () => {
            const endpoint = getEndpoint()

            try {
                const response = await fetch(endpoint)
                const userHoroscope = await response.json();
                setHoroscope(userHoroscope["data"]);
            } catch (error) {
                console.log('error my dude', error);
            }
                
    }

    // Creates a key by concatenating the 
    // selectedSign and selectedTimeframe together.
    const makeKey = () => {
        const sign = selectedSign;
        const timeframe = selectedTimeframe;
        const key = sign + timeframe;
    
        return key;
    }

    // Returns the correct API endpoint using the key returned 
    // from the makeKey() function 
    const getEndpoint = () => {
        const key = makeKey();
        const endpoint = {
            "AriesYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=aries&day=yesterday",
            "AriesToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=aries&day=today",
            "AriesTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=aries&day=tomorrow",
            "AriesWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=aries",
            "AriesMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=aries",
    
            "TaurusYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=taurus&day=yesterday",
            "TaurusToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=taurus&day=today",
            "TaurusTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=taurus&day=tomorrow",
            "TaurusWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=taurus",
            "TaurusMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=taurus",
    
            "GeminiYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=gemini&day=yesterday",
            "GeminiToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=gemini&day=today",
            "GeminiTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=gemini&day=tomorrow",
            "GeminiWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=gemini",
            "GeminiMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=gemini",
    
            "CancerYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=cancer&day=yesterday",
            "CancerToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=cancer&day=today",
            "CancerTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=cancer&day=tomorrow",
            "CancerWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=cancer",
            "CancerMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=cancer",
    
            "LeoYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=leo&day=yesterday",
            "LeoToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=leo&day=today",
            "LeoTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=leo&day=tomorrow",
            "LeoWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=leo",
            "LeoMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=leo",
    
            "VirgoYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=virgo&day=yesterday",
            "VirgoToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=virgo&day=today",
            "VirgoTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=virgo&day=tomorrow",
            "VirgoWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=virgo",
            "VirgoMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=virgo",
    
            "LibraYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=libra&day=yesterday",
            "LibraToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=libra&day=today",
            "LibraTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=libra&day=tomorrow",
            "LibraWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=libra",
            "LibraMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=libra",
    
            "ScorpioYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=scorpio&day=yesterday",
            "ScorpioToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=scorpio&day=today",
            "ScorpioTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=scorpio&day=tomorrow",
            "ScorpioWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=scorpio",
            "ScorpioMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=scorpio",
    
            "SagittariusYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=sagittarius&day=yesterday",
            "SagittariusToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=sagittarius&day=today",
            "SagittariusTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=sagittarius&day=tomorrow",
            "SagittariusWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=sagittarius",
            "SagittariusMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=sagittarius",
    
            "CapricornYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=capricorn&day=yesterday",
            "CapricornToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=capricorn&day=today",
            "CapricornTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=capricorn&day=tomorrow",
            "CapricornWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=capricorn",
            "CapricornMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=capricorn",
    
            "AquariusYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=aquarius&day=yesterday",
            "AquariusToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=aquarius&day=today",
            "AquariusTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=aquarius&day=tomorrow",
            "AquariusWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=aquarius",
            "AquariusMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=aquarius",
    
            "PiscesYesterday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=pisces&day=yesterday",
            "PiscesToday" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=pisces&day=today",
            "PiscesTomorrow" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/daily?sign=pisces&day=tomorrow",
            "PiscesWeekly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/weekly?sign=pisces",
            "PiscesMonthly" : "https://horoscopeapi-v6vga.ondigitalocean.app/api/get-horoscope/monthly?sign=pisces"
        }
    
        return endpoint[key];
    }

    return (
        <section className="p-5">
            <div className="container" id="parent">
                <div className="d-sm-flex row align-items-center justify-content-between">
                        <div className="row" id="border">
                            <img className="w-25 mx-auto d-none d-sm-block my-2" src={Moon} alt="Moon"/>
                            <img className="mx-auto d-sm-none my-2" src={Moon} alt="Moon"/>
                            <div id="round-div" className="mb-3 mx-auto">
                            <h1 className="text-center text-light mt-5"><span className="text-warning">Horoscope</span> Application</h1>
                            <div id="desktopUI">
                                <div className="mt-5 text-center">
                                    <select value={selectedSign} onChange={handleSelectedSign} className="btn-lg btn-warning">
                                        {sign.map(sign => {
                                            return <option key={sign.key} value={sign.value}>{sign.label}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="mt-3 text-center">
                                    <select value={selectedTimeframe} onChange={handleSelectedTimeframe} className="btn-lg btn-secondary">
                                    {timeframe.map(timeframe => {
                                        return <option key={timeframe.key} value={timeframe.value}>{timeframe.label}</option>
                                    })}
                                    </select>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-secondary mt-5" onClick={handleClick}>Show Horoscope</button>
                            </div>
                                <p id="paragraph" className="mt-5 horoscope-text text-center">({horoscope})</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}