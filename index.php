<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AJAX SEARH</title>
    <script src="main.js" async></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.min.css">
</head>
<body>

    <div class="columns has-background-link ">
        <div class="column is-4 is-offset-4">
            <input class="search input" type="text" name="word" placeholder="Введите слово">
            <button class="btn__translate button "> Поиск по магазину </button>
            <select name="" id="" class="btn__sort select">
                <option value="ASC"> От дешевого к дорогому</option>
                <option value="DESC"> От дорогого к дешевому</option>
            </select>
       
        <!-- сюда будет писаться результат -->
        <!-- сделать сортировку по рейтингу -->
        <!-- добавить картинки товаров -->
        </div>
    
        </div>
        <div class="columns">
        <div class="column is-4 is-offset-4">
            <div class="result"></div> 
            </div>
        </div>
</body>
</html>