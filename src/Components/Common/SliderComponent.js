import React from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

export default function SliderComponent({
  defaultValue,
  min,
  max,
  steps,
  onChange,
  value,
  label,
  unit,
  amount
}) {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h5'>{unit} {amount}</Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={steps}
        onChange={onChange}
        value={value}
        aria-label='Default'
        valueLabelDisplay='auto'
        marks
      />
    </Stack>
  )
}
