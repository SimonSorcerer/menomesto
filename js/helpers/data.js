import mena from '../../data/meno.json'
import mesta from '../../data/mesto.json'
import zvierata from '../../data/zviera.json'
import { diacriticsContains, diacriticsMatch } from './diacritics'

const data = {
    meno: mena,
    mesto: mesta,
    zviera: zvierata
};

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const filterSetOnStartingLetter = (set, startingLetter) => {
    return set.filter(x => diacriticsMatch(x[0], startingLetter));
}

function* suggest(data, startingLetter) {
    let set = filterSetOnStartingLetter(data, startingLetter);
    let counter = set.length;

    while (counter--) {
        yield set.splice(Math.floor(Math.random() * (counter + 1)), 1)[0];
    }
}

export const firstLettersMatch = (wordA, wordB) => {
    return diacriticsMatch(wordA[0], wordB[0]);
}

export const hasMatch = (text, type, startingLetter) => {
    return text
        && data[type]
        && diacriticsContains(data[type], text)
        && firstLettersMatch(text, startingLetter);
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
    getAvailableLetters();
    return result;
}

export const types = [...Object.keys(data)];

const containsLetter = (set, letter) => {
    return set.some((word) => {
        return firstLettersMatch(word, letter);
    });
}

const getAvailableLetters = () => {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return letters.filter((letter) => {
        return types.every((type) => {
            return containsLetter(data[type], letter);
        });
    });
}

export const letters = getAvailableLetters();