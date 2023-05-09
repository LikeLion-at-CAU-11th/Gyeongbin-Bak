const container = document.getElementById('d_container');

async function getData(){
    // const random = Math.floor(Math.random() * 100 + 1);
    const url =`https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=1&MobileOS=ETC&MobileApp=test&arrange=A&_type=json&serviceKey=mBmqB6diypnPXusQLzf7Ws2LWivPYoyvKkLKaN9KqhChSCExL%2FB%2FJKOfkkRXmeNvWXZzM2WHAEiGz5ID7YNGAg%3D%3D`;

    const fetchData = await fetch(url);
    //console.log(fetchData);

    const toJson  = await fetchData.json();
    //console.log(toJson);

    const data = await toJson.response.body.items.item;
    //console.log(data);

    /* 불러온 데이터에서 해당 정보에 맞는 index 가져오기 */
    const selectedInfo = data[0];

    const title_h2 = document.createElement('h2');
    title_h2.innerText = selectedInfo.galTitle;
    const text = document.createElement('div');
    text.innerText=`
    날짜: ${parsingDate(selectedInfo.galCreatedtime)}
    촬영자: ${selectedInfo.galPhotographer}
    키워드: ${selectedInfo.galSearchKeyword}`;

    /* 홈 화면으로 가는 button 추가 */
    const button = document.createElement('button');
    button.innerText='홈으로';
    button.onclick = function () {
        // alert("test");
        window.location.href = `../index.html`;
    };

    container.appendChild(title_h2);
    container.appendChild(text);
    container.after(button);
   
}


/* 촬영날짜 관련 파싱 함수 추가 */
function parsingDate(strDate){
    //ex. 20230101...
    //substr("시작 위치", "길이")
    var resultDate = `${strDate.substr(0,4)}/${strDate.substr(4,2)}/${strDate.substr(6,2)}`;
    return resultDate;
}

getData();