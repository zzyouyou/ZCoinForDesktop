export const baseWSS = (url:string,callback:any) => {
            const ws = new WebSocket(url);

            ws.onopen = () => {
                console.log('WebSocket connection opened');
            };

            ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data); // 解析消息
                    if (data) {
                        console.log('Received data:', data);
                        callback(data); // 更新状态
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
}