import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./Spinner.styles.css";

export const Spinner = ({ color }) => (
  <div class="spinner">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
);

//Note: Pending color configurable
//Use styled compoennt
