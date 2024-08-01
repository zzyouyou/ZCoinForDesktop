/// <reference types="vite/client" />

interface Window {
  // expose in the `electron/preload/index.ts`
  ipcRenderer: import('electron').IpcRenderer,
  service: {
    wssBA: {
      sendMessage:(method:string,params:Record<string,any>)=>any,
      connectWebSocket:()=>{}
    }
  }
}
