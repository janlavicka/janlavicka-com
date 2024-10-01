/// <reference types="@remix-run/node" />
/// <reference types="vite/client" />

declare global {
  interface Window {
    env: {
      APP_URL: string;
    };
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: string;
    }
  }
}

export {};
