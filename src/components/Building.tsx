import React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgBuilding = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 907 671.95" style={props.style} width="100%" height={props.height} {...props}>
    <Circle cx={698.89} cy={78.11} r={78.11} fill="#ff5252" />
    <Path fill={props.primarycolor} d="M133.5 131.95h641v503h-641z" />
    <Path opacity={0.1} d="M133.5 131.95h641v503h-641z" />
    <Path fill="#464353" d="M0 200.95h907v437H0z" />
    <Path fill={props.primarycolor} d="M189 79.95h530v592H189zM37 259.95h112v72H37zM37 381.95h112v72H37zM37 503.95h112v72H37z" />
    <Path fill="#464353" d="M257 137.95h112v72H257zM257 259.95h112v72H257zM257 381.95h112v72H257zM651 209.95H539v-72h112zM651 331.95H539v-72h112zM651 453.95H539v-72h112z" />
    <Path fill={props.primarycolor} d="M750 259.95h112v72H750zM750 381.95h112v72H750zM750 503.95h112v72H750z" />
    <Path fill="#464353" d="M405 479.95h98v192h-98z" />
    <Path
      opacity={0.1}
      d="M257 137.95h112v22H257zM539 137.95h112v22H539zM539 259.95h112v22H539zM539 381.95h112v22H539zM257 259.95h112v22H257zM257 381.95h112v22H257zM37 259.95h112v17H37zM37 381.95h112v17H37zM37 503.95h112v17H37zM750 259.95h112v17H750zM750 381.95h112v17H750zM750 503.95h112v17H750z"
    />
  </Svg>
);
SvgBuilding.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
