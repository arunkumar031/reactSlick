// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

console.log(Slider.methods)
const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div data-testid="planets" className="bg">
      <button type="button">prev</button>
      <div>
        <h1>PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem key={each.id} planet={each} />
          ))}
        </Slider>
      </div>
      <button type="button">next</button>
    </div>
  )
}

export default PlanetsSlider

/* {planetsList.map(each => (
  <PlanetItem planet={each} />
))} */
