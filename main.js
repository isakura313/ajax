let result = document.querySelector(".result");

let btn__translate = document.querySelector('.btn__translate');
let btn__sort = document.querySelector(".btn__sort");
var input = document.querySelector("input");

function defaultQuery(){
    let xhr = new XMLHttpRequest(); // создается новый объект запроса
    xhr.open('GET', `http://localhost:8080/ajax/handler2.php?sort=ASC`); // тут может SORT BY
    xhr.send(); // послать сам запрос

    let that = this; // контекст потом переписать на стрелочные функции
    xhr.addEventListener("load", function(){ 

        let norm_data = xhr.responseText; // ответ от нашего сервиса
        norm_data = JSON.parse(norm_data);
        console.table(norm_data);

        // draw_data(result, norm_data);
        // let data = JSON.parse(norm_data);
        draw_data(result, norm_data);
        // setTimeout(() => {
        //     typeof(norm_data);
        //     // console.log(norm_data[0]);
        //     draw_data(result, norm_data);
        // }, 2000);
    });

}
defaultQuery();

btn__translate.addEventListener("click", function(){

    this.disabled = true; // пока на время выключаем кнопку чтобы у нас не было множество запросов в одно время
    let xhr = new XMLHttpRequest(); // создается новый объект запроса
    xhr.open('GET', `http://localhost:8080/ajax/handler.php?word=${input.value}`); // тут может SORT BY
    xhr.send(); // послать сам запрос

    let that = this; // контекст
    xhr.addEventListener("load", function(){ 

        result.innerHTML = xhr.responseText; // ответ от нашего сервиса

        that.disabled = false;
    });
});


//  пошло дублирование кода - значит можно соорудить класс как шаблон
btn__sort.addEventListener("change", function(){

    this.disabled = true; // пока на время выключаем кнопку чтобы у нас не было множество запросов в одно время
    let xhr = new XMLHttpRequest(); // создается новый объект запроса
    xhr.open('GET', `http://localhost:8080/ajax/handler2.php?sort=${btn__sort.value}`); // тут может SORT BY
    console.log(btn__sort.value);
    xhr.send(); // послать сам запрос

    let that = this; // контекст
    xhr.addEventListener("load", function(){ 

        let norm_data = xhr.responseText; // ответ от нашего сервиса
        // norm_data = JSON.parse(norm_data);
        console.table(norm_data);

        // draw_data(result, norm_data);
        result.innerHTML =  JSON.parse(norm_data);
        // setTimeout(() => {
        //     typeof(norm_data);
        //     // console.log(norm_data[0]);
        //     draw_data(result, norm_data);
        // }, 2000);
        that.disabled = false;
    });
});

function draw_data(enterElement, obj){
    for (let i = 0; i < obj.Tags.length; i++) {
        enterElement.insertAdjacentHTML("afterbegin",
        `<img src="${obj.Img[i]}">  <br/>
            <p class="subtitle">${obj.Tags[i]} </p>
            <p> рейтинг у товара ${obj.Price[i]} </p>
        `
        )
        
    }
}


//fetch - обычно используется с api 
//api может быть на любом языке 


fetch('https://gist.githubusercontent.com/isakura313/b705fd423e996a56b35b18b876458f18/raw/48023a7ffa598585f80303557e68b2011f776849/main.json')
  .then(response => response.json())
  .then(symbol_colors => console.log(symbol_colors));