function todayReport() {
    let todayReport = document.getElementById('report')//gets the div with id of report, assigns it to a variable called todayReport
    
    todayReport.innerHTML = `
    <h4>Today</h4>
        <p>Scattered thunderstorms</p>
        <ul>
            <li>Temp: 29C</li>
            <li>Precipitation: 25%</li>
            <li>Humidity: 58%</li>
            <li>Wind: 16km/h</li>
        </ul>`;//uses innerHTML to set the value of todayReport as this text, which fills the div with id of report
}

function tomorrowReport() {
    let tomorrowReport = document.getElementById('report'); //gets the div with id of report, assigns it to a variable called tomorrowReport
    
    tomorrowReport.innerHTML = `
    <h4>Tomorrow</h4>
        <p>Partly cloudy</p>
        <ul>
            <li>Temp: 27C</li>
            <li>Precipitation: 20%</li>
            <li>Humidity: 65%</li>
            <li>Wind: 13km/h</li>
        </ul>`;//uses innerHTML to set the value of tomrrowReport as this text, which fills the div with id of report
}