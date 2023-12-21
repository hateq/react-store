import './RangeSlider.scss'
import {FC, Dispatch, SetStateAction} from 'react'
import ReactSlider from 'react-slider'

interface IRangeSliderProps {
	setMinPrice: Dispatch<SetStateAction<number | null>>
	setMaxPrice: Dispatch<SetStateAction<number | null>>
	min: number
	max: number
	minPrice: number | null
	maxPrice: number | null
}
const RangeSlider: FC<IRangeSliderProps> = ({setMinPrice, setMaxPrice, min, max, minPrice, maxPrice }) => {
  return (
    <ReactSlider
		className='horizontal-slider'
		thumbClassName='example-thumb'
		trackClassName='example-track'
		defaultValue={[min , max]}
		max={max}
		min={min}
		value={[minPrice || min, maxPrice == null ? max : maxPrice]}
		renderThumb={(props) => <div {...props}></div>}
		onChange={(value) => {
			setMinPrice(value[0])
			setMaxPrice(value[1])
		}}
		/>
  );
};
export default RangeSlider;