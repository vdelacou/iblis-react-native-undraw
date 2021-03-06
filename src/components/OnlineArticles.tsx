import React from 'react';
import Svg, { Circle, Ellipse, Path, SvgProps } from 'react-native-svg';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgOnlineArticles = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 888.006 552.781" style={props.style} width="100%" height={props.height} {...props}>
    <Path fill="#e6e6e6" d="M615.007 108h182v332h-182z" />
    <Path d="M632.007 423h148V125h-148z" fill="#fff" />
    <Path
      fill="#e6e6e6"
      d="M688.874 188.915h43.223v4.014h-43.223zM688.874 202.8h75.335v4.014h-75.335zM688.874 216.685h75.261v4.014h-75.261zM647.805 188.974h32.111v32.111h-32.111zM688.874 257.915h43.223v4.014h-43.223zM688.874 271.8h75.335v4.014h-75.335zM688.874 285.685h75.261v4.014h-75.261zM647.805 257.974h32.111v32.111h-32.111zM688.874 326.915h43.223v4.014h-43.223zM688.874 340.8h75.335v4.014h-75.335zM688.874 354.685h75.261v4.014h-75.261zM647.805 326.974h32.111v32.111h-32.111zM107.007 108h182v332h-182z"
    />
    <Path d="M124.007 423h148V125h-148z" fill="#fff" />
    <Path
      fill="#e6e6e6"
      d="M180.874 188.915h43.223v4.014h-43.223zM180.874 202.8h75.335v4.014h-75.335zM180.874 216.685h75.261v4.014h-75.261zM139.805 188.974h32.111v32.111h-32.111zM180.874 257.915h43.223v4.014h-43.223zM180.874 271.8h75.335v4.014h-75.335zM180.874 285.685h75.261v4.014h-75.261zM139.805 257.974h32.111v32.111h-32.111zM180.874 326.915h43.223v4.014h-43.223zM180.874 340.8h75.335v4.014h-75.335zM180.874 354.685h75.261v4.014h-75.261zM139.805 326.974h32.111v32.111h-32.111z"
    />
    <Ellipse cx={444.003} cy={449} rx={444.003} ry={18} fill="#e6e6e6" />
    <Path fill={props.accentcolor} d="M328.115 0h247.783v452H328.115z" />
    <Path d="M338.823 440.5H565.19v-429H338.823z" fill="#fff" />
    <Path fill={props.primarycolor} d="M428.681 110.161h58.846v5.465h-58.846z" />
    <Path fill="#e6e6e6" d="M428.681 129.065h102.564v5.465H428.681zM428.681 147.969h102.463v5.465H428.681z" />
    <Path fill={props.primarycolor} d="M372.769 110.242h43.718v43.718h-43.718zM428.681 204.101h58.846v5.465h-58.846z" />
    <Path fill="#e6e6e6" d="M428.681 223.005h102.564v5.465H428.681zM428.681 241.909h102.463v5.465H428.681z" />
    <Path fill={props.primarycolor} d="M372.769 204.182h43.718V247.9h-43.718zM428.681 298.04h58.846v5.465h-58.846z" />
    <Path fill="#e6e6e6" d="M428.681 316.945h102.564v5.465H428.681zM428.681 335.849h102.463v5.465H428.681z" />
    <Path fill={props.primarycolor} d="M372.769 298.121h43.718v43.718h-43.718z" />
    <Path d="M361.507 320.5l-3 13s1 30-7 27-6-29-6-29l7-13z" fill="#ffb8b8" />
    <Circle cx={317.007} cy={158} r={20} fill="#ffb8b8" />
    <Path d="M301.507 163.5l-2 29 25 3s0-24 2-27-25-5-25-5z" fill="#ffb8b8" />
    <Path d="M357.007 201l-32.383-13.713s-15.469-11.937-24.543-3.112L296.007 190s-36 14-36 25l14 55s-8 31 4 33l65 6s9-11 1-25l3-33z" fill="#575a89" />
    <Path d="M335.007 202l22-1s7 2 12 21 6 50 6 50l-12 56-15-2 6-54-10-36zM272.007 208l-10.847 3.378S252.007 225 252.007 232s-4 60-4 60l26 43 8-21-16-27 13-33z" fill="#575a89" />
    <Path d="M346.007 307l-71.897-6.326S267.007 346 268.007 364s2 46 2 46l-8 122 31-4 4-101 13-55 15 70 10 90 27-3-9-109s8-98-7-113z" fill={props.haircolor} />
    <Path
      d="M356.007 524l9 3s19-5 14 8-19 11-19 11-17 13-24 3l4-21zM283.007 524l9 3s19-5 14 8-19 11-19 11-17 13-24 3l4-21zM301.507 175.5s-21-15-10-33c7.631-12.487 23.444-11.499 32.414-9.722a15.154 15.154 0 0111.086 8.722c1.5 3.5 1.5 7-4.5 7-12 0-6 9-6 9s-8 2-6 9-17 9-17 9z"
      fill={props.haircolor}
    />
  </Svg>
);
SvgOnlineArticles.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
