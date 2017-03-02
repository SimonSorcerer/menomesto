import mena from '../../data/meno.json'
import mesta from '../../data/mesto.json'
import zvierata from '../../data/zviera.json'

const data = {
    meno: mena,
    mesto: mesta,
    zviera: zvierata
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const filterSetOnStartingLetter = (set, startingLetter) => {
    return set.filter(x => x.startsWith(startingLetter.toLowerCase()));
}

function* suggest(data, startingLetter) {
    let set = filterSetOnStartingLetter(data, startingLetter);
    let counter = set.length;

    while (counter--) {
        yield set.splice(Math.floor(Math.random() * (counter + 1)), 1)[0];
    }
}

export const hasMatch = (text, type, startingLetter) => {
    let transformedText = text.toLowerCase();

    return text && data[type] && data[type].includes(transformedText) && transformedText.startsWith(startingLetter.toLowerCase());
}

export const getSuggestions = (type, count = 5, letter = 'A') => {
    let generator = suggest(data[type], letter);
    let result = [];
    
    while (count--) {
        let suggestion = generator.next().value
        if (suggestion) {
            result.push(capitalize(suggestion));
        }
    }
    return result;
}

export const types = [...Object.keys(data)];