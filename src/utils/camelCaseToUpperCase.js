export default function camelCaseToUpperCase(text) {
    const capitals = RegExp('[A-Z]', 'g')
    const capitalsArr = text.match(capitals)
    const textArr = text.split(capitals)

    for(let index = 0; index < textArr.length; index++) {
        if(index > 0) {
            textArr[index] = capitalsArr[index - 1] + textArr[index]

            continue
        }

        textArr[index] = textArr[index].replace( /^./, textArr[index][0].toUpperCase() )
    }

    return textArr.join(' ')
}