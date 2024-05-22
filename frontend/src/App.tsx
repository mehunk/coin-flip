function App() {
  return (
    <div className="container mx-auto flex flex-col items-center py-6">
      <h1 className="text-5xl font-bold">Coin Flip</h1>

      <div className="py-4 flex w-64 justify-between">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="radio" name="coin" className="radio" />
            <span className="label-text">Heads</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="radio" name="coin" className="radio" />
            <span className="label-text">Tails</span>
          </label>
        </div>
      </div>

      <button className="btn btn-lg">Connect</button>
    </div>
  )
}

export default App
