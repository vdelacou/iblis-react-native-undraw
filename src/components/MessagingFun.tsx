import React from 'react';
import Svg, { Circle, Defs, Ellipse, Path, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { RadialGradient } from '../hack/radial_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgMessagingFun = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 1077.75 725.24" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <RadialGradient id="MessagingFun_svg__b" cx={625.65} cy={270.91} r={30.01} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#fff" />
        <Stop offset={1} />
      </RadialGradient>
      <LinearGradient id="MessagingFun_svg__a" x1={564.5} y1={810} x2={564.5} y2={126} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
    </Defs>
    <Path
      d="M586.55 160.97c-64.72-2.25-126.36-23.14-185.22-46s-117.17-48.19-180.34-60.3c-40.63-7.79-87.09-8.89-119.83 12.89-31.5 21-41.68 57.15-47.15 90.73-4.12 25.26-6.54 51.84 4.74 75.49 7.83 16.42 21.74 30.22 31.36 45.95 33.47 54.72 9.81 122.2-26.46 175.63-17 25.07-36.74 49-49.87 75.66s-19.2 57.25-7.71 84.47c11.38 27 38.51 47.24 67.9 61.49 59.69 28.95 130 37.23 198.61 41.92 151.82 10.39 304.46 5.89 456.69 1.39 56.33-1.67 112.92-3.36 168.34-12.07 30.77-4.84 62.55-12.51 84.89-31.05 28.37-23.55 35.37-63.38 16.37-92.88-31.88-49.49-120-61.78-142.31-114.9-12.27-29.23.33-61.79 18.16-88.91 38.23-58.16 102.33-109.19 105.7-175.67 2.32-45.67-28.49-91.39-76.13-113-49.94-22.64-119.18-19.8-156 17.69-37.93 38.6-104.6 53.45-161.74 51.47z"
      fill={props.primarycolor}
      opacity={0.1}
    />
    <Circle cx={357.87} cy={21.63} r={21.63} fill={props.primarycolor} opacity={0.1} />
    <Circle cx={686.97} cy={51.49} r={21.63} fill={props.primarycolor} opacity={0.1} />
    <Circle cx={964.12} cy={379.93} r={21.63} fill={props.primarycolor} opacity={0.1} />
    <Circle cx={1041.49} cy={283.5} r={36.25} fill={props.primarycolor} opacity={0.1} />
    <Circle cx={993.5} cy={459.42} r={36.25} fill={props.primarycolor} opacity={0.1} />
    <Circle cx={48.79} cy={351.07} r={36.25} fill={props.primarycolor} opacity={0.1} />
    <Path
      d="M789.9 786.2a35.9 35.9 0 01-2-5.06c-1-4 .25-8.25.32-12.41a44.12 44.12 0 00-1-8.56q-2.94-16.18-5.86-32.39c-.9-5-1.81-10-2.24-15s-.38-10.33-.46-15.5c-.26-16.77-3.2-33.45-3.86-50.2-.36-8.72-1-17.42-1.74-26.12-1.21-14.93-2.53-29.89-5.14-44.64-2.08-11.72-8-22.64-8.07-34.53l-.18-18.51c-.05-5.28-.14-10.77-2.46-15.53-2-4.2-5.62-7.41-9.16-10.45q-15.75-13.6-32.6-25.86c3.43.36 7.06.68 10.2-.75s5.44-5.33 3.91-8.43c-1-1.95-3.11-3-5.19-3.72a47.61 47.61 0 00-12.42-2 45.33 45.33 0 00.92-4.86c2.19-17.21-6.43-34.09-6.41-51.44 0-17.85 9.06-34.26 14.3-51.32a124.11 124.11 0 00-3.64-82.49c-5.66-13.89-13.9-26.92-16.66-41.65-2.16-11.54-.82-23.49-2.76-35.06-5-29.44-31.21-52.08-60-59.89-22.27-6-44.91-4.13-67.3 0-19.24 3.56-36.81-4.3-56-1.78-7.54 1-15.38 3.45-20.23 9.3-2.81 3.38-4.38 7.6-6.75 11.31-8.56 13.41-25.59 17.89-39.72 25.21-21.48 11.13-38.59 31.93-41.79 55.89-3 22.2 5.76 44.23 7.09 66.59 1.69 28.55-8.67 56.24-17.45 83.46-2.45 7.6-4.81 15.43-4.37 23.4.29 5.45 1.9 10.74 3.61 15.93 2.78 8.4 5.91 16.73 9.46 24.86a81.64 81.64 0 01-20.74 5.43c-7.28.82-15 .53-21.34 4.23a25.32 25.32 0 00-7.42 7.09 39 39 0 00-6.75 29.36c-2.77 1.4-4.06 4.7-4.23 7.79s.55 6.17.66 9.26c.22 5.85-1.68 11.52-3.23 17.16a146 146 0 00-3.81 58.23c4.28 31.16 5.12 62.1 6.47 93.54.9 20.6-.79 41.41 2.62 61.75 1.14 6.8 3.17 14 8.6 18.29a34.24 34.24 0 013.86 3c3 3.14 3.12 8 4.13 12.2 2.83 11.76 15.05 20.46 27.08 19.32l.15.1c-2.25 6.54-4.44 12.83-6.67 19.25h342.66c-.2-.8-.42-1.61-.59-2.41a37.19 37.19 0 01-.23-10.22c2.86 3.35 2.37 8.27 3.14 12.63h64.3c.27-8.12.09-16.36-3.01-23.8z"
      transform="translate(-61.13 -87.38)"
      fill="url(#MessagingFun_svg__a)"
    />
    <Path
      d="M454.95 44.62c-7.48 1-15.26 3.43-20.09 9.24-2.79 3.36-4.34 7.55-6.69 11.23-8.5 13.33-25.41 17.78-39.44 25.05-21.32 11.06-38.3 31.72-41.48 55.53-2.95 22.06 5.72 43.94 7 66.16 1.68 28.37-8.61 55.88-17.33 82.93-2.43 7.54-4.77 15.32-4.34 23.24.3 5.42 1.89 10.67 3.59 15.83 8 24.24 18.86 47.87 35 67.65s38 35.58 62.8 41.43c11.32 2.67 23 3.25 34.63 3.68q26.7 1 53.41 1c9.78 0 19.62-.11 29.22-2 20.37-3.94 38.34-15.48 55.74-26.78 20.05-13 42-29 45.06-52.68 2.18-17.1-6.38-33.87-6.37-51.11 0-17.73 9-34 14.21-51a123.49 123.49 0 00-3.62-82c-5.61-13.79-13.8-26.74-16.54-41.38-2.14-11.46-.81-23.33-2.74-34.83-4.91-29.25-31-51.74-59.6-59.5-22.11-6-44.59-4.1-66.81 0-19.07 3.61-36.51-4.19-55.61-1.69z"
      fill={props.accentcolor}
    />
    <Path
      d="M461.01 289.76c4 18.41 1.35 38.55-9 54.29-5.13 7.82-12 14.37-19.31 20.18a123.86 123.86 0 01-38.07 21 76.36 76.36 0 0029.28 14.25c8.16 2 16.58 2.57 25 3a708.47 708.47 0 00126.34-4.56c14-1.77 28.6-4.21 39.93-12.65a5.49 5.49 0 002.23-2.64c.81-2.77-2.49-4.87-5.22-5.8-13.51-4.62-28.06-7.28-39.74-15.48-17.9-12.55-25.36-35.6-26.95-57.4s1.53-43.78-.6-65.53q-43.32-.66-86.6 2.51c-3.21.24-17.76-.56-19.48 2.22-1.94 3.15 6.13 10.79 8.13 13.82a96.45 96.45 0 0114.06 32.79z"
      fill="#fbbebe"
    />
    <Circle cx={501.01} cy={191.77} r={98.65} opacity={0.1} />
    <Circle cx={501.01} cy={188.28} r={98.65} fill="#fbbebe" />
    <Path fill={props.primarycolor} d="M431.87 256.81h17v189.45h-17z" />
    <Path
      d="M639.49 551.41c-8.07 33.05-13.13 67.23-9.72 101.08 2.26 22.41 10.13 46.81 10.54 69.64H395.73c-.06-12.33-.11-25.1-.17-37.86v-7-9.1c-.05-9.24-.09-18.38-.13-27.25-.07-16-.15-32-1.69-48-2.73-28.34-10-56.08-19.55-82.93-.69-2-1.4-3.92-2.12-5.88l-.24-.64c-.72-2-1.47-4-2.22-6-11.9-31.62-25.5-64.45-19-97.33a84.2 84.2 0 0141.14-56.42c6.48-3.6 13.62-6.35 21-6.47 12.73-.2 24.15 7.27 34.75 14.33 5 3.36 10.15 6.71 15.34 9.91 12.4 7.67 25.29 14.5 39.2 18.73 19.72 6 42 6.24 60.08-3.73a67.26 67.26 0 0010-6.87 113.76 113.76 0 0016.5-17.33c4.78 9.32 15.2 13.25 23.83 19.18 12.13 8.35 20.62 21.21 26 34.94s7.78 28.39 9.83 43c2 14.42 3.71 29 2.88 43.51-1.16 19.9-6.95 39.16-11.67 58.49z"
      fill={props.accentcolor}
    />
    <Path
      d="M492.51 722.13H325.15c2.21-6.38 4.39-12.62 6.62-19.12a.36.36 0 000-.09h-.2c-12 1.13-24.08-7.52-26.89-19.2-1-4.21-1.09-9-4.1-12.11a33.56 33.56 0 00-3.83-3c-5.4-4.24-7.41-11.41-8.54-18.17-3.39-20.21-1.71-40.88-2.6-61.36-1.34-31.22-2.17-62-6.43-92.93a145 145 0 013.79-57.85c1.53-5.6 3.43-11.24 3.21-17-.12-3.07-.82-6.13-.66-9.2s1.45-6.35 4.19-7.74a38.77 38.77 0 016.7-29.14 25.22 25.22 0 017.37-7c6.26-3.68 14-3.39 21.18-4.21 33.68-3.81 60.38-33.31 94.11-36.6 7.58-.74 15.21-.1 22.79.54 12.43 1 17 16.76 19.84 28.89.38 1.6.73 3.2 1.07 4.8 6.32 30.13 5.16 61.38 5.15 92.23a78.56 78.56 0 002.87 21c5.11 18.6 5.64 38.09 6.56 57.35a1303.36 1303.36 0 0013.56 134.6c1.28 8.37 2.66 16.74 3.1 25.19a153.47 153.47 0 01-1.5 30.12z"
      fill="#f86d70"
    />
    <Path
      d="M456.87 478.12a96 96 0 019.72 13.15c1.34 2.21 2.44 5.4.48 7.09a5.83 5.83 0 01-3.61 1l-23.52 1c-3.55.15-7.22.29-10.55-1-4.64-1.74-7.91-5.86-10.92-9.79l-10.43-13.59c-2.75-3.59-5.57-7.33-6.52-11.75s.59-9.71 4.67-11.67c3.54-1.7 7.74-.46 11.46.8 7.07 2.39 15.48 4 21.74 8.09 6.53 4.29 12.42 10.83 17.48 16.67z"
      fill="#f86d70"
    />
    <Path
      d="M456.87 478.12a96 96 0 019.72 13.15c1.34 2.21 2.44 5.4.48 7.09a5.83 5.83 0 01-3.61 1l-23.52 1c-3.55.15-7.22.29-10.55-1-4.64-1.74-7.91-5.86-10.92-9.79l-10.43-13.59c-2.75-3.59-5.57-7.33-6.52-11.75s.59-9.71 4.67-11.67c3.54-1.7 7.74-.46 11.46.8 7.07 2.39 15.48 4 21.74 8.09 6.53 4.29 12.42 10.83 17.48 16.67z"
      opacity={0.1}
    />
    <Path
      d="M443.52 479.68a335.11 335.11 0 0111.77-45.18c2.43-7.2 5.11-14.4 5.91-22 .62-5.89.07-11.86.6-17.76.46-5.1 1.72-10.09 2.46-15.15a76 76 0 00-1.82-30.8c-2.15-8-.09-17.67-5.21-24.15-2.08-2.63-4.85-4.63-7-7.2s-3.7-6.07-2.64-9.25a57.9 57.9 0 0022.18.71 14.5 14.5 0 006.17-2.15 5.88 5.88 0 002.63-5.65c-.43-2.17-2.37-3.68-4.24-4.85a51.92 51.92 0 00-44.14-4.92 2.57 2.57 0 011.1-3.14 9.71 9.71 0 013.45-1.11 22.94 22.94 0 0016.43-14.25 4.76 4.76 0 00.32-3.14c-.84-2.45-4.32-2.31-6.84-1.69l-13.58 3.34a31.49 31.49 0 00-7.61 2.58c-3 1.64-5.45 4.23-7.8 6.77-7.12 7.71-14.4 15.65-18.32 25.38-1.77 4.41-2.81 9.08-4.66 13.45s-4.69 8.57-8.93 10.69c-4.46 2.22-6.55 7.36-5.82 12.28s3.45 9.3 6.2 13.45a166.41 166.41 0 0017.09 22.26c4.25 4.5 9 8.76 11.7 14.32 1.93 3.93 2.75 8.31 4.45 12.34a25.64 25.64 0 012.17 5.85 16 16 0 01-.08 4.42c-2.85 22.17-19.29 40.24-25.44 61.74a7.87 7.87 0 00-.43 3.14c.27 2 2 3.54 3.6 4.77 11.95 9 26.55 13.69 40.84 18.19 2.63-7.26 4.07-15.67 5.49-23.29z"
      opacity={0.1}
    />
    <Path
      d="M441.52 478.68a335.11 335.11 0 0111.77-45.18c2.43-7.2 5.11-14.4 5.91-22 .62-5.89.07-11.86.6-17.76.46-5.1 1.72-10.09 2.46-15.15a76 76 0 00-1.82-30.8c-2.15-8-.09-17.67-5.21-24.15-2.08-2.63-4.85-4.63-7-7.2s-3.7-6.07-2.64-9.25a57.9 57.9 0 0022.18.71 14.5 14.5 0 006.17-2.15 5.88 5.88 0 002.63-5.65c-.43-2.17-2.37-3.68-4.24-4.85a51.92 51.92 0 00-44.14-4.92 2.57 2.57 0 011.1-3.14 9.71 9.71 0 013.45-1.11 22.94 22.94 0 0016.43-14.25 4.76 4.76 0 00.32-3.14c-.84-2.45-4.32-2.31-6.84-1.69l-13.58 3.34a31.49 31.49 0 00-7.61 2.58c-3 1.64-5.45 4.23-7.8 6.77-7.12 7.71-14.4 15.65-18.32 25.38-1.77 4.41-2.81 9.08-4.66 13.45s-4.69 8.57-8.93 10.69c-4.46 2.22-6.55 7.36-5.82 12.28s3.45 9.3 6.2 13.45a166.41 166.41 0 0017.09 22.26c4.25 4.5 9 8.76 11.7 14.32 1.93 3.93 2.75 8.31 4.45 12.34a25.64 25.64 0 012.17 5.85 16 16 0 01-.08 4.42c-2.85 22.17-19.29 40.24-25.44 61.74a7.87 7.87 0 00-.43 3.14c.27 2 2 3.54 3.6 4.77 11.95 9 26.55 13.69 40.84 18.19 2.63-7.26 4.07-15.67 5.49-23.29z"
      fill="#fbbebe"
    />
    <Path
      d="M450.56 473.09a1.9 1.9 0 011 2.83 146.25 146.25 0 01-12.89 28.34q-15.87-8.76-31.06-18.73c-2.41-1.58-4.91-3.3-6.23-5.87-14.76-28.78 39.29-12.32 49.18-6.57z"
      fill={props.accentcolor}
    />
    <Path
      d="M391.03 487.04c-3.47 4.67-7.52 8.89-11 13.58-6.2 8.41-10.32 18.13-15.19 27.38a186.12 186.12 0 01-22.97 34.07c-9 10.55-19.71 21.33-20.71 35.16-.14 2-.11 4.07-1.23 5.69-1 1.46-2.77 2.21-4.09 3.42s-2.08 3.48-.77 4.68c-5.13.55-7.26 6.74-8.25 11.8l-2.27 11.68a42.79 42.79 0 00-1.1 9.28c.13 4.24 1.52 8.33 3 12.3a198.71 198.71 0 0021.08 40.68c4.1 6.08 8.85 12.19 15.58 15.1 6.17 2.66 13.17 2.29 19.88 1.86 9.5-.6 20.55-2.12 25.27-10.38 3-5.25 2.54-12 5.81-17.1 1.69-2.61 4.22-4.55 6.27-6.88 3.78-4.3 5.83-9.81 7.72-15.21a569.52 569.52 0 0020.8-75.9c1.73-8.64 3.29-17.4 6.84-25.46 3.28-7.47 8.16-14.09 12.67-20.9 8.45-12.77 9.71-23.84 15.55-38-12.87-3-18.82-11.53-29.79-18.78-10.35-6.83-25.64-21.38-36.56-26.62-3.64 8.97-.61 20.58-6.54 28.55z"
      opacity={0.1}
    />
    <Path
      d="M383.18 480.05c-3.48 4.67-7.53 8.9-11 13.59-6.19 8.41-10.32 18.13-15.18 27.37a187.55 187.55 0 01-23 34.08c-9 10.55-19.72 21.33-20.71 35.15-.14 2-.12 4.08-1.24 5.69s-2.77 2.22-4.08 3.42-2.09 3.49-.77 4.69c-5.14.54-7.27 6.73-8.25 11.8l-2.27 11.67a42.26 42.26 0 00-1.11 9.28c.13 4.25 1.52 8.34 3 12.31a198.87 198.87 0 0021.08 40.67c4.1 6.09 8.85 12.19 15.58 15.1 6.18 2.67 13.18 2.29 19.89 1.87 9.49-.6 20.54-2.13 25.27-10.38 3-5.25 2.53-12 5.81-17.1 1.68-2.62 4.21-4.55 6.26-6.89 3.78-4.3 5.83-9.8 7.72-15.21a567.61 567.61 0 0020.8-75.9c1.73-8.63 3.29-17.4 6.84-25.46 3.28-7.46 8.17-14.09 12.67-20.89 8.46-12.78 8-20.36 13.8-34.53-12.86-3-17.07-15-28-22.26-10.34-6.83-25.64-21.38-36.56-26.62-3.66 8.98-.63 20.59-6.55 28.55z"
      opacity={0.1}
    />
    <Path
      d="M387.54 483.54c-3.47 4.68-7.52 8.9-11 13.59-6.19 8.41-10.31 18.13-15.18 27.37a187 187 0 01-23.03 34.12c-9 10.55-19.71 21.33-20.71 35.16-.14 2-.11 4.07-1.23 5.68s-2.77 2.22-4.09 3.43-2.08 3.48-.77 4.68c-5.13.55-7.26 6.73-8.25 11.8l-2.27 11.68a42.79 42.79 0 00-1.1 9.28c.12 4.24 1.52 8.33 3 12.3a199.2 199.2 0 0021.08 40.68c4.11 6.08 8.86 12.18 15.59 15.09 6.17 2.67 13.17 2.29 19.88 1.87 9.5-.6 20.55-2.12 25.27-10.38 3-5.25 2.54-12 5.81-17.1 1.68-2.61 4.22-4.55 6.27-6.89 3.78-4.29 5.83-9.8 7.72-15.2a568 568 0 0020.79-75.9c1.74-8.64 3.3-17.4 6.85-25.47 3.28-7.46 8.16-14.09 12.66-20.89a236.66 236.66 0 0021.51-40.55c-12.86-3-24.77-9-35.74-16.24-10.35-6.83-25.64-21.38-36.56-26.62-3.6 8.94-.57 20.59-6.5 28.51z"
      fill="#f86d70"
    />
    <Circle cx={420.69} cy={493.83} r={6.98} fill={props.accentcolor} />
    <Circle cx={398.86} cy={527.88} r={6.98} fill={props.accentcolor} />
    <Circle cx={376.16} cy={562.8} r={6.98} fill={props.accentcolor} />
    <Path
      d="M731.49 722.13h-63.84c-.76-4.33-.27-9.22-3.11-12.54a36.68 36.68 0 00.23 10.15c.17.8.39 1.6.59 2.39h-81.2c-.55-10.24 1-20.13 2.91-30.43a284 284 0 004.48-44.31c.41-18.36-.95-36.71-1-55.07a397.31 397.31 0 013.5-54.39c2.2-16.58 5.47-33.38 2.75-49.89-3-18.43-5.62-37.12-7.94-55.66a62.24 62.24 0 00-2.35-12.13 80.73 80.73 0 00-3.52-8.11 124.66 124.66 0 01-10.8-42.46c-.46-5.53-8.3-10.54-8.18-16.13 10.68-2.16 29.7-4.84 39.95-1.13s17.91 12.8 28.2 16.2c10 3.35 21.3.94 31.33 4.29 2.06.69 4.19 1.75 5.15 3.69 1.52 3.08-.76 6.94-3.88 8.37s-6.73 1.1-10.13.75q16.71 12.17 32.37 25.69c3.51 3 7.06 6.22 9.09 10.39 2.3 4.72 2.39 10.18 2.44 15.42l.18 18.4c.11 11.81 5.95 22.66 8 34.3 2.59 14.66 3.9 29.52 5.11 44.36.7 8.64 1.37 17.29 1.72 25.95.66 16.64 3.58 33.21 3.83 49.87.08 5.14 0 10.29.46 15.4s1.33 10 2.22 14.9l5.82 32.22a42.93 42.93 0 011 8.51c-.07 4.14-1.31 8.33-.31 12.33a36.55 36.55 0 002 5c3.04 7.42 3.2 15.61 2.93 23.67z"
      fill="#f86d70"
    />
    <Ellipse cx={504.93} cy={111.01} rx={94.29} ry={36.67} fill={props.accentcolor} />
    <Path
      d="M568.28 152.02c-26.29-10.33-36.62 12.2-36.62 12.2-10.12 27 8.84 42.82 20.32 49.6a28.3 28.3 0 0014.38 3.92 27.9 27.9 0 0010.67-2.12c26.35-10.85 28.84-35.43 28.84-35.43 4.66-36.57-37.59-28.17-37.59-28.17zm27.4 28.72a38.35 38.35 0 01-23.41 29.55 22.3 22.3 0 01-8.67 1.74 22.56 22.56 0 01-11.68-3.27c-9.33-5.65-24.74-18.84-16.51-41.31 0 0 8.39-18.77 29.75-10.17 0 0 34.34-7.04 30.52 23.46z"
      fill="#f86d70"
    />
    <Path
      d="M565.16 157.28s34.34-7 30.52 23.46a38.35 38.35 0 01-23.41 29.55 22.3 22.3 0 01-8.67 1.74 22.56 22.56 0 01-11.68-3.27c-9.33-5.65-24.74-18.84-16.51-41.31 0 0 8.39-18.77 29.75-10.17z"
      fill={props.accentcolor}
    />
    <Path
      d="M626.29 244.66s34.34-7 30.52 23.46a38.35 38.35 0 01-23.41 29.55 22.3 22.3 0 01-8.67 1.74 22.56 22.56 0 01-11.68-3.27c-9.33-5.65-24.74-18.84-16.51-41.31 0 0 8.39-18.77 29.75-10.17z"
      transform="translate(-61.13 -87.38)"
      opacity={0.1}
      fill="url(#MessagingFun_svg__b)"
    />
    <Circle cx={449.06} cy={173} r={94.81} opacity={0.1} />
    <Circle cx={449.06} cy={173} r={90.79} fill={props.primarycolor} />
    <Path
      d="M496.65 122.75l-97 52.51a2 2 0 00.14 3.61l16.56 6.24a3.9 3.9 0 012.18 2l12.83 26.51c.24 1.17 2.4 1.48 2.43.29l-2-21.89a7.81 7.81 0 011.77-4.42l50.31-49.29a1.19 1.19 0 011.09-.31 1.14 1.14 0 01.63 1.84l-43.37 53.06a9.69 9.69 0 00-1.7 4.37l-2.6 18.91c.22 1.65 1.51 2.28 2.55.8l9.34-11a2 2 0 012.75-.46l24.08 17.55a1.94 1.94 0 003.06-1.19l19.75-97a2 2 0 00-2.84-2.19z"
      fill="#fff"
    />
  </Svg>
);
SvgMessagingFun.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
