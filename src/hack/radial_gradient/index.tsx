import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { ColumnMajorTransformMatrix, NumberProp, RadialGradient as ReactNativeSvgRadialGradient, Units } from 'react-native-svg';
export interface IRadialGradientProps {
  fx?: NumberProp;
  fy?: NumberProp;
  rx?: NumberProp;
  ry?: NumberProp;
  cx?: NumberProp;
  cy?: NumberProp;
  r?: NumberProp;
  gradientUnits?: Units;
  gradientTransform?: ColumnMajorTransformMatrix | string;
  id?: string;
  xlinkHref?: string;
}

export const RadialGradient: FC<IRadialGradientProps & ViewProps> = props => {
  const { children, ...radialGradientProps } = props;
  return <ReactNativeSvgRadialGradient {...radialGradientProps}>{props.children}</ReactNativeSvgRadialGradient>;
};
