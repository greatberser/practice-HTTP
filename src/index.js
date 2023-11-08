function fetchHero(){
    const base_url = 'https://superhero-search.p.rapidapi.com';
    const  end_point = '/api/';
    const param = `?hero=${hero}`;
    const url = base_url + end_point + param;
    const option = {
        header:{
            'X-RapidAPI-Key': 'c9cf704980msh2d93b22ba5ce90cp1bd350jsn6ae5c18d8900',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        },
    };
    return fetch(url, option).then(response => response.json());
}

const refs = {
    selector: document.querySelector('.hero-select'),
    heroInfo: document.querySelector('.hero-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error')
};

const { selector, heroInfo, loader, error } = refs; 

