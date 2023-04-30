const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

//creates and returns a response object using fetch
//and prints the JSON data within the response object
async function getData() {
    const response = await fetch('https://horoscopeapi-v6vga.ondigitalocean.app/api/get-chineseHoroscope/daily?animal=dragon&day=today');
    const data = await response.json();
    console.log(data['data']);
}

function changeParagraph() {
    document.getElementById('paragraph').innerText = 'Message changed';
}
