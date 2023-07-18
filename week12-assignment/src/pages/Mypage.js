import React from 'react'
import { useMypageData } from '../hooks/useMypageData';

export const Mypage = () => {
    //custom Hook 사용
    const [data, loading] = useMypageData();
    if (loading) return (<div>로딩 중</div>)
    else{
        return (
            <div>
                <div>{data.name}</div>
                <div>{data.age}</div>
            </div>
        )
    }
}
