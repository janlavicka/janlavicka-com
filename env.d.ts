/// <reference types="vite/client" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: string;
    }
  }
}

declare global {
  interface Window {
    env: {
      APP_URL: string;
    };
  }
}

export {};
