import React, { useState, useCallback, ChangeEvent } from 'react';
import { debounce, throttle } from 'lodash';

interface SliderProps {
  onValueChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ onValueChange }) => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const debouncedOnChange = useCallback(
    debounce((value: number) => {
      onValueChange(value);
    }, 300),
    [onValueChange]
  );

  const throttledOnChange = useCallback(
    throttle((value: number) => {
      onValueChange(value);
    }, 300),
    [onValueChange]
  );

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setSliderValue(value);
    debouncedOnChange(value);
    throttledOnChange(value);
  };

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Current Value: {sliderValue}</p>
    </div>
  );
};

export default Slider;
