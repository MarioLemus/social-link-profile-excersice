export function setInvalidOptionError(option) {
    throw new Error(`The given '${option}' option is not valid`)
}