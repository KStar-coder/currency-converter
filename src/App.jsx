import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0) // default value of the amount . . . we can set it anything

  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')

  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo) // since our data will come in the form of objects (seen on the data site)

  // Swap button 
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>
      <h1 className='text-xl text-center text-orange-600 bg-yellow-200'>Currency App</h1>
    </>
  )
}

export default App
