import mena from '../../data/meno.json'
import mesta from '../../data/mesto.json'
import zvierata from '../../data/zviera.json'

const data = {
    meno: mena,
    mesto: mesta,
    zviera: zvierata
}

function* suggest(type) {
    let set = [...data[type]];
    let counter = set.length;

    while (counter--) {
        yield set.splice(Math.floor(Math.random() * (counter + 1)), 1)[0];
    }
}

export const isValid = (text, type) => {
    return text && data[type] && data[type].contains(text);
}

export const getSuggestions = (type, count) => {
    let generator = suggest(type);
    let result = [];
    
    while (count--) {
        result.push(generator.next().value);
    }
    return result;
}