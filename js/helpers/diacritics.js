export const diacriticsMatch = (wordA, wordB) => {
    const map = {
        'á': 'a', 'ä': 'a',
        'é': 'e', 'ě': 'e',
        'ř': 'r', 'ŕ': 'r',
        'ť': 't',
        'ý': 'y',
        'ú': 'u', 'ů': 'u',
        'í': 'i',
        'ó': 'o', 'ô': 'o',
        'š': 's',
        'ď': 'd',
        'ľ': 'l', 'ĺ': 'l',
        'ž': 'z',
        'č': 'c',
        'ň': 'n',
        'ž': 'z'
    };

    const convertToBase = (word) => {
        return [...word.toLowerCase()].map(c => map[c] || c).join('');
    }

    return convertToBase(wordA) === convertToBase(wordB);
}

export const diacriticsContains = (set, word) => {
    return set.some((item) => {
        return diacriticsMatch(item, word);
    });
}