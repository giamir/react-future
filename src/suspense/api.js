const LATENCY = 2000;

export async function fetchAllAmiiboSeries() {
    const response = await fetch('http://www.amiiboapi.com/api/amiiboseries/');
    await new Promise(resolve => setTimeout(resolve, LATENCY));
    return await new Promise((resolve, reject) => response.json().then(
        response => resolve(response.amiibo),
        error => reject(error)
    ));
}

export async function fetchAmiibosBySeries(seriesKey) {
    const response = await fetch(`http://www.amiiboapi.com/api/amiibo/?amiiboseries=${seriesKey}`);
    await new Promise(resolve => setTimeout(resolve, LATENCY));
    return await new Promise((resolve, reject) => response.json().then(
        response => resolve(response.amiibo),
        error => reject(error)
    ));
}