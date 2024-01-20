import React, { useState } from 'react'

const useToggle = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue);

  const toggle = ()=>{
    setState((prev) => !prev);
  }

  return [state, toggle] as const
}

export default useToggle;
