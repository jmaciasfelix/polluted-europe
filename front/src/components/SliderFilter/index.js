import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RangeInput = styled.input`
  -webkit-appearance: none;
  vertical-align: middle;
  outline: none;
  border: none;
  padding: 0;
  background: none;
  width: 100%;

  &::-webkit-slider-runnable-track {
    background-color: #2c7cdc;
    height: 6px;
    border-radius: 3px;
    border: 1px solid transparent;
  }

  &[disabled]::-webkit-slider-runnable-track {
    border: 1px solid #2c7cdc;
    background-color: transparent;
    opacity: 0.4;
  }

  &::-moz-range-track {
    background-color: #2c7cdc;
    height: 6px;
    border-radius: 3px;
    border: none;
  }

  &::-ms-track {
    color: transparent;
    border: none;
    background: none;
    height: 6px;
  }

  &::-ms-fill-lower {
    background-color: #2c7cdc;
    border-radius: 3px;
  }

  &::-ms-fill-upper {
    background-color: #2c7cdc;
    border-radius: 3px;
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-moz-range-thumb {
    border-radius: 20px;
    height: 18px;
    width: 18px;
    border: none;
    background: none;
    background-color: var(--text-title-color);
  }

  &:active::-moz-range-thumb {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border-radius: 100%;
    background-color: var(--text-title-color);
    height: 18px;
    width: 18px;
    margin-top: -7px;
  }

  &[disabled]::-webkit-slider-thumb {
    background-color: transparent;
    border: 1px solid #2c7cdc;
  }

  &:active::-webkit-slider-thumb {
    outline: none;
  }

  &::-ms-thumb {
    border-radius: 100%;
    background-color: var(--text-title-color);
    height: 18px;
    width: 18px;
    border: none;
  }

  &:active::-ms-thumb {
    border: none;
  }
`;

const Container = styled.div`
  width: 100%;
`;

export const SliderFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <Container>
      <RangeInput
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={(e) => {
          setFilter(parseInt(e.target.value, 10));
        }}
      />
    </Container>
  );
};

SliderFilter.propTypes = {};
