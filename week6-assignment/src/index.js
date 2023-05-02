document.getElementById("car-names-submit").onclick = function(){
    const cars = document.getElementById('car-names-input');
    var cars_str = cars.value;
    document.getElementById("racing-count-submit").onclick = function(){
        const moves = document.getElementById('racing-count-input');
        // console.log(cars_str);
        // console.log(moves.value);

        if ((moves.value)<=0) {
            alert("1회 이상의 횟수를 입력해주세요.");
            history.go(0);
        }

        /* result 아래에 div 태그 추가 */
        var result = document.querySelector('#result');
        var div = document.createElement('div');
        div.id = 'result_make'
        result.after(div);

        /* 콤마를 포함하고 있는 경우 */
        if (cars_str.includes(',')){
            //console.log(moves.value);
            const car_name_array = cars_str.split(',');
            // console.log(car_name_array);
            const random_count_array = [];
            car_name_array.forEach((car_name) => {
                if (car_name.length > 5) { 
                    alert("자동차 이름을 5자 아래로 입력해주세요.");
                    history.go(0);
                }
                random_count_array.push(makeRandomAndCount(moves.value));
            });

            var maxValue = Math.max.apply(null, random_count_array);
            const winner_array = [];
            for (var i=0;i<car_name_array.length;i++){
                if (random_count_array[i]==maxValue) { winner_array.push(car_name_array[i]); }
            }

            /*  결과 추가 */
            for (var i=0; i<car_name_array.length; i++){
                var div_content = document.createElement('div');
                div_content.innerText = car_name_array[i] + ":" + ("-".repeat(random_count_array[i]));
                document.querySelector('#result_make').appendChild(div_content);
            }

            /* 우승자 추가 */
            var winner_str = "";
            if (winner_array.length == 1) { winner_str = winner_array[0]; }
            else {
                winner_str = winner_array[0];
                for (var i=0; i<winner_array.length-1; i++) {
                    winner_str = winner_str + "," + winner_array[i+1];
                }
            }
            document.getElementById('racing-winners').innerHTML = winner_str;
        }

        /* 콤마를 포함하고 있지 않은 경우 */
        else {
            //console.log(cars_str);
            if (cars_str.length > 5) { 
                alert("자동차 이름을 5자 아래로 입력해주세요."); 
                history.go(0);
            }

            var div_content = document.createElement('div');
            div_content.innerText = cars_str + ":" + ("-".repeat(makeRandomAndCount(moves)));
            document.querySelector('#result_make').appendChild(div_content);

            document.getElementById('racing-winners').innerHTML = cars_str;
        }

        return false;
    }

    return false;
} 

function makeRandomAndCount(moves){
    var count = 0;
    for (var i=0;i<moves;i++){
        if (Math.floor((Math.random() * 9)) >= 4) {
            count += 1;
        }
    }
    return count;
}