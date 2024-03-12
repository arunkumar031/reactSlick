// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planet} = props

  return (
    <div className="item">
      <img src={planet.imageUrl} alt={`planet ${planet.name}`} />
      <h1>{planet.name}</h1>
      <p>{planet.description}</p>
    </div>
  )
}

export default PlanetItem
