import React from 'react';
import { useState } from 'react';
import Select from 'react-select';

export function Horoscope() {
    const [data, setData] = useState('')
    const sign = [
        { value: 'Aries', label: 'Aries'},
        { value: 'Taurus', label: 'Taurus'},
        { value: 'Gemini', label: 'Gemini'},
        { value: 'Cancer', label: 'Cancer'},
        { value: 'Leo', label: 'Leo'},
        { value: 'Virgo', label: 'Virgo'},
        { value: 'Libra', label: 'Libra'},
        { value: 'Scorpio', label: 'Scorpio'},
        { value: 'Sagittarius', label: 'Sagittarius'},
        { value: 'Capricorn', label: 'Capricorn'},
        { value: 'Aquarius', label: 'Aquarius'},
        { value: 'Pisces', label: 'Pisces'}
    ]

    const timeframe = [
        { value: 'Yesterday', label: 'Yesterday'},
        { value: 'Today', label: 'Today'},
        { value: 'Tomorrow', label: 'Tomorrow'},
        { value: 'Weekly', label: 'Weekly'},
        { value: 'Monthly', label: 'Monthly'}
    ]

    const handleClick = async () => {
        try {
                const data = getEndpoint();
                setData(data)
            } catch (err) {
                console.log(err.message)
            }
    }

    const makeKey = () => {
        const sign = 'Aries';
        const timeframe = 'Today';
        const key = sign + timeframe;
    
        return key;
    }

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
        <div>
            <button onClick={handleClick}>Load</button>
            <Select options={sign} className="w-25"/>
            <Select options={timeframe} className="w-25"/>
            {data}
        </div>
    )
}