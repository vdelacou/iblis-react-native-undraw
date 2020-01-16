import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { ColumnMajorTransformMatrix, LinearGradient as ReactNativeSvgLinearGradient, NumberProp, Units } from 'react-native-svg';
export interface ILinearGradientProps {
  x1?: NumberProp;
  x2?: NumberProp;
  y1?: NumberProp;
  y2?: NumberProp;
  gradientUnits?: Units;
  gradientTransform?: ColumnMajorTransformMatrix | string;
  id?: string;
  xlinkHref?: string;
}

export const LinearGradient: FC<ILinearGradientProps & ViewProps> = props => {
  const { children, ...linearGradientProps } = props;
  return <ReactNativeSvgLinearGradient {...linearGradientProps}>{props.children}</ReactNativeSvgLinearGradient>;
};
