# Horoscope Front-End Application


## Project Description
This application uses JavaScript, jQuery and HTML/CSS and gets a user's horoscope information from the Horoscope API using the JavaScript fetch API. It than displays to the user their horoscopes for the day, week, or month depending on the user's selection asynchronously. The sign and timeframe that is selected by the user is concatenated together to create a key that is mapped to it's corresponding API endpoint. From there, a GET request is sent to the endpoint and the user's horoscope is sent back as a response in JSON format. From here, the JSON object is parsed and displayed to the user so they can view their horoscope. This front-end application is also responsive and works on mobile devices. 


## How to run the application
The application is hosted on my web portfolio and can be accessed by visiting [https://horoscopeapp.justintruong.studio](https://horoscopeapp.justintruong.studio).


## How to use the application
1. Visit the website on any browser or device.
2. Select your zodiac sign from the drop-down menu.
3. Choose the time-interval from the second drop-down menu.
4. Click the "Show Horoscope" button to display your horoscope.


## Technology used
1. Microsoft Azure Static Web Apps to host the application
2. JavaScript & jQuery, HTML/CSS & Bootstrap 5
3. Horoscope REST API that is also found on my GitHub [https://github.com/Truong-Justin/horoscopeApi](https://github.com/Truong-Justin/horoscopeApi).


## Planned additions
1. This project was used to learn how to use JavaScript, the fetch API, and jQuery to interface with the Horoscope REST API and display the information asynchronously on the client-side. As I learn more about JavaScript, I plan to use the React library to make a better user interface. 
