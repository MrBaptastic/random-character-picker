import { useState } from 'react'

export default function Home() {
  const [winner, setWinner] = useState()

  const ROR2 = ['Commando', 'Huntress', 'Bandit', 'MUL-T', 'Engineer', 'Artificer', 'Mercenary', 'Rex', 'Loader', 'Acrid', 'Captain']

  const onClick = () => {
    setWinner(ROR2[ROR2.length * Math.random() | 0])
  }

  return (
    <>
      <button onClick={onClick}>Random Character</button>
      {winner && <div>Winner: {winner}</div>}
    </>
  )
}
