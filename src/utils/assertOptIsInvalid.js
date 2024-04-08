import {setExpectedParamError} from './errors/setExpectedParamError'

export function assertOptIsInvalid(option, availbleOptions, error) {
  console.log(option)
  console.log(availbleOptions)
  console.log(error)
  console.log("=====h")
  if (!option) setExpectedParamError('option')
  if (!availbleOptions) setExpectedParamError('availbleOptions')
  if (!error) setExpectedParamError('error')
  if (!availbleOptions.has(option)) {
    error()
  }
}