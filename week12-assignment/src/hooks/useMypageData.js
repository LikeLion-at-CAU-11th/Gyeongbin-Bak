import { useState, useEffect } from "react";
import { getMyPage } from "../apis/mypage";

export const useMypageData = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getMyPage().then((res)=>{
            setData(res);
            setLoading(false);
        })
    }, []);

    return [data, loading];
}