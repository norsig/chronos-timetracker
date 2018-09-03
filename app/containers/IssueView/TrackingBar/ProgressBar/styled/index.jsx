/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import {
  Flex,
} from 'components';

export const ProgressBarContainer = styled(Flex).attrs({
  alignCenter: true,
})`
  position: absolute;
  right: 20px;
  bottom: 6px
  cursor: pointer;
`;

export const CircleContainer = styled.svg`
  // & > text,
  // &:hover > rect {
  //   display: none;
  // }
  // &:hover > text {
  //   display: block;
  // }
`;

export const CircleBackground = styled.circle`
  fill: #172B4D;
  stroke: white;
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: #FFAB00;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const CircleText = styled.text`
  fill: rgba(225,225,225,.9);
  font-size: 12px;
  letter-spacing: 0.5px;
  display: none;
`;

export const CircleStop = styled.rect`
  fill: white;
`;
