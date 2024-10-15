import { Name } from "../global/type";

export const nameFormatting = (name: string) : Name => {
    const wordName = name.split(' ');
    let lastName = ''
    wordName.forEach((word, index) => {
        if (index !== 0) {
            lastName += `${word} `
        }
    })
    return {
        first: wordName[0],
        last: lastName,
        title: ' '
    }
}