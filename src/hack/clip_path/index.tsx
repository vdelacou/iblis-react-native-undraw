import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { ClipPath as ReactNativeSvgClipPath } from 'react-native-svg';
export interface IClipPathProps {
  id?: string;
  transform?: string;
}

export const ClipPath: FC<IClipPathProps & ViewProps> = props => {
  const { children, ...clipPathProps } = props;
  return <ReactNativeSvgClipPath {...clipPathProps}>{props.children}</ReactNativeSvgClipPath>;
};
