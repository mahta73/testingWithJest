const googleDataBase = [
    'cats.com',
    'souprecepies.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritescats.com'
];

const googleSearch = (searchInput) => {
    const matches = googleDataBase.filter(website => {
        return website.includes(searchInput);
    });

    return matches.length > 3 ? matches.slice(0, 3) : matches
}

