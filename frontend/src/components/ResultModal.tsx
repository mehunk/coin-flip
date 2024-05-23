import Modal from './ui/Modal'

type Props = {
  won?: boolean
  onPlayAgain: () => void
}

function ResultModal({ won, onPlayAgain }: Props) {
  const description = won
    ? 'Congratulations! You win the game!'
    : "I'm sorry! You lose the game."

  return (
    <Modal visible={typeof won !== 'undefined'}>
      <h3 className="font-bold text-lg">Result</h3>
      <div className="flex justify-center">{description}</div>
      <div className="modal-action">
        <button className="btn" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </Modal>
  )
}

export default ResultModal
