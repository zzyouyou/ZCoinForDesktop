import { useEffect, useState } from 'react';

enum E_TIME {
    '1m' = '1m',
    '3m' = '3m',
    '5m' = '5m',
    '15m' = '15m',
    '30m' = '30m',
    '1h' = '1h',
    '2h' = '2h',
    '4h' = '4h',
    '6h' = '6h',
    '8h' = '8h',
    '12h' = '12h',
    '1d' = '1d',
    '3d' = '3d',
    '1w' = '1w',
    '1M' = '1M',
}

// 返回参数示例：
// const data = {
//     "e": "continuous_kline",   // 事件类型
//     "E": 1607443058651,        // 事件时间
//     "ps": "BTCUSDT",           // 标的交易对
//     "ct": "PERPETUAL",         // 合约类型 
//     "k": {
//         "t": 1607443020000,      // 这根K线的起始时间
//         "T": 1607443079999,      // 这根K线的结束时间
//         "i": "1m",               // K线间隔
//         "f": 116467658886,       // 这根K线期间第一笔更新ID
//         "L": 116468012423,       // 这根K线期间末一笔更新ID
//         "o": "18787.00",         // 这根K线期间第一笔成交价
//         "c": "18804.04",         // 这根K线期间末一笔成交价
//         "h": "18804.04",         // 这根K线期间最高成交价
//         "l": "18786.54",         // 这根K线期间最低成交价
//         "v": "197.664",          // 这根K线期间成交量
//         "n": 543,                // 这根K线期间成交笔数
//         "x": false,              // 这根K线是否完结(是否已经开始下一根K线)
//         "q": "3715253.19494",    // 这根K线期间成交额
//         "V": "184.769",          // 主动买入的成交量
//         "Q": "3472925.84746",    // 主动买入的成交额
//         "B": "0"                 // 忽略此参数
//     }
// }

// 自定义Hook：useWebSocket
export const useFetchKLine = (coin: string, time?: E_TIME) => {
    const [ws, setWs] = useState<WebSocket>();
    const [kline, setKline] = useState({});

    useEffect(() => {
        const ws = new WebSocket(`wss://fstream.binance.com/ws/${coin}@kline_${time ?? E_TIME['15m']}`);
        setWs(ws);

        ws.onopen = () => {
            console.log('WebSocket connection opened');
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data); // 解析消息
                if (data) {
                    setKline(data.k); // 更新状态
                }
            } catch (err) {
                console.error('Error parsing message:', err);
            }
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.warn('WebSocket connection closed');
            ws!.close(); // 出现错误时关闭连接
        };

        // 清理函数，在组件卸载时关闭WebSocket连接
        return () => {
            ws.close();
        };
    }, [coin]); // 依赖项：coin变化时重新建立连接

    return { kline, ws }; // 返回价格和错误信息
};