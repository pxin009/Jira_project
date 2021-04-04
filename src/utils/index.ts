import {useEffect, useState} from "react"
export const isFalsy = (value:any) => {
  return value === 0 ? false : !value
}

export const cleanObject = (object:object) => {
  const result = {...object}
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key]
    if(isFalsy(value)) {
      //@ts-ignore
      delete result[key]
    }
  })
  return result
}

export const useMount = (callBack:()=>void) => {
  useEffect(() => {
    callBack()
  }, [])
}

export const useDebounce = <V>(value:V, delay?:number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);
  return () => {clearTimeout(timeout)}
  }
  ,[value,delay])
  return debouncedValue
}