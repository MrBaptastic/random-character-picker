import { useState } from 'react'

const ROR2 = [
  { image: '1/18/Commando2.png' ,name: 'Commando'},
  { image: '0/04/Huntress%28RoR2%29.png' ,name: 'Huntress'},
  { image: '7/79/Bandit%28RoR2%29.png' ,name: 'Bandit'},
  { image: '1/13/MUL-T%28RoR2%29.png' ,name: 'MUL-T'},
  { image: 'e/e2/Engineer%28RoR2%29.png' ,name: 'Engineer'},
  { image: '9/98/Artificer.png' ,name: 'Artificer'},
  { image: '8/81/Mercenary%28RoR2%29.png' ,name: 'Mercenary'},
  { image: '5/5f/Rex.png' ,name: 'Rex'},
  { image: 'a/aa/Screenshot0011234.jpg' ,name: 'Loader'},
  { image: '4/4c/Acrid%28RoR2%29.png' ,name: 'Acrid'},
  { image: 'a/a9/Captain.png' ,name: 'Captain'}
]

export default function Home() {
  const [winner, setWinner] = useState()
  const [selectedList, setSelectedList] = useState(ROR2)

  const onClick = () => {
    setWinner(selectedList[selectedList.length * Math.random() | 0])
  }

  const onToggle = (char, selected) => {
    if(selected) {
      const newList = selectedList.filter((item) => item.name !== char.name);
      setSelectedList(newList);
    } else {
      setSelectedList([...selectedList, {...char}]);
    }
  }

  return (
    <>
      {ROR2.map((char) => {
        const selected = selectedList?.find((obj) => obj.name === char.name)
        return <button key={char.name} className={`p-2 m-1 ${selected && 'border-2 border-blue-500'}`} onClick={() => onToggle(char, !!selected)}><img width="72" height="72"  src={`https://static.wikia.nocookie.net/risk-of-rain/images/${char.image}`} alt="Picture of the author"  /></button>
      })}
      <br />
      <button onClick={onClick} className={'border-2 p-2'}>Random Character</button>
      {winner && <><div>Winner: {winner.name}</div><img width="72" height="72"  src={`https://static.wikia.nocookie.net/risk-of-rain/images/${winner.image}`} alt="Picture of the author"  /></>}
    </>
  )
}
