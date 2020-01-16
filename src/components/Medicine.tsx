import React from 'react';
import Svg, { Circle, Defs, Ellipse, G, Path, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgMedicine = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 1105.04 782.74" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="Medicine_svg__a" x1={403.57} y1={833.5} x2={403.57} y2={218.16} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
      <LinearGradient id="Medicine_svg__b" x1={940.67} y1={825.72} x2={940.67} y2={263.72} xlinkHref="#Medicine_svg__a" />
    </Defs>
    <Ellipse cx={367.38} cy={766.65} rx={97.44} ry={15.65} fill={props.primarycolor} opacity={0.1} />
    <Ellipse cx={897.05} cy={767.09} rx={121.59} ry={15.65} fill={props.primarycolor} opacity={0.1} />
    <Path
      d="M13.84 338.2h101.49v138.33H21.27c-.25 1.42-.49 2.85-.75 4.28h94.81v111.56c-.17-.05-.32-.11-.48-.17a183.88 183.88 0 01-8-3.38l-1.7-.77q-4-1.89-8-4c-.93-.49-1.86-1-2.78-1.52a166.42 166.42 0 01-39.88-31.16c-.34-.33-.66-.68-1-1-1.62-1.76-3.21-3.54-4.75-5.36l-1.7-2c-1.82-2.23-3.58-4.52-5.29-6.84-.25-.34-.49-.68-.75-1a148.88 148.88 0 01-17.2-31.1c-.14-.33-.26-.69-.39-1q-2.06-5.3-3.65-10.7c-.46-1.51-.9-3-1.28-4.57-.14-.46-.26-.91-.37-1.36-5.68-22.17-6.35-45.2-6.35-68.07v-8c0-9.25.11-18.56.27-27.86 0-2.41.1-4.81.15-7.23q.21-9.21.6-18.42c.06-1.71.14-3.41.23-5.11q0-1.47.15-2.94c.24-3.56.44-7.09.68-10.61zM115.33 184.18H59.66a422 422 0 0129.61-40.76c8.27-10.16 17-20.06 26.06-29.6zM115.33 188.46v145.46H14.16c0-.42.07-.85.1-1.27.09-1.15.18-2.3.28-3.44.11-1.34.23-2.69.36-4s.27-2.91.42-4.36.29-2.92.46-4.37.32-2.9.5-4.34.34-2.9.53-4.34c.15-1.2.31-2.39.47-3.59.23-1.69.47-3.39.73-5.07 0-.25.07-.51.11-.75a345.9 345.9 0 017.45-36.52 270.08 270.08 0 0112.55-37A277.75 277.75 0 0157 188.51zM139.56 338.19v138.34h216.77V338.19zm0 142.61v118.8c1.24.26 2.47.51 3.69.72 1.66.32 3.31.61 5 .86.32.05.65.1 1 .13.66.11 1.34.2 2 .29 1.67.23 3.33.42 5 .57.79.08 1.59.15 2.39.21l1.93.15c1.05.08 2.09.14 3.12.17.64 0 1.28.06 1.94.08H172.76c.86 0 1.72 0 2.57-.08h.06c.59 0 1.19 0 1.79-.08a4.19 4.19 0 00.5 0c.5 0 1 0 1.48-.07h.35l3.35-.26c1.1-.1 2.21-.23 3.33-.35l2.28-.27a199.45 199.45 0 0027.45-5.84c20.22-5.64 40-13.53 60.21-19.31 26.13-7.45 55-11.11 80.25-2V480.8zm216.77-296.62V.01a278.67 278.67 0 00-70.43 8.26c-54.89 13.79-104.14 43.7-146.34 81.9v94h10.88v4.27h-10.88v145.48h216.77V188.45H195.11v-4.27zm278.43-62.21c-13.58-.48-27.08-4.78-39.29-11.42-23.35-12.7-42-32.31-62.84-48.86-43.3-34.47-97-55.27-152.09-60.43v182.92h309.45l.77-.81zm28.19-5l29.89 32.8v-41.4c-10.01 1.24-18.78 4.19-29.85 8.56zm29.89 512.13V480.8h-63.69c-.17-.63-.34-1.27-.54-1.91.19.64.35 1.28.53 1.91H380.58v107.25c2.36 1.75 4.69 3.59 7 5.46 2.49 2 4.95 4.11 7.42 6.18l2.49 2.06c1.19 1 2.39 2 3.6 2.94q3.6 2.92 7.27 5.76c1.21 1 2.45 1.9 3.68 2.84a501.22 501.22 0 0061.63 40.31q7.23 4 14.59 7.81c3.27 1.67 6.56 3.33 9.86 4.94q7.44 3.63 15 7a550.84 550.84 0 00146 42.53q16.79 2.48 33.71 3.9v-90.69h1zM380.58 188.45v145.47h312.3V188.45zm0 149.74v138.34h312.3V338.19zm336.54-230v46.18l38.15-41.86q-18.96-3.06-38.15-4.37zm0 230.05v138.29h303.75V338.19zm302.64 301.84l1.07-159.28H717.12v240.57a544.73 544.73 0 0058.7-.7h.34q14-.88 27.87-2.56h.21a513.24 513.24 0 00143.2-38.21m132-318.93c-1.14-2.69-2.33-5.36-3.54-8-2.26-5-4.65-9.86-7.11-14.72h-23.7v138.28h59.92c-.03-39.16-9.94-79.16-25.54-115.61zm-34.35 119.88v137c16.88-16.18 31.14-34.69 41.41-55.85 12.35-25.48 18-53.07 18.46-81.17zm0-182.92v36h21.48a390 390 0 00-21.45-36.05zm-206-162.6c-1.58-.6-3.16-1.21-4.75-1.8a433.62 433.62 0 00-51.31-15.42l-58.38 64.07-1.12 1.19.75.82h207.78a444.41 444.41 0 00-92.94-48.91zm99.06 53.17H721.38l-4.26 3.9v141.52H1020.91v-68.55a432.8 432.8 0 00-82.73-76.92z"
      fill={props.primarycolor}
      opacity={0.1}
    />
    <Path
      d="M115.33 261.83v72.09H14.16c0-.42.07-.85.1-1.27.09-1.15.18-2.3.28-3.44.11-1.34.23-2.69.36-4s.27-2.91.42-4.36.29-2.92.46-4.37.32-2.9.5-4.34.34-2.9.53-4.34c.15-1.2.31-2.39.47-3.59.23-1.69.47-3.39.73-5.07 0-.25.07-.51.11-.75a345.9 345.9 0 017.45-36.52zM13.84 338.2h101.49v138.33H21.27c-.25 1.42-.49 2.85-.75 4.28h94.81v111.56c-.17-.05-.32-.11-.48-.17a183.88 183.88 0 01-8-3.38l-1.7-.77q-4-1.89-8-4c-.93-.49-1.86-1-2.78-1.52a166.42 166.42 0 01-39.88-31.16c-.34-.33-.66-.68-1-1-1.62-1.76-3.21-3.54-4.75-5.36l-1.7-2c-1.82-2.23-3.58-4.52-5.29-6.84-.25-.34-.49-.68-.75-1a148.88 148.88 0 01-17.2-31.1c-.14-.33-.26-.69-.39-1q-2.06-5.3-3.65-10.7c-.46-1.51-.9-3-1.28-4.57-.14-.46-.26-.91-.37-1.36-5.68-22.17-6.35-45.2-6.35-68.07v-8c0-9.25.11-18.56.27-27.86 0-2.41.1-4.81.15-7.23q.21-9.21.6-18.42c.06-1.71.14-3.41.23-5.11q0-1.47.15-2.94c.24-3.56.44-7.09.68-10.61zM215.87 209.28v124.64h-76.31V209.28h10.88v-42.2h44.66v42.2h20.77zM139.57 338.19h76.3v138.33h-76.3zM139.56 480.81h76.31v115a199.11 199.11 0 01-27.45 5.83l-2.28.28c-1.12.13-2.23.24-3.33.35s-2.24.19-3.35.26h-.35c-.48 0-1 .06-1.47.07h-.51c-.6 0-1.2.06-1.8.08-.85.05-1.7.06-2.57.07h-7.08l-1.93-.07c-1 0-2.08-.11-3.12-.18l-1.92-.14-2.39-.22c-1.68-.15-3.35-.34-5-.57l-2-.28-1-.14c-1.67-.26-3.32-.54-5-.86-1.23-.21-2.45-.47-3.69-.72zM629.96 194.56h62.92v139.35h-62.92zM692.89 338.19v138.34H380.58v-59.67h166.35v35.2h83.03V338.19h62.93zM693.88 629.13h-1v90.75q-16.9-1.43-33.7-3.89a550.87 550.87 0 01-146.06-42.62q-20.13-9.06-39.44-19.78a503.26 503.26 0 01-61.64-40.31q-7.36-5.64-14.53-11.54c-3.31-2.73-6.6-5.53-9.93-8.25-2.31-1.87-4.64-3.71-7-5.47V480.81h248.55c-.17-.64-.34-1.28-.52-1.91.19.63.37 1.27.54 1.91h63.73v148.26c.34.01.67.04 1 .06zM856.98 184.18h-41v-12.74h18.38v-37.95q2.39.87 4.76 1.79v36.16h17.86zM955.76 333.92H754.48l.07.05-.09-.05h-37.34V194.57h10.58v103h48.35v-61h39.94v-48.11h41v48.15h39.94v61h58.83zM717.12 338.19v138.34h238.64V338.19zm303.42 301.18l.33-109.5h-65.11v-49H717.12v240.5a544.73 544.73 0 0058.7-.7h.34q14-.88 27.87-2.56h.21a513.24 513.24 0 00143.2-38.21M1049.33 480.81H1105c-.49 28.09-6.13 55.68-18.47 81.16-10.27 21.17-24.54 39.68-41.4 55.85v-88h4.2zM1105.03 476.53h-55.7V360.92h30.14c15.6 36.45 25.51 76.45 25.56 115.61z"
      fill={props.primarycolor}
      opacity={0.1}
    />
    <Path
      fill={props.primarycolor}
      opacity={0.1}
      d="M659.18 233.3h33.71v43.69h-33.71zM659.18 323.86h33.71v10.06h-33.71zM659.18 338.19h33.71v29.35h-33.71zM659.18 414.42h33.71v43.69h-33.71zM659.18 504.98h33.71v43.69h-33.71zM692.88 629.07c.34 0 .67 0 1 .06h-1v10.15h-33.7v-43.74h33.7zM692.88 686.08v33.75q-16.9-1.43-33.7-3.89v-29.86zM380.58 473.32h144.47v3.21H380.58zM380.58 480.8h144.47v12.3H380.58zM380.58 533.42h144.47v19.78H380.58zM525.04 593.52v19.78h-113q-7.36-5.62-14.54-11.54c-3.31-2.73-6.59-5.53-9.93-8.24zM525.04 653.61v19.76h-11.93q-20.11-9.07-39.43-19.79zM775.83 351.6h28.44v28.44h-28.44zM160.05 219.09h28.44v28.44h-28.44zM160.05 285.15h28.44v28.44h-28.44zM160.05 351.21h28.44v28.44h-28.44zM160.05 417.26h28.44v28.44h-28.44zM160.05 483.32h28.44v28.44h-28.44zM160.05 549.38h28.44v28.44h-28.44zM884.4 351.6h28.44v28.44H884.4zM775.83 421.75h28.44v28.44h-28.44zM884.4 421.75h28.44v28.44H884.4zM775.83 491.89h28.44v28.44h-28.44zM884.4 491.89h28.44v28.44H884.4zM775.83 562.04h28.44v28.44h-28.44zM884.4 562.04h28.44v28.44H884.4zM775.83 632.19h28.44v28.44h-28.44zM884.4 632.19h28.44v28.44H884.4zM775.83 720.67v-18.34h28.43v15.73l-28.43 2.61zM18 298.37v16.27h97.33v-16.27zm9.7 15.25h-7.94v-14.25h8zm9.69 0h-8v-14.25h8zm9.67 0h-8v-14.25h8zm9.69 0h-7.99v-14.25h8zm9.68 0h-8v-14.25h8zm9.69 0h-8v-14.25h8zm9.69 0h-8v-14.25h8zm9.68 0h-8v-14.25h8zm9.68 0h-8v-14.25h8zm9.68 0h-8v-14.25h8zM18 345.71v16.27h97.33v-16.27zm9.7 15.24h-7.94v-14.21h8zm9.69 0h-8v-14.21h8zm9.67 0h-8v-14.21h8zm9.69 0h-7.99v-14.21h8zm9.68 0h-8v-14.21h8zm9.69 0h-8v-14.21h8zm9.69 0h-8v-14.21h8zm9.68 0h-8v-14.21h8zm9.68 0h-8v-14.21h8zm9.68 0h-8v-14.21h8zM18 393.07v16.3h97.33v-16.3zm9.7 15.24h-7.94v-14.22h8zm9.69 0h-8v-14.22h8zm9.67 0h-8v-14.22h8zm9.69 0h-7.99v-14.22h8zm9.68 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zM18 440.43v16.25h97.33v-16.25zm9.7 15.24h-7.94v-14.23h8zm9.69 0h-8v-14.23h8zm9.67 0h-8v-14.23h8zm9.69 0h-7.99v-14.23h8zm9.68 0h-8v-14.23h8zm9.69 0h-8v-14.23h8zm9.69 0h-8v-14.23h8zm9.68 0h-8v-14.23h8zm9.68 0h-8v-14.23h8zm9.68 0h-8v-14.23h8zM18.42 487.78c.39 1.53.83 3.06 1.29 4.57v-3.55h8v14.22h-4.28c.13.33.26.69.39 1h91.51v-16.24zm19 15.24h-8V488.8h8zm9.67 0h-8V488.8h8zm9.69 0h-8.02V488.8h8zm9.68 0h-8V488.8h8zm9.69 0h-8V488.8h8zm9.69 0h-8V488.8h8zm9.68 0h-8V488.8h8zm9.68 0h-8V488.8h8zm9.68 0h-8V488.8h8zM41.02 535.14c.25.32.49.68.75 1h5.29v6.83c.57.68 1.13 1.36 1.71 2v-8.87h8v14.27h-3.24c.32.33.63.68 1 1h60.83v-16.23zm25.41 15.23h-8v-14.21h8zm9.69 0h-8v-14.21h8zm9.69 0h-8v-14.21h8zm9.68 0h-8v-14.21h8zm9.68 0h-8v-14.21h8zm9.68 0h-8v-14.21h8zM94.41 582.49c.91.52 1.84 1 2.78 1.52v-.5h8v4.5l1.7.79v-5.29h8v8.65a2.5 2.5 0 00.48.18v-9.85zM754.48 333.92h.06zm-61.6 295.14h1zm-64.27-150.17c.19.64.35 1.28.53 1.91-.16-.63-.33-1.27-.53-1.91zm125.87-145h.06zm-604-149.74v4.27h44.67v-4.27zm542.4 444.91h1zm-64.27-150.17c.19.64.35 1.28.53 1.91-.16-.63-.33-1.27-.53-1.91zm125.87-145h.06zm-61.6 295.14h1zm-64.27-150.14c.19.64.35 1.28.53 1.91-.16-.63-.33-1.27-.53-1.91z"
    />
    <Path
      d="M508.84 438.3s-3.94-.55-3.94-6.29-2.82-16.46-2.82-16.46c0-.05-2.44-18.67-5.81-21.63s-7.7-20.34-7.7-20.34-.74-9.43-2.25-11.46-3.55-7-6.56-14.09-15.56-12-15.56-12-22.69-13.16-29.12-17.45a9.86 9.86 0 01-1.63-1.23c-1.12-1.47-6-1.5-6-1.5-.51-3.22-1-6.92-1.16-10.27 0-.36 0-.72-.05-1.08a34.6 34.6 0 0015.21-18.82c.12-.38.22-.78.33-1.16a3.25 3.25 0 001.95-1.76c.58-1.29.59-2.8 1.31-4 .84-1.42 2.44-2.18 3.7-3.25 3.18-2.7 4-7.25 3.85-11.39-.1-3.35-.64-6.73-.43-10.06l.06-.84c.06-.5.13-1 .22-1.48.49-2.48 1.56-4.82 2.16-7.28s.66-5.23-.74-7.35c-2.05-3.11-6.32-3.73-10.07-4.05-4.25-.36-8.05.11-10.77-3.42a38.39 38.39 0 00-4.28-5.17c-.56-.52-6-3.84-6-4.06a24.31 24.31 0 00-16.95-1.3c-2.82.82-5.48 2.16-8.34 2.83-6.17 1.46-13.27-.12-18.51 3.41-2.92 2-4.67 5.18-6.31 8.28q-2 3.83-4.06 7.65c-2.21 4.19-4.46 8.45-5.39 13.09a20.78 20.78 0 00-.36 3.06V259.06c0 .35 0 .69.06 1s.05.41.08.62.08.68.14 1 .18.88.3 1.32c.05.19.12.37.18.55.1.34.22.67.35 1 .07.17.14.35.22.52.15.35.33.69.51 1 .08.14.14.27.22.4a13.27 13.27 0 00.92 1.34c2.14 2.67 5.29 4.37 7.62 6.87V275.8A34.23 34.23 0 00389 303.75c0 .38.05.77.07 1.15a57.22 57.22 0 01-.11 8.91 4.2 4.2 0 00-3.32-1.48 4.79 4.79 0 00-1.28.11l-.09-.07v.09c-2.2.54-4.91 2.83-7.5 9.34 0 0-7.88 8.88-13.88 8.51s-21.19 9.24-21.19 9.24-14.82 9.62-18 19.42a136.86 136.86 0 01-6.38 16.28L299 413l-3.38 29.95s1.87 13.32 1.5 15.35 7.69 20.34 7.69 20.34 26.63 46.79 37.51 49.19l.78-.55a6.38 6.38 0 001.47.55l2.24-1.58a24.41 24.41 0 01-.17 5.28c-1.5 4.62.56 34.77 3.18 40.68s1.69 83.4 1.69 83.4l-.37 6.84s0 .22.09.6l-.09 1.62.27.14a19.26 19.26 0 01-.27 6.51c-.94 3-1.32 11.48-1.32 11.48s-7.49 47.88-3.94 57.5 6.57 20.16 6.57 20.16 3.75 12 .18 14.05S338.91 780 341 785c1.9 4.62 9.11 17 10.18 18.81l-.09.95-1.47 15.93a20 20 0 001.69 6.08c1.61 3.47 4.74 7.07 10.69 6.68 1-.07 2.16-.19 3.28-.34 10.89-1.46 24.3-6.32 24.3-6.32a9.91 9.91 0 01-1.9-1.57 5.49 5.49 0 01-1.67-4c.16-2.9-5.27-16.72-6.62-20.12-.21-.49-.32-.77-.32-.77s12.38-12.94 10.32-24.41c0 0-13.7-8-9.19-12.39s12.57-17 12.57-17 .37-47.15 0-54.19a58.3 58.3 0 01.69-14.63c.15-.73.33-1.44.52-2.14a130.55 130.55 0 0018.84 1.43c2.3 0 4.64 0 7-.14q0 1 .09 2.16c.52 11.68 1.49 32.16 2.28 39.77 1.12 10.91 7.31 40.31 7.31 40.31s-11.81 7.58 2.06 26.26c0 0 0 6.77-.92 7.75a84.78 84.78 0 00-2.37 9.76c-.58 3.52-.82 7.08.12 8.93 2.25 4.42 15.75 4.06 15.75 4.06l.33-.06a19.35 19.35 0 0114.29 4.31c5.13 4.12 24.6 2.31 35.14 1 4.13-.52 6.89-1 6.89-1a4 4 0 00.14-1.44c-.11-2.59-2.14-8.27-15.9-13.34 0 0-12.94-8.7-12.76-16.28h-1.77c1.09-.06 1.79 0 1.79 0s-5.07-18.5-3-20-4.13-22-4.13-22-3.55-34.4-3.74-36.81a21 21 0 01.93-6.1l-.93-18.86s-.18-6.27 0-8.31a41.5 41.5 0 00-.43-5.29c-.09-.7-.18-1.43-.28-2.15 4.85-1.23 8-2.37 8-2.37l-.56-65.65c4.12-8 4.88-25.55 4.86-38 0-8-.36-13.92-.36-13.92l5.63-9.19s1.3-11-.76-13.41c-.91-1.09-.5-2.22.25-3.15A10.46 10.46 0 01479 523s-.06-.09-.13-.22a9.94 9.94 0 011.25-.89s-2-3.1-.21-4.41c1.68 1.14 3.18 2 4.32 2.7-.08.73-.16 1.15-.16 1.15l.48-1c1.1.62 1.77 1 1.77 1s8.82-17.57 8.63-20.16 6-13.5 6-13.5.75-5.73 4.13-8.13 2.62-19.79 2.62-19.79.94-9.06 3.19-12.76-2.05-8.69-2.05-8.69zm-168.76-7.71l.17 4.19-1.72-2.77z"
      transform="translate(-47.24 -58.63)"
      fill="url(#Medicine_svg__a)"
    />
    <Path d="M439.56 455.11l-2.16 9.2s-17.3-8.83-20.42-20.05 5.22-15.48 5.22-15.48l16.12 6.83z" fill="#fff" />
    <Path d="M439.56 455.11l-2.16 9.2s-17.3-8.83-20.42-20.05 5.22-15.48 5.22-15.48l16.12 6.83z" opacity={0.1} />
    <Path
      d="M342.47 768.22s-16 5.88-27 6.62c-5.84.39-8.91-3.19-10.49-6.64a20.1 20.1 0 01-1.65-6.05l1.43-15.85.76-8.44 23.37-6.07 3.31 10.12.31.77c1.33 3.38 6.66 17.13 6.5 20a5.46 5.46 0 001.64 3.95 9.51 9.51 0 001.82 1.59zM451.76 760.16a4 4 0 01-.14 1.43s-34.22 5.71-41.22 0a18.54 18.54 0 00-14.4-4.22s-13.24.36-15.45-4c-.92-1.83-.68-5.38-.11-8.88a84.59 84.59 0 012.32-9.71l.53-.42 3.15-2.53 36.88-1.09h.28c-.18 7.54 12.52 16.19 12.52 16.19 13.49 5 15.48 10.65 15.64 13.23z"
      fill="#fff"
    />
    <Path
      d="M451.76 760.16a4.08 4.08 0 01-.15 1.43s-34.21 5.71-41.21 0a18.54 18.54 0 00-14.39-4.22s-13.25.36-15.45-4c-.92-1.84-.69-5.38-.12-8.88 5.1.51 13.15 1.78 16.31 4.81 4.78 4.61 12.88 9.21 17.85 9.57 3.89.25 27.16.99 37.16 1.29zM342.47 768.22s-16 5.88-27 6.62c-5.84.39-8.91-3.19-10.48-6.65 4.07 1.37 9.72 2.81 12.69 1.49 3.52-1.56 16-2.57 23-3a9.85 9.85 0 001.79 1.54z"
      opacity={0.1}
    />
    <Path
      d="M366.21 294.37c-13.2-5.13-30.18-22.08-25.94-30a17.72 17.72 0 001.65-6.36 58.07 58.07 0 00.12-9 123.25 123.25 0 00-1.77-14.64s41.21.93 38.81 7c-.7 1.78-.81 4.87-.62 8.33s.69 7.37 1.21 10.68c.72 4.54 1.44 8 1.44 8s-2.52 3.53-4 3.72 8.04 29.58-10.9 22.27z"
      fill="#cf6f80"
    />
    <Path
      d="M332.48 742.68l-.31.34c-12.32-14.9-27.22 3.67-27.22 3.67l-.22-.39.76-8.44 23.37-6.07 3.31 10.12zM423.61 731.79s-9-.19-13.8 4.05-28 .92-27 0a3.29 3.29 0 00.52-1.52l3.15-2.53 36.88-1.09c.14.67.25 1.09.25 1.09z"
      opacity={0.1}
    />
    <Path
      d="M347.81 614.78a27.82 27.82 0 00-1.52 5.13 58.71 58.71 0 00-.69 14.56c.37 7 0 53.91 0 53.91s-7.91 12.51-12.32 16.92 9 12.33 9 12.33c2 11.4-10.12 24.28-10.12 24.28-12.32-14.9-27.22 3.68-27.22 3.68s-8.1-14-10.12-19 7.91-8.46 11.4-10.49-.17-14-.17-14-2.95-10.49-6.45-20.06 3.86-57.21 3.86-57.21.38-8.46 1.29-11.41a19.08 19.08 0 00.27-6.48c-.06-.73-.13-1.34-.18-1.75s-.09-.6-.09-.6l.14-.24 5-9.32s40.32 13.88 37.92 19.75zM423.61 730.69s-9-.19-13.8 4-28 .92-27 0 .92-7.73.92-7.73c-13.61-18.58-2-26.12-2-26.12s-6.08-29.25-7.18-40.1c-.77-7.58-1.72-27.95-2.23-39.58-.22-5-.35-8.44-.35-8.44l11.12-2.24 1.43-.29 26.82-5.38s.74 5 1.24 9.09a42.48 42.48 0 01.42 5.27c-.18 2 0 8.26 0 8.26l.91 18.77a21.32 21.32 0 00-.91 6.07c.18 2.39 3.67 36.61 3.67 36.61s6.07 20.42 4 21.89 2.94 19.92 2.94 19.92z"
      fill={props.primarycolor}
    />
    <Path d="M379.08 241.37c-.7 1.78-.81 4.87-.62 8.33a34.25 34.25 0 01-36.42-.68 123.25 123.25 0 00-1.77-14.65s41.21.91 38.81 7z" opacity={0.1} />
    <Path d="M395.01 219.27a33.87 33.87 0 01-1.68 10.61 34.22 34.22 0 01-66.74-9.79v-.82a34.22 34.22 0 1168.43 0z" fill="#cf6f80" />
    <Path
      d="M366.21 294.37c-13.2-5.13-30.18-22.08-25.94-30a17.72 17.72 0 001.65-6.36l18.07 14.85 11.18 9.17 8.5-21.64c.72 4.54 1.44 8 1.44 8s-2.52 3.53-4 3.72 8.04 29.57-10.9 22.26z"
      opacity={0.1}
    />
    <Path fill={props.primarycolor} d="M412.94 360l-15.09 253.5-19.68 1.29-50.96-146.99 8.36-174.51 1.76-36.87 22.66 18.61 11.19 9.17 8.75-22.27 16.27 14.18L412.94 360z" />
    <Path
      d="M347.81 614.78a27.82 27.82 0 00-1.52 5.13 145 145 0 01-41.26-12.89l-.27-.14.09-1.61.05-.84 5-9.32s40.31 13.8 37.91 19.67zM383.32 619.95a101.24 101.24 0 01-11.06 1.26c-.22-5-.35-8.44-.35-8.44l11.12-2.24zM412.52 613.95c-7.11 1.85-18.09 3.93-27.92 2.63l-.14-6.34 26.82-5.38s.74 4.95 1.24 9.09z"
      opacity={0.1}
    />
    <Path
      d="M384.42 617.74c-41 7-78.55-13.07-78.55-13.07l.36-6.8s.93-77.09-1.65-83-4.59-35.88-3.13-40.48-5.33-73.58-5.33-73.58l-1.1-28-40.26-16.31 18-37.52a135.39 135.39 0 006.26-16.2c3.13-9.74 17.66-19.31 17.66-19.31s14.9-9.56 20.79-9.2 13.61-8.46 13.61-8.46c5.7-14.53 10.86-7.95 10.86-7.95 0 .69 0 0-.28 2.15-2 15.95 32.34 66.35 32.83 67.24l3.27 79.66 3.31 100.81z"
      opacity={0.1}
    />
    <Path
      d="M383.32 617.74c-41 7-78.56-13.07-78.56-13.07l.37-6.8s.93-77.09-1.66-83-4.59-35.88-3.12-40.48-5.33-73.58-5.33-73.58l-1.11-28-40.28-16.37 18-37.52a137.51 137.51 0 006.26-16.2c3.12-9.74 17.66-19.31 17.66-19.31s14.9-9.56 20.78-9.2 13.61-8.46 13.61-8.46c5.71-14.53 12-7.95 12-7.95 0 .69-.6 1-.28 2.15 4.4 15.47 31.24 66.35 31.73 67.24l3.31 79.66 3.31 100.81z"
      fill="#fff"
    />
    <Path d="M372.27 329.46c-4.41-1.84-27.77-28.51-27.77-28.51v-6.07c-.85-2-5.9-.78-10 .62l1.76-36.87 2 1.66c4.38 15.46 33.5 68.28 34.01 69.17z" opacity={0.1} />
    <Path d="M373.38 327.25c-4.42-1.84-27.78-28.51-27.78-28.51v-6.07c-.85-2-5.9-.78-10 .62l1.77-36.87 2 1.66c4.39 15.46 33.52 68.29 34.01 69.17z" fill="#fff" />
    <Path d="M305.87 460.26c.55 0 28.51-2.94 28.51-2.94s16.93 33.29 15.82 41.39-3.12 15.27-9.93 14-36.65 1-36.65 1z" opacity={0.1} />
    <Path d="M304.76 458.05c.55 0 28.51-2.94 28.51-2.94s16.92 33.3 15.82 41.39-3.13 15.27-9.93 14-36.65 1-36.65 1z" fill="#fff" />
    <Path d="M325.83 442.42s25.66 13.79 26.21 18-13.06-1.84-16-2.57a36.61 36.61 0 00-5.89-.92l-19.61.53z" fill="#cf6f80" />
    <Circle cx={365.11} cy={328.48} r={2.7} opacity={0.1} />
    <Circle cx={365.11} cy={327.38} r={2.7} fill={props.accentcolor} />
    <Circle cx={370.08} cy={445.36} r={2.7} opacity={0.1} />
    <Circle cx={370.08} cy={444.25} r={2.7} fill={props.accentcolor} />
    <Circle cx={367.8} cy={386.92} r={2.7} opacity={0.1} />
    <Circle cx={367.8} cy={385.82} r={2.7} fill={props.accentcolor} />
    <Path
      d="M430.04 456.37s1.84 2.76 0 4.05.18 4.41.18 4.41-4.59 2.69-2.57 5.11.74 13.35.74 13.35l-5.52 9.14s.33 5.89.35 13.85c0 12.42-.73 29.88-4.77 37.84l.56 65.31s-19.33 7.06-35.51 4.91l-2.4-104.8s3.5-59.43 4.79-70.83a118.68 118.68 0 00.92-17.85s-.55-17.84-2.4-26.12c0 0-2-35.87-2.2-45.8-.09-4.75.16-18.61.44-31.79.31-14.41.66-28 .66-28l-3.65-28.88s3.65-.37 4.75 1.1a10.53 10.53 0 001.6 1.23c6.3 4.26 28.56 17.36 28.56 17.36s12.32 4.9 15.27 11.92 5 12 6.43 14 2.21 11.4 2.21 11.4 4.24 17.3 7.55 20.23 5.73 21.57 5.73 21.57l-29.25 23s-2.57 38.26-3.12 39.74 10.65 34.55 10.65 34.55z"
      fill="#fff"
    />
    <Path
      d="M431.15 456.37s1.83 2.76 0 4.05.17 4.41.17 4.41-4.56 2.72-2.56 5.14.74 13.35.74 13.35l-5.52 9.14s.33 5.89.36 13.85c0 12.42-.73 29.88-4.77 37.84l.55 65.31s-19.36 7.06-35.52 4.91l-2.39-104.8s3.5-59.43 4.79-70.83a117.58 117.58 0 00.91-17.85s-.55-17.84-2.39-26.12c0 0-2-35.87-2.21-45.8-.09-4.75.17-18.61.44-31.79.31-14.41.66-28 .66-28l-4.82-29.27s4.82 0 5.93 1.49a9.49 9.49 0 001.6 1.23c6.3 4.26 28.57 17.36 28.57 17.36s12.31 4.9 15.26 11.92 5 12 6.44 14 2.2 11.4 2.2 11.4 4.24 17.3 7.55 20.23 5.7 21.53 5.7 21.53l-29.25 23s-2.57 38.26-3.13 39.74 10.69 34.56 10.69 34.56z"
      fill="#fff"
    />
    <Path d="M396.12 297.67l2.64 7.7-13.9 14c.31-14.4.66-28 .66-28l-4.82-29.27s4.82 0 5.93 1.49a9.12 9.12 0 001.6 1.22l11.82 34.1z" opacity={0.1} />
    <Path d="M395.01 295.46l2.65 7.7-13.9 14c.31-14.41.66-28 .66-28l-4.83-29.27s4.83 0 5.93 1.49a10 10 0 001.6 1.23l11.83 34.09z" fill="#fff" />
    <Path
      d="M395.01 219.27a33.87 33.87 0 01-1.68 10.61 1.43 1.43 0 01-1.08-.27c-.26-9-4.69-17.45-10.14-24.64a25.89 25.89 0 00-5.5-5.7 10.76 10.76 0 00-7.46-2.11c-3 .41-5.65 2.45-8.68 2.71-4 .33-7.58-2.44-11.55-2.58a11.35 11.35 0 00-8.49 3.94 23.29 23.29 0 00-4.55 8.44 49.38 49.38 0 00-2.54 14.56c-.05 2.8-.32 6.31-2.92 7.33a14.94 14.94 0 00-3.77-11.41l-.06-.06v-.82a34.22 34.22 0 1168.43 0z"
      opacity={0.1}
    />
    <Path
      d="M374.97 164.94a23.56 23.56 0 00-16.62-1.3c-2.77.82-5.38 2.15-8.19 2.82-6 1.45-13-.12-18.15 3.39-2.86 2-4.58 5.16-6.18 8.23l-4 7.62c-2.18 4.17-4.38 8.41-5.29 13s-.36 9.73 2.55 13.42c2.12 2.69 5.25 4.38 7.55 6.91a15 15 0 013.76 11.4c2.61-1 2.86-4.52 2.92-7.32a49.38 49.38 0 012.54-14.56 23.21 23.21 0 014.55-8.44 11.37 11.37 0 018.49-3.94c4 .14 7.59 2.9 11.55 2.57 3-.25 5.66-2.3 8.68-2.7a10.72 10.72 0 017.46 2.11 25.62 25.62 0 015.49 5.7c5.46 7.19 9.89 15.62 10.15 24.64 1.13.83 2.76-.25 3.32-1.53s.58-2.78 1.29-4c.82-1.41 2.39-2.16 3.62-3.22 3.12-2.69 3.9-7.22 3.78-11.33s-.92-8.28-.14-12.32c.47-2.48 1.53-4.8 2.11-7.25s.65-5.2-.72-7.31c-2-3.1-6.21-3.71-9.88-4-4.17-.36-7.9.1-10.56-3.41a38.3 38.3 0 00-4.2-5.14c-.53-.52-5.88-3.82-5.88-4.04z"
      fill="#512e4e"
    />
    <Path
      d="M266.28 375.82l-10.45-19.32-3.31 29.81s1.84 13.24 1.47 15.27 7.54 20.23 7.54 20.23 26.13 46.54 36.8 48.94l36.05-25.76-9.56-12.14s-3.31-1.29-4.14 0c0 0-17.75-30.54-19.59-32.75s-1.48-6.62-1.48-6.62-2.76-2.94-1.84-5.7-5.33-12.33-5.33-12.33l5.7-5.33z"
      opacity={0.1}
    />
    <Path
      d="M256.38 354.3l-2.76 2.2-3.31 29.81s1.84 13.24 1.47 15.27 7.55 20.23 7.55 20.23 26.12 46.54 36.79 48.94l36.06-25.76-9.57-12.14s-3.31-1.29-4.14 0c0 0-17.75-30.54-19.59-32.75s-1.47-6.62-1.47-6.62-2.76-2.94-1.84-5.7-5.34-12.33-5.34-12.33l5.7-5.33z"
      fill="#fff"
    />
    <Path
      d="M427.65 471.08c2 2.43.74 13.34.74 13.34l-5.52 9.14s.33 5.9.35 13.85l-9.28 2.9a5.51 5.51 0 01-7.15-5.43l1.6-51.61 21.65 8.28c-1.84 1.28.18 4.42.18 4.42s-4.59 2.68-2.57 5.11z"
      opacity={0.1}
    />
    <Path
      d="M428.76 469.97c2 2.43.74 13.35.74 13.35l-5.52 9.14s.33 5.89.36 13.85l-9.45 2.95a5.4 5.4 0 01-7-5.32l1.61-51.77 21.66 8.28c-1.85 1.28.17 4.41.17 4.41s-4.57 2.69-2.57 5.11z"
      fill="#fff"
    />
    <Path d="M435.93 445.37s-1.47 9.39-5.15 9.94-5.33 15.19-9 14.67-1.24-13.61-1.11-16.15-4-13.06-.91-15.45 12.87 0 12.87 0z" fill="#cf6f80" />
    <Path
      d="M443.76 373.06l6.94-14s2.76 10.67 2.76 16.37 3.86 6.26 3.86 6.26 4.23 5 2 8.64-3.13 12.7-3.13 12.7.73 17.29-2.58 19.68-4 8.1-4 8.1-6.08 10.85-5.89 13.43-8.46 20.05-8.46 20.05 4.23-21.71-20.42-31.09c0 0-.19-7.37 1.65-9.39s4.71-2.94 2.91-13.15-.52-22.41-.52-24.86 5.52-17.73 5.52-17.73z"
      opacity={0.1}
    />
    <Path
      d="M446.76 357.06l6.06 2s2.77 10.67 2.77 16.37 3.86 6.26 3.86 6.26 4.23 5 2 8.64-3.12 12.7-3.12 12.7.73 17.29-2.58 19.68-4.05 8.1-4.05 8.1-6.07 10.85-5.88 13.43-8.47 20.05-8.47 20.05 4.24-21.71-20.42-31.09c0 0-.18-7.37 1.66-9.39s4.71-2.94 2.91-13.15-.52-22.41-.52-24.86 5.52-17.73 5.52-17.73z"
      fill="#fff"
    />
    <Path d="M312.91 719.93s9.66-6.07 16-1.66-16 1.66-16 1.66zM387.97 701.16s8.55-1.1 15.73 6.63-15.73-6.63-15.73-6.63z" opacity={0.1} />
    <G opacity={0.1}>
      <Path d="M400.48 217.55c-1.23 1.06-2.81 1.82-3.63 3.23-.7 1.21-.72 2.7-1.28 4s-2.19 2.36-3.32 1.54c-.26-9-4.7-17.45-10.15-24.65a25.62 25.62 0 00-5.49-5.7 10.75 10.75 0 00-7.47-2.11c-3 .41-5.64 2.45-8.67 2.7-4 .34-7.59-2.43-11.56-2.57a11.32 11.32 0 00-8.48 3.95 23.16 23.16 0 00-4.55 8.43 49.44 49.44 0 00-2.54 14.56c-.06 2.79-.32 6.27-2.9 7.31a13.7 13.7 0 010 2.22c2.6-1 2.86-4.52 2.92-7.32a49.38 49.38 0 012.54-14.56 23.21 23.21 0 014.55-8.44 11.35 11.35 0 018.48-3.94c4 .14 7.6 2.9 11.56 2.57 3-.25 5.66-2.3 8.67-2.7a10.75 10.75 0 017.47 2.11 25.62 25.62 0 015.49 5.7c5.45 7.19 9.89 15.62 10.15 24.64 1.13.83 2.76-.25 3.32-1.53s.58-2.78 1.28-4c.82-1.41 2.4-2.16 3.63-3.22 3.12-2.69 3.9-7.22 3.78-11.33v-.38c-.19 3.56-1.14 7.19-3.8 9.49zM326.66 216.84c-2.3-2.53-5.44-4.22-7.55-6.9a14.64 14.64 0 01-2.91-8.19 15.4 15.4 0 002.91 10.39c2.11 2.69 5.25 4.38 7.55 6.91a15 15 0 013.77 8.92 15 15 0 00-3.77-11.13zM406.23 186.65c-.59 2.45-1.64 4.78-2.12 7.25a23.1 23.1 0 00-.31 5 19.42 19.42 0 01.31-2.84c.48-2.48 1.53-4.8 2.12-7.25a12.3 12.3 0 00.33-4.14 13.9 13.9 0 01-.33 1.98z" />
    </G>
    <Ellipse cx={132.73} cy={744.94} rx={97.44} ry={15.65} fill={props.primarycolor} opacity={0.1} />
    <Path fill="#535461" d="M129.6 445.14h6.27v141.17h-6.27z" />
    <Path
      d="M175.27 585.88l-.39 6.36-.56 9-.23 3.74-.55 9-.24 3.74-.56 9-6.32 102.07a17.3 17.3 0 01-17.26 16.22H116.3a17.29 17.29 0 01-17.25-16.22l-6.29-102.14-.56-9-.23-3.74-.56-9-.23-3.74-.56-9-.4-6.36a9 9 0 019-9.51h67.21a8.94 8.94 0 018.84 9.58z"
      fill={props.accentcolor}
    />
    <Path fill="#9d9cb5" d="M174.88 592.24l-.56 8.97H91.14l-.56-8.97h84.3zM174.09 604.95l-.55 8.98H91.93l-.56-8.98h82.72zM173.3 617.68l-.55 8.97H92.72l-.56-8.97h81.14z" />
    <Path d="M81.01 498.05c36.51 26.42 51.75 67.74 51.75 67.74s-44-1.51-80.52-27.93S.51 470.13.51 470.13s43.98 1.5 80.5 27.92z" fill={props.primarycolor} />
    <Path d="M.48 470.13s45.68 25.35 60.33 46.34 71.95 49.32 71.95 49.32" fill="none" stroke="#535461" strokeMiterlimit={10} strokeWidth={2} />
    <Path d="M104.58 444.83c19.87 14.37 28.18 36.86 28.18 36.86s-23.95-.82-43.83-15.19-28.17-36.87-28.17-36.87 23.94.82 43.82 15.2z" fill={props.primarycolor} />
    <Path d="M60.76 429.63s24.86 13.8 32.83 25.22 39.17 26.84 39.17 26.84" fill="none" stroke="#535461" strokeMiterlimit={10} strokeWidth={2} />
    <Path d="M161.61 480.55c-22.83 25.09-27.66 57.88-27.66 57.88s32.19-7.9 55-33 27.66-57.88 27.66-57.88-32.17 7.91-55 33z" fill={props.primarycolor} />
    <Path d="M216.63 447.56s-29.74 25.72-37.3 43.44-45.38 47.43-45.38 47.43" fill="none" stroke="#535461" strokeMiterlimit={10} strokeWidth={2} />
    <Path
      d="M1046.91 530.35s-16.51-82.14-10.19-92.36c0 0 .23-9.5-.15-21.61v-1.39a30.76 30.76 0 003.47 2 28.08 28.08 0 0018.9 2.44l-5-5.57c-1.2-1.33-2.45-2.77-2.71-4.53s.46-3.33 1.08-4.9c4.75-12 5-27.09-4.15-36.25-7.73-7.7-9.61-17.64-18-24.67-6.13-5.15-9.5-12.7-12.68-20-2.69-6.17-5.4-12.39-6.94-18.93-1.2-5.11-1.68-10.4-3.33-15.39s-4.74-9.84-9.57-12.07c-1.72-.79-3.63-1.24-5.2-2.29-2.06-1.39-3.3-3.65-4.79-5.63-7.57-10-32.92-4.11-44.92-.05a25.27 25.27 0 00-8.88 4.92l.11-.18c.09-.15.2-.3.3-.45a15.78 15.78 0 00-3.36 3.75c-1.75 2.77-2.48 6-3.94 9-1.76 3.55-11.55 13.46-7.34 17.45a3.55 3.55 0 001 .64 8.65 8.65 0 005 .5l-.18.43a29.23 29.23 0 00-2.17 11.09c0 16.43 13.55 29.75 30.28 29.75a30.57 30.57 0 009.27-1.43c.07.38.13.76.2 1.14 0 .15.05.3.07.45l-.53.74a1 1 0 00-.09-.13l-15.7 21.94c-2.4 1.69-16.22 11.69-17 19.19-.82 8.21-1.64 17.82-1.64 17.82l-.11 2.06a6.18 6.18 0 01-5 1.35c-4.9-.8-4.9 18-4.9 18s-3.26 3-5.5.4-8.16 6.21-8.16 6.21l-37.1 1.6-.85.05-2-6.19a2.61 2.61 0 00-3.27-1.67 3 3 0 00-.45.19l-.14.08-.26.18-.13.12a2 2 0 00-.2.21l-.12.14-.06.06a2.52 2.52 0 00-.36 2.24l1.72 5.31c-7.16 1.44-14.48 5.5-8.51 16.68l-30.26-5.59 9.79 8.22 50.54 10.43c-.67 1.2-.23 2.94 1.86 5.39 9 10.57 25.4 13.44 32 14.18a56.81 56.81 0 006.49 11l-.57 10.53s-16.71 80.26-19.77 84.33a47.57 47.57 0 004.23-5.57c-4.85 16.49-11.63 39.06-13.41 42.44-2.86 5.4-5.51 27.25-2.25 28.65 1 .43 3.86.22 7.94-.09v1.81l-.18 68.59s.82 42.07-1.43 46.08-2.85 12.42-2.85 12.42-9 16.59-16.13 23.26a1.07 1.07 0 01-.16.14l-.22-1.56s-8.57 10.82-27.53 10.21c0 0-11.41 7.42 5.51 7.82s38.53-.6 38.53-.6 15.09-23 27.73-20v17.43h3.87V804.6a15.87 15.87 0 006.89-10.43 12.68 12.68 0 00-4.52-11.73 7.5 7.5 0 01-2.47-5.48l-.14.12c0-.35-.09-.71-.13-1.08-1.11-9-2.5-27.57 2.41-41.31 6.73-18.84 8.77-45.08 3.87-60.7a139.56 139.56 0 01-3.89-15.21c-.12-.65-.23-1.27-.33-1.85a78.85 78.85 0 019.93 2c11.35 3.13 36.18 3.71 57.38 3.54.05.58.11 1.19.18 1.8a65.5 65.5 0 002.36 12.52c2.66 8 3.88 43.27 3.88 43.27s3.43 29 1.56 40.8c-1 6.56-2 13.15-2.57 19.77v.13s-5.62 16-9.73 24.69c-.1.22-.21.44-.31.65a13 13 0 00-3.21.71s-5.51 11-11 12.82-3.67 7.81 8.76 5.61 31.2-4 31.2-4l.81-11.22 3.82-4.78-1 11.19 4.07-.8-.54-13.61 6.25-7.82s7.55-6.72-3.67-19.94v.29c-.12-.19-.23-.39-.36-.58v-.06c-1.86-2.88-3.34-8.25-.63-17.78 4.9-17.22 7.75-32.85 7.75-32.85s10.94-41.87-2.21-61.68h.58a33.32 33.32 0 01-2.83-8.8q-.1-.54-.18-1.11c9.73-.56 19.28-2.32 27.07-6.12-.03-.04-4.72-99.4-8.6-115.22zm-123.53-69.3v.2l-2 .1zm-6.86.95a2.21 2.21 0 00-.9.43 8.88 8.88 0 00-1.57 4.11l-3.12-.7s-2.19-.47-5.34-1l-1.49-1.5c4.1-.34 8.36-.84 12.42-1.34z"
      transform="translate(-47.24 -58.63)"
      fill="url(#Medicine_svg__b)"
    />
    <Path fill="#1d2366" d="M972.51 743.53l-1.19 14.17 3.99-.8-.6-15.37-2.2 2z" />
    <Path
      d="M881.48 676.25c-4.81 13.7-3.45 32.19-2.37 41.17.4 3.32.77 5.34.77 5.34s-7.19 16.38-7.79 17-21.16 13.17-21.16 13.17l-14.37 8.39s-14.58-6.39-7.59-8.59a10.61 10.61 0 003.77-2.57c7-6.65 15.79-23.18 15.79-23.18s.6-8.39 2.8-12.38 1.4-45.92 1.4-45.92l.17-68.35v-8.91l27.35.2a61.89 61.89 0 001.18 9 137.59 137.59 0 003.81 15.16c4.82 15.59 2.82 41.7-3.76 60.47z"
      fill="#ffb0b1"
    />
    <Path
      d="M879.88 722.76s-7.19 16.38-7.79 17-21.16 13.17-21.16 13.17l-14.37 8.39s-14.58-6.39-7.59-8.59a10.61 10.61 0 003.77-2.57l.62 4.37 4.79-.2 41-36.89c.36 3.3.73 5.32.73 5.32z"
      opacity={0.1}
    />
    <Path
      d="M879.38 718.37l-41.23 37.14-4.79.2-1-7s-8.38 10.78-27 10.18c0 0-11.18 7.39 5.39 7.79s37.73-.6 37.73-.6 14.78-23 27.15-20v17.37h3.8v-17.53a15.79 15.79 0 006.74-10.4 12.74 12.74 0 00-4.41-11.68 7.53 7.53 0 01-2.38-5.47z"
      fill="#1d2366"
    />
    <Path
      d="M976.31 697.61c-2.66 9.5-1.21 14.85.61 17.72v.06a32.75 32.75 0 014.78 11.67l.16.9-18.76 27.35-10.18 4s-16.37-5.59-13.38-7.19c.75-.39 1.92-2.47 3.26-5.34 4-8.65 9.52-24.61 9.52-24.61v-.13c.58-6.59 1.5-13.16 2.52-19.7 1.83-11.77-1.53-40.66-1.53-40.66s-1.2-35.13-3.8-43.12a65.93 65.93 0 01-2.33-12.44c-.54-5-.66-9.12-.66-9.12s10.78-15 30.54 1.2a21.74 21.74 0 014.13 4.48c13.65 19.42 2.66 62.2 2.66 62.2s-2.75 15.56-7.54 32.73z"
      fill="#ffb0b1"
    />
    <Path
      d="M981.89 727.96l-18.76 27.35-10.18 4s-16.37-5.59-13.38-7.19c.75-.39 1.92-2.47 3.26-5.34 6.93-.06 10.52 6.54 10.52 6.54l8.78-1.4s11.58-22.76 14.18-24.15.4-10.39.4-10.39v-2.29c.07.08.13.17.21.25v.06a32.75 32.75 0 014.78 11.67z"
      opacity={0.1}
    />
    <Path
      d="M953.95 753.91s-5-9.18-14.58-5.79c0 0-5.39 11-10.78 12.78s-3.59 7.78 8.59 5.59 30.54-4 30.54-4l.8-11.19 12.38-15.77s7.38-6.69-3.6-19.86v2.29s2.2 9-.4 10.39-14.14 24.16-14.14 24.16z"
      fill="#1d2366"
    />
    <Path
      d="M880.28 591.6a61.89 61.89 0 001.18 9c-11.26-1.65-21.71-.83-28.56-.29v-8.91zM982.3 605.17s-16 .78-35.08.94c-.54-5-.66-9.12-.66-9.12s10.78-15 30.54 1.2a21.74 21.74 0 014.13 4.48 24.4 24.4 0 001.07 2.5z"
      opacity={0.1}
    />
    <Path
      d="M982.3 603.37s-70.08 3.39-91.44-2.6-42.53-.8-45.72-2.19-.6-23.16 2.2-28.55 18.16-59.9 18.16-59.9l14.78-77.06 15.57-4.29 1.1-.31 27.13-7.48 19.88-5.49s39.53 154.33 36.14 165.71a29.14 29.14 0 00-.58 13.39 33.42 33.42 0 002.78 8.77z"
      fill="#1d2366"
    />
    <Path d="M828.76 380.37s-14 15-3.4 23.36 17.57.8 17.57.8z" fill="#c7daf5" />
    <Path d="M828.76 380.37s-14 15-3.4 23.36 17.57.8 17.57.8z" opacity={0.1} />
    <Path
      d="M941.87 281.75s-1.64 1.56-4.11 3.86c-3.52 3.29-8.73 8.1-13.35 12.13-6.4 5.57-11.68 9.66-9.79 6.17s1.53-9.57.59-15.26c-.07-.38-.13-.76-.2-1.13a104.8 104.8 0 00-3.09-12.36s10.34-13.36 16.06-18.63c2.13-2 3.62-2.82 3.71-1.43.1 1.87 1.5 6 3.24 10.38.05.14.1.27.16.41 1.16 3 2.47 6.08 3.62 8.74 1.76 4.08 3.16 7.12 3.16 7.12z"
      fill="#ffb0b1"
    />
    <Path
      d="M935.09 265.89a29.68 29.68 0 01-19.88 22.76 104.07 104.07 0 00-3.29-13.49s19.47-25.15 19.77-20.06c.07 1.93 1.59 6.21 3.4 10.79zM913.27 295.37l2.52-3.55s1.67 10.18 7.81 5.69 6.44 33.79 6.44 33.79l-6.59 98.53-47.62-2.85 1.35-47.61 5.39-24 13.33-34.89 7.93-11.53z"
      opacity={0.1}
    />
    <Path
      d="M930.04 331.91l-6 89.09-.63 9.44-26.55-1.59-1-.06-20-1.2 1.35-47.62 5.39-24 13.33-34.89 7.93-11.53 9.44-13.63 2.52-3.54s1.67 10.18 7.81 5.69l.13-.09c6-3.8 6.28 33.93 6.28 33.93z"
      fill="#1d2366"
    />
    <Path
      d="M883.27 347.63s-2.39 5-7.19 4.19-4.79 18-4.79 18-3.19 3-5.39.4-8 6.19-8 6.19l-36.34 1.6s16.17 7.39 13 29.75c0 0 54.9-3.4 56.7-8.59s-7.99-51.54-7.99-51.54z"
      fill="#fff"
    />
    <Path
      d="M883.27 347.63s-2.39 5-7.19 4.19-4.79 18-4.79 18-3.19 3-5.39.4-8 6.19-8 6.19l-36.34 1.6s16.17 7.39 13 29.75c0 0 54.9-3.4 56.7-8.59s-7.99-51.54-7.99-51.54z"
      opacity={0.03}
    />
    <Path
      fill="#fff"
      d="M777.66 389.76l9.58 8.18 78.86 16.57-9.78-9.98-78.66-14.77zM913.42 298.52c-1.31 2-5.06 12.24-8.19 21.18-2.61 7.45-4.79 14-4.79 14s-5.09 33.14-7.69 39.13-1.19 29.35-1.19 29.35l-9.69 57.69s-4.39 29.75-11.17 47.52c-6.69 17.49-14.14 25.69-14.37 25.95 3-4.06 19.35-84 19.35-84l5.4-100.82s.79-9.58 1.59-17.77 17-19.37 17-19.37l15.62-22.21c1.57 2.1.52 5.76-1.87 9.35z"
    />
    <Path d="M872.69 428.09s-23-1-34.14-14.38 25.75-5.34 25.75-5.34l9.59 2.2z" fill="#ffb0b1" />
    <Path
      d="M980.1 581.22a29.14 29.14 0 00-.58 13.39c-25.09 1.78-51.93-5-51.93-5-5 4.6-18.17 11.38-18.17 11.38l-7.18-89c-4.59-12-6.39-74.87-6.39-74.87s.41-3.29 1-8.22c0-.12 0-.25.05-.37 1.79-13.77 5.34-39.62 7.08-43.11 2.4-4.8-7.38-17.57-7.38-17.57l4.45-37.95.54-4.58c9.38-4.19 16.57-17.57 16.57-17.57l5.52-9.67c6-3.85 6.31 33.88 6.31 33.88l-6 89.09 19.88-5.49s39.62 154.28 36.23 165.66z"
      opacity={0.1}
    />
    <Path
      d="M1005.85 587.37c-27.35 13.58-77.06 1-77.06 1-5 4.6-18.17 11.38-18.17 11.38l-7.19-89c-4.58-12-6.38-74.87-6.38-74.87s5.78-46.91 8.18-51.7c.7-1.4.36-3.48-.47-5.72a72.38 72.38 0 01-4.38-33.49l1.92-16.31.53-4.57c9.39-4.2 16.58-17.58 16.58-17.58l5-8.76 9.2-16.14 4.36-7.64.74.67 5.65 5.12 6 5c7.83 6.6 21.36 18.22 28.34 25.33 6.14 6.26 8.08 30.61 8.64 48.94.37 12.07.15 21.53.15 21.53-6.19 10.19 10 92 10 92 3.77 15.81 8.36 114.81 8.36 114.81z"
      fill="#fff"
    />
    <Path
      d="M953.35 306.31s-18.77 35.73-16.59 49.31 8.38 28.95 5.39 32.54a11.05 11.05 0 01-8.79 4.39c-3 .2-11 5.79-11 6.39s-7.39.6-14 3.4-16.37 4.39-16.37 4.39-19-.6-20.77 1.2-3.59 12.57.2 21.16 8 15 11.18 16.17 23.36-5.59 39.73-7.19 34.14-14.57 34.14-14.57 19.57-7 23-18.77-4.19-76.46-4.19-76.46-5.76-30.15-21.93-21.96z"
      opacity={0.03}
    />
    <Path
      d="M950.95 303.31s-18.77 35.74-16.57 49.31 8.38 28.95 5.38 32.55a11 11 0 01-8.78 4.39c-3 .2-11 5.79-11 6.39s-7.39.6-14 3.39-16.37 4.39-16.37 4.39-19-.6-20.76 1.2-3.6 12.58.2 21.16 8 15 11.18 16.17 23.36-5.59 39.73-7.18 34.14-14.58 34.14-14.58 19.56-7 22.95-18.76-4.19-76.47-4.19-76.47-5.74-30.14-21.91-21.96z"
      opacity={0.03}
    />
    <Path
      d="M952.76 304.51s-18.77 35.74-16.57 49.31 8.38 28.95 5.39 32.54a11 11 0 01-8.79 4.4c-3 .2-11 5.79-11 6.38s-7.38.6-14 3.4-16.37 4.39-16.37 4.39-19-.6-20.77 1.2-3.59 12.58.2 21.16 8 15 11.18 16.17 23.36-5.59 39.73-7.19 34.14-14.57 34.14-14.57 19.57-7 23-18.77-4.14-76.46-4.14-76.46-5.84-30.1-22-21.96z"
      fill="#fff"
    />
    <Path
      d="M952.35 400.37s-15-3-9.78 2 5.19 9.38 11.58 9.18-1.8-11.18-1.8-11.18zM977.7 507.95s-6.78 4.59 6.19 15.17-6.19-15.17-6.19-15.17zM964.76 545.68c0 .6-2.4 22 6.58 27.35s-6.58-27.35-6.58-27.35z"
      opacity={0.1}
    />
    <Path d="M822.18 377.96c-7.24.25-22.88 2.46-14.77 17.59 7.17 13.39 19.22 4.44 26-2.35a25.55 25.55 0 00-11.23-15.24zM834.15 392.37zM833.5 393.08l.3-.31z" fill="#ffb0b1" />
    <Path
      d="M950.36 285.37c-7.68 5.25-14.12 9.68-15.38 10.6-3.44 2.55-10 17.52-14.23 25.16-3.37 6.15-14.32 7.73-18.45 8.12l.53-4.57c9.39-4.2 16.58-17.58 16.58-17.58l18.56-32.54 6.39 5.81 6 5z"
      opacity={0.1}
    />
    <Path
      d="M950.36 284.77c-7.68 5.25-14.12 9.68-15.38 10.61-3.44 2.54-10 17.51-14.23 25.15-3.37 6.15-14.32 7.73-18.45 8.12l.53-4.57c9.39-4.2 16.58-17.58 16.58-17.58l18.56-32.54 6.39 5.79s2.4 1.98 6 5.02z"
      fill="#dce7ff"
    />
    <Path d="M935.58 259.29a29.61 29.61 0 01-5.22 16.81 29.66 29.66 0 115.22-16.81z" fill="#ffb0b1" />
    <Path
      d="M987.34 359.04a26.36 26.36 0 01-9.57-10.28c-1.67-3.3-2.78-7.11-5.63-9.45-2.57-2.1-6-2.61-9.2-3.55-10.52-3.11-19.34-12.71-19.67-23.67-.16-5.16 1.45-10.31.72-15.42a17.08 17.08 0 00-3.34-7.95 27.37 27.37 0 00-2.89-3.11c-1.4-1.32-2.87-2.6-4.15-4a15.53 15.53 0 01-2.1-2.85 13.71 13.71 0 01-1.15-2.65c-2-6.12-.18-13.38-2.38-19.57l-.12-.34c-.83-2.2-2.52-4.4-4.87-4.57s-4.36 1.78-6.6 2.65c-4.69 1.82-9.75-1.28-13.66-4.44s-8.32-6.77-13.29-6.07c-3.29.47-5.89 2.71-8.92 3.87a12.5 12.5 0 01-2.11.61 29.65 29.65 0 0157.17 11.05 29.35 29.35 0 01-.65 6.19c.05.14.1.27.16.41 1.16 3 2.47 6.08 3.62 8.74l5.65 5.12 6 5c7.83 6.6 21.36 18.22 28.34 25.33 6.14 6.28 8.06 30.62 8.64 48.95z"
      opacity={0.1}
    />
    <Path
      d="M880.17 229.37c1.43-2.91 2.14-6.17 3.85-8.93 2.51-4 6.89-6.56 11.39-8.11 11.75-4.05 36.58-9.93 44 0 1.46 2 2.67 4.22 4.69 5.6 1.54 1.05 3.4 1.5 5.09 2.29 4.73 2.22 7.75 7.06 9.36 12s2.09 10.24 3.27 15.33c1.51 6.53 4.16 12.72 6.8 18.87 3.11 7.26 6.41 14.79 12.41 19.92 8.19 7 10 16.91 17.6 24.59 9 9.12 8.71 24.17 4.07 36.12-.61 1.57-1.3 3.21-1.06 4.88s1.48 3.19 2.65 4.52l4.92 5.55c-11.64 2.81-24.81-3.27-30.23-13.94-1.67-3.3-2.78-7.1-5.64-9.45-2.56-2.1-6-2.6-9.19-3.54-10.52-3.12-19.34-12.73-19.67-23.69-.16-5.15 1.45-10.3.72-15.4a17 17 0 00-3.35-8c-2.75-3.59-6.9-6-9.14-10-3.79-6.69-.91-15.38-3.64-22.56-.84-2.2-2.52-4.4-4.87-4.57s-4.36 1.78-6.61 2.65c-4.68 1.82-9.74-1.27-13.65-4.44s-8.32-6.77-13.3-6.06c-3.29.46-5.88 2.7-8.91 3.87-2.24.86-6.78 1.63-8.74-.26-4.14-3.81 5.45-13.68 7.18-17.24z"
      fill="#591d4b"
    />
    <Path
      d="M981.76 344.76c-1.68-3.3-2.78-7.1-5.64-9.44-2.56-2.1-6-2.61-9.2-3.55-10.51-3.11-19.33-12.72-19.67-23.68-.16-5.15 1.45-10.31.73-15.41a17.1 17.1 0 00-3.35-7.95c-2.76-3.59-6.91-6-9.14-10-3.79-6.68-.91-15.37-3.65-22.56-.83-2.19-2.52-4.39-4.86-4.57s-4.37 1.79-6.61 2.66c-4.68 1.82-9.75-1.28-13.65-4.44s-8.33-6.77-13.3-6.07c-3.29.47-5.89 2.71-8.91 3.87-2.24.86-6.79 1.64-8.75-.25-4.12-4 5.47-13.85 7.19-17.39 1.43-2.92 2.14-6.17 3.86-8.93.09-.15.19-.3.29-.45a15.88 15.88 0 00-3.29 3.74c-1.71 2.76-2.42 6-3.85 8.93-1.73 3.54-11.32 13.42-7.19 17.39 2 1.9 6.5 1.12 8.74.26 3-1.17 5.62-3.41 8.91-3.87 5-.71 9.4 2.9 13.3 6.06s9 6.26 13.66 4.44c2.24-.87 4.2-2.83 6.6-2.65s4 2.37 4.87 4.57c2.73 7.18-.15 15.87 3.64 22.56 2.24 3.93 6.39 6.39 9.14 10a17 17 0 013.35 8c.73 5.1-.88 10.25-.72 15.4.33 11 9.15 20.57 19.67 23.69 3.17.94 6.63 1.44 9.19 3.54 2.87 2.35 4 6.15 5.64 9.45 5.42 10.67 18.59 16.75 30.23 13.94l-2.32-2.62c-10.09.15-20.3-5.59-24.91-14.67z"
      opacity={0.1}
    />
    <Path d="M912.82 299.12c-1.31 2-5.06 12.24-8.19 21.18-2.93-1.14-5.59-8.41-5.59-8.41l15.62-22.22c1.6 2.2.55 5.85-1.84 9.45z" opacity={0.1} />
    <Path d="M913.42 298.52c-1.31 2-5.06 12.24-8.19 21.18-2.93-1.13-5.59-8.41-5.59-8.41l15.62-22.21c1.6 2.19.55 5.85-1.84 9.44z" fill="#dce7ff" />
    <Path d="M822.6 400.68l-8.66-27.31a2.55 2.55 0 011.66-3.21 2.56 2.56 0 013.2 1.66l8.66 27.28-.86 5.71z" fill="#be8b87" />
    <Path
      d="M814.76 370.97a2.56 2.56 0 013.21 1.66l8.66 27.28-.65 4.28.63.66.86-5.71-8.71-27.28a2.56 2.56 0 00-3.2-1.66 2.56 2.56 0 00-1.33 1 3.48 3.48 0 01.53-.23z"
      fill="#fff"
      opacity={0.1}
    />
    <Path fill="#efc8c4" d="M822.6 400.68l4.86-1.54-.71 4.68-.15 1.03-1.42-1.48-2.58-2.69z" />
    <Path d="M825.18 403.37a1 1 0 01.31-.26.44.44 0 01.47 0 1.24 1.24 0 01.17.27.86.86 0 00.62.41l-.15 1z" fill="#727a9c" />
    <Path d="M813.89 383.07s17.37-.1 13.28 7.29-10.48 8.28-10.48 8.28z" fill="#ffb0b1" />
    <Path
      d="M705.86 51.42h-.75c-29.84 0-56.23 15.79-71.41 39.09-15.18-23.3-41.57-39.09-71.41-39.09h-.75a85 85 0 00-84.19 84.95c0 27.81 12.18 67.27 35.93 99.74 45.25 61.87 120.42 116 120.42 116s75.17-54.12 120.41-116c23.76-32.47 35.93-71.93 35.93-99.74a85 85 0 00-84.18-84.95zm-10.73 189.45a16.85 16.85 0 01-15.67-10.82h-17.84a5.64 5.64 0 01-5.31-3.84l-5.48-16.51-17.34 60.59a5.61 5.61 0 01-5.38 4.05h-.35a5.54 5.54 0 01-5.2-4.64l-17.87-107.48-13.06 63.6a5.57 5.57 0 01-5.41 4.23h-25.13a5.59 5.59 0 110-11.17h20.73l18.5-85.51a5.61 5.61 0 0111 .46l18.25 109.64 15.54-54.21a5.5 5.5 0 015.23-4h.11a5.58 5.58 0 015.3 3.84l9.91 29.81h13.58a16.76 16.76 0 1115.92 22z"
      fill={props.primarycolor}
    />
  </Svg>
);
SvgMedicine.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
