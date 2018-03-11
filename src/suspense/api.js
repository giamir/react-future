const LATENCY = 2000;

export async function fetchAmiiboSeries() {
    const response = await fetch('https://www.amiiboapi.com/api/amiiboseries/');
    await new Promise(resolve => setTimeout(resolve, LATENCY));
    return await response.json();
}

export async function fetchAmiiboSerie(amiiboSerieKey) {
    const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?amiiboseries=${amiiboSerieKey}`);
    await new Promise(resolve => setTimeout(resolve, LATENCY));
    return await response.json();
}