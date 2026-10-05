import "@material-tailwind/react";

declare module "@material-tailwind/react" {
  export interface EventCaptureProps {
    placeholder?: unknown;
    onResize?: unknown;
    onResizeCapture?: unknown;
    onPointerEnterCapture?: unknown;
    onPointerLeaveCapture?: unknown;
  }
}