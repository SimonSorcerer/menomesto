export const rollLetter = () => {
    return {
        type: 'ROLL_LETTER'
    }
}

export const write = (text, type) => {
    return {
        type: 'WRITE',
        set: type,
        text
    }
}

export const suggest = (type) => {
    return {
        type: 'SUGGEST',
        set: type
    }
}