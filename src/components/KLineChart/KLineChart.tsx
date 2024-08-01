import React from 'react';
import {
    ComposedChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
    Bar,
    ResponsiveContainer,
} from 'recharts';

// 示例数据
const data = [
    { date: '2022-01-01', open: 100, close: 120, high: 130, low: 90 },
    { date: '2022-01-02', open: 120, close: 110, high: 125, low: 100 },
    { date: '2022-01-03', open: 110, close: 150, high: 160, low: 100 },
    { date: '2022-01-04', open: 150, close: 140, high: 155, low: 130 },
    // 更多数据...
];

const KLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* K线图的蜡烛图部分，使用 Bar 实现开盘和收盘 */}
                <Bar
                    dataKey="open"
                    fill="#8884d8"
                    isAnimationActive={false}
                    width={10}
                />
                <Bar
                    dataKey="close"
                    fill="#82ca9d"
                    isAnimationActive={false}
                    width={10}
                />
                {/* 高点和低点的线 */}
                <Area
                    type="monotone"
                    dataKey="high"
                    stroke="#ff7300"
                    fillOpacity={0}
                    strokeWidth={2}
                />
                <Area
                    type="monotone"
                    dataKey="low"
                    stroke="#ff0000"
                    fillOpacity={0}
                    strokeWidth={2}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default KLineChart;