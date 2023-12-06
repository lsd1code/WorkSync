import { useState } from 'react'

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  }
}

export default useInput