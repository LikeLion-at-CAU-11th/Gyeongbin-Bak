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

    const selectedInfo = data[3];

    const title_h2 = document.createElement('h2');
    title_h2.innerText = selectedInfo.galTitle;
    const text = document.createElement('div');
    text.innerText=`
    날짜: ${parsingDate(selectedInfo.galCreatedtime)}
    촬영자: ${selectedInfo.galPhotographer}
    키워드: ${selectedInfo.galSearchKeyword}`;

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

function parsingDate(strDate){
    //ex. 20230101...
    //substr("시작 위치", "길이")
    var resultDate = `${strDate.substr(0,4)}/${strDate.substr(4,2)}/${strDate.substr(6,2)}`;
    return resultDate;
}

getData();