import React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgFont = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 984 393.195" style={props.style} width="100%" height={props.height} {...props}>
    <Path
      d="M825.705 61.97h61.642V31.32c0-.274-.004-.543-.01-.828A30.876 30.876 0 00856.529 0a30.375 30.375 0 00-21.789 9.17 30.944 30.944 0 00-3.03 3.578 31.39 31.39 0 00-6.004 18.573z"
      fill={props.haircolor}
    />
    <Circle cx={538} cy={366.344} r={25} fill={props.accentcolor} />
    <Circle cx={626} cy={366.344} r={25} fill={props.accentcolor} />
    <Circle cx={714} cy={366.344} r={25} fill={props.accentcolor} />
    <Path
      d="M209.974 331.945h-121.8l-25.2 58.45h-45.5l112.7-249.2h36.75l113.05 249.2h-45.15zm-15.05-35l-45.85-106.75-45.85 106.75zM472.824 213.645v176.75h-43.05v-28.35a56.802 56.802 0 01-23.1 22.926q-15.052 8.219-34.299 8.224-23.1 0-40.95-11.199-17.85-11.197-27.65-31.85-9.803-20.648-9.8-47.95 0-27.3 9.974-48.475 9.976-21.173 27.825-32.9 17.851-11.722 40.601-11.725 19.244 0 34.3 8.224a56.831 56.831 0 0123.1 22.926v-26.6zm-54.949 130.2q11.895-15.043 11.9-42.349 0-27.999-11.9-43.05-11.903-15.045-33.95-15.05-21.706 0-33.776 15.575-12.074 15.577-12.075 43.224 0 27.3 12.075 42 12.075 14.701 34.125 14.7 21.698 0 33.601-15.05z"
      fill={props.primarycolor}
    />
    <Path fill={props.accentcolor} d="M0 389.344h984v2H0z" />
    <Path d="M899.615 183.676c2.386 2.513 6.022 33.414 16.785 28.718 8.694-9.818-5.92-29.32-7.408-33.461z" fill="#ffb8b8" />
    <Path fill={props.primarycolor} d="M886.038 143.797l26.457 35.477-12.627 9.621-18.641-26.458 4.811-18.64z" />
    <Path
      d="M844.548 149.209s-18.039 34.274-3.608 54.117 44.497 63.136 44.497 63.136C889.8 303.614 898.114 339.013 921 369l15.148-4.153L914.3 258.044s-12.026-62.535-25.856-78.169L886 150z"
      fill={props.haircolor}
    />
    <Path d="M843.947 199.718l-12.026 59.529C821.663 265.688 800.338 329.785 792 352l16.268 6.05c17.935-28.327 59.262-102.697 68.75-134.28z" fill={props.haircolor} />
    <Path d="M884.835 28.949c-.472 27.664-41.622 27.66-42.09-.001.472-27.663 41.622-27.66 42.09 0z" fill="#ffb8b8" />
    <Path d="M869.803 43.38c-10.629 15.937-10.344 21.458 2.405 36.078l-19.242-13.83s-13.83 0-10.823-6.614 9.02-20.444 9.02-20.444z" fill="#ffb8b8" />
    <Path
      d="M858.98 66.83s-13.83-10.221-20.445-3.607c-6.574 12.59.04 67.75 2.403 72.156 3.009 4.81 3.61.601 3.009 6.013s-3.007 9.62-2.405 10.222 46.901 5.412 46.901 5.412-3.608-16.837-2.405-23.451-1.203-13.229-1.203-15.634 3.608-12.627 0-20.444-17.124-23.895-17.124-23.895l-.915 1.046z"
      fill={props.primarycolor}
    />
    <Path d="M824.104 196.11c1.328 3.742-9.247 37.79 4.208 37.883 13.673-6.233 7.45-33.456 7.818-38.484z" fill="#ffb8b8" />
    <Path d="M840.94 63.824s-15.633.602-15.633 19.242-5.412 51.712-5.412 51.712v64.339h20.444l-3.006-60.732L849.96 98.7s16.235-25.255-9.02-34.876z" fill={props.primarycolor} />
    <Path
      d="M962.664 383.358a7.868 7.868 0 00-3.521-7.717l-22.583-11.083-17.027 2.15-4.021 14.415a7.672 7.672 0 006.711 8.877l31.771.07a7.868 7.868 0 008.67-6.712zM814.994 388.245a7.868 7.868 0 002.967-7.946l-8.132-23.806-13.56-10.52-13.036 7.35a7.672 7.672 0 00-1.531 11.023l22.416 22.515a7.868 7.868 0 0010.876 1.384zM839.787 12.22l5.616 17.868 48.556-.863a30.016 30.016 0 00-54.172-17.005z"
      fill={props.haircolor}
    />
  </Svg>
);
SvgFont.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
