import { useState, useCallback } from 'react'
import { useAccount, useConnect } from 'wagmi'

import useFlipCoin from './hooks/useFlipCoin'
import Modal from './components/ui/Modal'
import ResultModal from './components/ResultModal'

const OPTIONS = [
  {
    label: 'Heads',
    value: true,
  },
  {
    label: 'Tails',
    value: false,
  },
]

function hasPredicted(prediction: boolean | undefined): prediction is boolean {
  return typeof prediction !== 'undefined'
}

function App() {
  const [prediction, setPrediction] = useState<boolean>()
  const [won, setWon] = useState<boolean>()
  const [prizeAmount, setPrizeAmount] = useState<string>()
  const account = useAccount()
  const { connectors, connect } = useConnect()
  const { isLoading, flipCoin } = useFlipCoin()

  const load = useCallback(() => {
    if (!hasPredicted(prediction)) {
      return
    }
    flipCoin(prediction).then(({ won, prizeAmount }) => {
      setWon(won)
      setPrizeAmount(prizeAmount)
    })
  }, [prediction])

  const reset = useCallback(() => {
    setWon(undefined)
    setPrediction(undefined)
  }, [])

  return (
    <div className="container mx-auto flex flex-col items-center py-16">
      <h1 className="text-5xl font-bold">Coin Flip</h1>

      <ul className="my-20 py-4 grid gap-6 md:grid-cols-2">
        {OPTIONS.map((option) => (
          <li key={option.value.toString()}>
            <input
              id={`coin-${option.value.toString()}`}
              type="radio"
              name="coin"
              value={option.value.toString()}
              className="hidden peer"
              checked={prediction === option.value}
              onChange={(e) => setPrediction(JSON.parse(e.currentTarget.value))}
            />
            <label
              htmlFor={`coin-${option.value.toString()}`}
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
            >
              <div className="w-32 h-32 text-lg font-semibold flex justify-center items-center">
                {option.label}
              </div>
            </label>
          </li>
        ))}
      </ul>

      {account.status !== 'connected' && connectors.length > 0 && (
        <button
          className="btn btn-lg"
          onClick={() => connect({ connector: connectors[0] })}
        >
          Connect
        </button>
      )}

      {account.status === 'connected' && (
        <button
          className="btn btn-lg"
          onClick={load}
          disabled={!hasPredicted(prediction)}
        >
          Flip
        </button>
      )}

      <Modal visible={isLoading}>
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg" />
        </div>
      </Modal>

      <ResultModal won={won} prizeAmount={prizeAmount} onPlayAgain={reset} />
    </div>
  )
}

export default App
