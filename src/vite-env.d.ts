/// <reference types="vite/client" />
// src/vite-env.d.ts

interface Window {
    umami: {
      track: (eventName: string) => void;
    };
  }
  