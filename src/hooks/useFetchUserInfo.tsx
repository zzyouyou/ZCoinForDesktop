// import { baseWSS } from '@/services/baseWSS';
// import { useEffect, useState } from 'react';

// // 自定义Hook：useWebSocket
// export const useFetchUserInfo = () => {
//     const [price, setPrice] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {

//         let ws: WebSocket | null
//         (async () => {
//             const listenKey = await fetch('https://fapi.binance.com/fapi/v1/listenKey', {
//                 method: 'post',
//                 body: {
//                     apiKey: 'asdsa'
//                 }
//             });
//             console.log(listenKey);
//             // baseWSS()
//         })()

//         // 清理函数，在组件卸载时关闭WebSocket连接
//         return () => {
//             ws?.close();
//         };

//     }, []); // 依赖项：coin变化时重新建立连接

//     return { price, error }; // 返回价格和错误信息
// };