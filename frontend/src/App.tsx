import { useState } from 'react'
import { useAccount, useConnect } from 'wagmi'

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

function App() {
  const [prediction, setPrediction] = useState<boolean>()
  const account = useAccount()
  const { connectors, connect } = useConnect()

  return (
    <div className="container mx-auto flex flex-col items-center py-6">
      <h1 className="text-5xl font-bold">Coin Flip</h1>

      <div className="py-4 flex w-64 justify-between">
        {OPTIONS.map((option) => (
          <div key={option.value.toString()} className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="coin"
                className="radio"
                value={option.value.toString()}
                checked={prediction === option.value}
                onChange={(e) =>
                  setPrediction(JSON.parse(e.currentTarget.value))
                }
              />
              <span className="label-text">{option.label}</span>
            </label>
          </div>
        ))}
      </div>

      {account.status !== 'connected' && connectors.length > 0 && (
        <button
          className="btn btn-lg"
          onClick={() => connect({ connector: connectors[0] })}
        >
          Connect
        </button>
      )}
    </div>
  )
}

export default App
