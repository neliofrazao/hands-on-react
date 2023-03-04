import {useState} from 'react'

const useForm = (initalValues) => {
  const [inputs, setInputs] = useState(initalValues ?? {})

  const handleInputChange = (event) => {
    const name =  event.target.name
    const value =  event.target.value
    setInputs(values => ({...values, [name]: value}))
  } 

  return [inputs, setInputs, handleInputChange ]
}

 export default useForm