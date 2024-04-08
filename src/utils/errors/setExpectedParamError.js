export function setExpectedParamError(prop) {
    throw new Error(`'${prop}' parameter is expected`)
}