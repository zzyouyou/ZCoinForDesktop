import { useEffect, useState } from 'react';

// 自定义Hook：useWebSocket
export const useFetchCoinPrice = (coin: string) => {
    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ws = new WebSocket(`wss://fstream.binance.com/ws/${coin}@aggTrade`);

        ws.onopen = () => {
            console.log('WebSocket connection opened');
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data); // 解析消息
                if (data) {
                    setPrice(data.p); // 更新状态
                }
            } catch (err) {
                console.error('Error parsing message:', err);
                setError(err as any);
            }
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
            setError(error as any);
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

    return { price, error }; // 返回价格和错误信息
};