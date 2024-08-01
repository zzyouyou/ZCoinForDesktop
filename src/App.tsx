import { useEffect, useState } from 'react'
import { BTCPanel } from './components/CoinDetal/BTCPanel'
import KLineChart from './components/KLineChart/KLineChart'
// import { useFetchUserInfo } from './hooks/useFetchUserInfo';

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='w-full'>

      <BTCPanel />
      {/* <KLineChart /> */}
    </div>
  )
}

export default App