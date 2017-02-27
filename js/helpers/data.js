import mena from '../../data/meno.json'
import mesta from '../../data/mesto.json'
import zvierata from '../../data/zviera.json'

const data = {
    meno: mena,
    mesto: mesta,
    zviera: zvierata
}

const filterSetOnStartingLetter = (set, startingLetter) => {
    return set.filter(x => x.toLowerCase().startsWith(startingLetter.toLowerCase()));
}

function* suggest(data, startingLetter) {
    let set = filterSetOnStartingLetter(data, startingLetter);
    let counter = set.length;

    while (counter--) {
        yield set.splice(Math.floor(Math.random() * (counter + 1)), 1)[0];
    }
}

export const isValid = (text, type) => {
    return text && data[type] && data[type].includes(text);
}

export const getSuggestions = (type, count = 5, letter = 'A') => {
    let generator = suggest(data[type], letter);
    let result = [];
    
    while (count--) {
        result.push(generator.next().value);
    }
    return result;
}