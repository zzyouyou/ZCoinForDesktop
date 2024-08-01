import { useFetchCoinPrice } from '@/hooks/useFetchCoinPrice'
import { useFetchKLine } from '@/hooks/useFetchKLine';
import { COIN_TYPE, REQ_METHOD } from '@/interface/serviceInterface'
import React, { useState, useEffect } from 'react'

export const BTCPanel = () => {
    const { price: ETH } = useFetchCoinPrice(COIN_TYPE.ETHUSDT);
    const { price: BTC } = useFetchCoinPrice(COIN_TYPE.BTCUSDT);
    const { price: BNB } = useFetchCoinPrice(COIN_TYPE.BNBUSDT);
    // const { kline } = useFetchKLine(COIN_TYPE.ETHUSDT);
    // console.log('kline: ', kline);
    return (
        <div className="">
            <div className='flex gap-2'>
                <div>ETH</div>
                <div>{ETH}</div>
            </div>
            <div className='flex gap-2'>
                <div>BTC</div>
                <div>{BTC}</div>
            </div>
            <div className='flex gap-2'>
                <div>BNB</div>
                <div>{BNB}</div>
            </div>
        </div>
    )
}
