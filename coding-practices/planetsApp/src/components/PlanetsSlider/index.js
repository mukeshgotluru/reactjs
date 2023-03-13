import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  }
  const {planetsList} = props

  return (
    <>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </>
  )
}

export default PlanetsSlider
