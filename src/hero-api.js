export function fetchHero(hero){
    const base_url = 'https://superhero-search.p.rapidapi.com';
    const end_point = '/api/';
    const params = `?hero=${hero}`;
    const url = base_url + end_point + params;
    const options = {
        heeads: {
            'X-RapidAPI-Key': 'c9cf704980msh2d93b22ba5ce90cp1bd350jsn6ae5c18d8900',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        },
    };
    return fetch(url, options).then(response => response.json());
}