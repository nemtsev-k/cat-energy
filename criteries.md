# Критерии

## Базовые

### Разметка

**Б1. Выполнена HTML-разметка всех страниц проекта и всех элементов на этих страницах.**

Этот критерий говорит о том, что все страницы проекта и все скрытые и дополнительные элементы должны быть размечены. Например, всплывающие и появляющиеся элементы, модальные окна, все слайды в слайдере.

**Б2. Грубые ошибки в разметке отсутствуют.**

**Грубые ошибки:**

* Ссылки сделаны не тегом \<a>, а другими тегами;
* Использование строчных элементов для создания крупных (сеточных) блоков;
* Абзацы сделаны не тегами \<p>, а \<br>\<br>.

**Негрубые ошибки:**

* Отсутствие семантических тегов \<header>, \<footer>, \<section> и других.

**Важно:** тег \<a> — элемент c «прозрачной» моделью содержимого. Поэтому если \<a> вложен в элемент с фразовым содержимым, например в <span>, то внутри самого \<a> может быть только фразовый контент. А если \<a> вложен в элемент с потоковым содержимым, например в \<div>, то и содержимое у \<a> может быть потоковое, включая другой \<div>.

Поэтому в ссылку можно включать целые секции, если \<a> вложен в потоковый блок:

**Верно:**

```
<aside>
  <h2>Ограниченные предложения</h2>
  <a href="/buy">
    <section>
      <figure>
        <img src="image.jpg" alt="">
        <figcaption>
          Набор для путешествий «Baxter of California»
        </figcaption>
      </figure>
      <p>Всего за 100 рублей!</p>
    </section>
  </a>
</aside>
```

**Неверно:**

```
<span>
  <a href="/buy">
    <section>
      <h2>Акция!</h2>
      <p>Всего за 100 рублей!</p>
    </section>
  </a>
</span>
```

**Б3. Документ проходит проверку на валидность https://validator.w3.org/nu/.**

**Б4. В разметке отсутствует дублирование кода для одного и того же элемента, с помощью которого элемент отображается в разных местах страницы на разных версиях: мобильной, десктопной, планшетной. Этот критерий не касается элементов, которые скрываются или показываются в разных версиях.**

**Неверно:**

```
<div class="block block--for-mobile">
  <h2 class="block__title">Заголовок</h2>
  <p class="block__text">Произвольный текст</p>
</div>

<div class="block block--for-desktop">
  <h2 class="block__title">Заголовок</h2>
  <p class="block__text">Произвольный текст</p>
</div>
```

**Б5. Отсутствуют типовые ошибки в разметке по методологии.**

Отсутствуют следующие ошибки методологии БЭМ:

* Создание элемента без родительского блока. Это означает, что не может быть элемента block__element, если выше по дереву нет DOM-элемента с именем block.

* Создание элемента для элемента.

**Неверно:**

```
    <div class="block__element1">
      <div class="block__element1__element2"></div>
    </div>
```

**Верно:**

```
    <div class="block__element1">
      <div class="block__element2"></div>
    </div>
```

* Создание модификатора для модификатора.

**Неверно:**

```
    <div class="block block--mod1--mod2"></div>
```

**Верно:**

```
    <div class="block block--mod1 block--mod2"></div>
```

* Использование модификатора без блока или элемента, который он модифицирует (при использовании модификатора у тега должно быть как минимум два класса: класс блока/элемента и класс модификатора).

**Неверно:**

```
    <div class="block--mod"></div>
```

**Верно:**

```
    <div class="block block--mod"></div>
```

Допустимые стили именования БЭМ-сущностей: [Международный](https://ru.bem.info/methodology/naming-convention/#%D0%A1%D1%82%D0%B8%D0%BB%D1%8C-two-dashes): block__elem--mod

**Б32. Названия полей форм привязаны к своим полям с помощью \<label>.**

Для улучшения взаимодействия пользователя с элементами форм должна быть реализована активация поля при нажатии на его описание. Для этого необходимо связывать элемент формы с его описанием, используя тег \</label> и идентификаторы.

**Верно:** элемент формы radio связан с его описанием через идентификатор.

```
<input type="radio" id="spb">
<label for="spb">Санкт-Петербург</label>
```

**Верно:** элемент формы radio и подпись обёрнуты в \<label>

```
<label>
  <input type="radio"> Санкт-Петербург
</label>
```

**Неверно:** описание никак не связано с элементом формы.

```
<input type="radio" id="spb"> Санкт-Петербург
```

### Стилизация

**Б6. Раскладка блоков на странице сделана на флексах и гридах**

Гриды используются для основных структурных блоков страницы (шапка, главный контент, подвал) и для создания колонок в контенте страниц.

Пример реализации стики-футера:

```
<html class="page" lang="ru">
  <body class="page-body">
    <header></header>
    <main></main>
    <footer></footer>
  </body>
</html>

.page {
  height: 100%;
}

.page-body {
  min-height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
}
```

Пример колонок в контенте страницы

```
<main class="page-catalog">
  <h1 class="page-title">
    Cредства для ухода
  </h1>
  <ul class="breadcrumbs">
    <!-- … -->
  </ul>
  <section class="filters">
    <!-- … -->
  </section>
  <section class="catalog">
    <!-- … -->
  </section>
</main>

.page-catalog {
  display: grid;
  grid-template-columns: 180px 1fr;
  align-content: start;
}

.page-catalog .page-title {
  grid-column: 1 / -1;
}

.page-catalog .breadcrumbs {
  grid-column: 1 / -1;
}
```

Для остальной раскладки используются флексы: навигация, карточки, пагинация, хлебные крошки и другие.

```
.site-navigation {
  display: flex;
  flex-wrap: wrap;
  width: 620px;
}
```

Использование гридов для основных структурных блоков и флексов для всех остальных — это рекомендация, а не требование. Главное — разумно использовать возможности и флексов, и гридов.

**Б7. В CSS отсутствует !important.**

Допускается использование !important при обосновании его необходимости в комментарии.

**Б8. Подключены правильные шрифты, их размеры, цвет и толщина равны соответствующим параметрам в макетах и техническом задании.**

Необходимо, чтобы в личном проекте использовались именно те шрифты, которые указаны в макете. При этом их размеры, цвета, и жирность должны быть равны соответствующим параметрам в макетах и техническом задании.

**Б9. Нестандартные шрифты подключены локально. Формат шрифтов должен быть woff2 и woff.**

Все нестандартные шрифты должны быть подключены в CSS из папки fonts с помощью правила @font-face. Подключаемые шрифты должны быть в форматах woff2 и woff.

Подключение шрифтов с помощью внешних ресурсов, таких как Google Fonts считается ошибкой.

Перечисление шрифтов при подключении должно начинаться с woff2, а следом за ним уже woff. Например:

```
@font-face {
  font-family: "Oswald";
  src: url("../fonts/oswaldregular.woff2") format("woff2"),
       url("../fonts/oswaldregular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

В таком случае woff скачиваться не будет, если браузер поддерживает woff2.

**Б10. Указаны альтернативные варианты шрифта и тип семейства в конце перечисления font-family.**

Альтернативный веб-безопасный шрифт и тип семейства необходимо указывать для того, чтобы в случае отсутствия основного шрифта изменения внешнего вида шрифтов на странице были минимальны.

Порядок шрифтов следующий:

* Основной шрифт;
* Веб-безопасный;
* Тип шрифта.

Список веб-безопасных шрифтов можно [посмотреть здесь](http://www.cssfontstack.com/).

**Важно:** альтернативный веб-безопасный шрифт должен быть такого же типа, что и основной, но подбирать максимально похожий шрифт не нужно.

**Верно:** указан альтернативный веб-безопасный шрифт и его тип семейства.

```
body {
  font-family: "PT Sans Narrow", "Arial", sans-serif;
}

/* Кому-то нравится Arial, кому-то Tahoma */
body {
  font-family: "PT Sans Narrow", "Tahoma", sans-serif;
}
```

**Неверно:** указан только основной шрифт.

```
body {
  font-family: "PT Sans Narrow";
}
```

**Неверно:** указан только основной шрифт и тип семейства, альтернативный веб-безопасный шрифт отсутствует.

```
body {
  font-family: "PT Sans Narrow", sans-serif;
}
```

**Неверно:** Times New Roman — шрифт с засечками, а основной шрифт — без засечек.

```
body {
  font-family: "PT Sans Narrow", "Times New Roman", sans-serif;
}
```

Б11. При наполнении контентом (как в макете) элементы каждой версии страницы (мобильной, планшетной и десктопной) соответствуют макету.

Вёрстка проверяется на соответствие макету только на указанных вьюпортах:

* Седона:
  * 320px — мобильная версия,
  * 768px — планшетная версия,
  * 1200px — десктопная версия.
* Кэт энерджи:
  * 320px — мобильная версия,
  * 768px — планшетная версия,
  * 1440px — десктопная версия.
* Мишка:
  * 320px — мобильная версия,
  * 768px — планшетная версия,
  * 1150px — десктопная версия.

Размеры контентной области определены крайними направляющими в макетах. Области, которые выходят за крайние направляющие (например, фоновые изображения и интерактивные карты), должны подстраиваться под ширину экрана/вьюпорта и упираться в его границы.

**Важно:** на любом брейкпоинте не должно быть горизонтальной прокрутки страницы.

При проверке допускаются:

* Вертикальная погрешность не более 10 пикселей, горизонтальная погрешность не более 5 пикселей;
* Различия в отображении шрифтов, связанные со сглаживанием на различных платформах.

Для проверки страниц на соответствие макету следует пользоваться расширением для браузеров Pixel Perfect, прозрачным окном из Zeplin.io или библиотекой Pixel Glass. Проверка должна осуществляться при 100% масштабе системы.

### CSS-препроцессор

**Б12. Использован CSS-препроцессор.**

Писать CSS-код можно только с помощью CSS-препроцессора. Можно использовать: Less или Sass.\
Стилевой код, написанный без препроцессора, является ошибкой.

**Б13. Код стилей должен быть разбит на несколько частей.**

Используя CSS-препроцессор, нужно разделить код таким образом, чтобы каждый блок был в своём файле. Для каждого БЭМ-блока нужно создать отдельный файл стилей.

Исключение возможно для минимума глобальных стилей (стилизация по тегам, они должны быть описаны в одном файле), для CSS-нормализатора и для селекторов модульной сетки.

Все файлы должны импортироваться в главный стилевой файл, который будет компилироваться в CSS-файл.

Вариант **верного** разбиения файла стилей:

```
less/
  normalize.less
  grid.less
  blocks/
    block1.less
    block2.less
    …
  style.less
```

Вариант **неверного** разбиения файла стилей:

```
less/
  normalize.less
  global.less
  index-page.less
  header.less
  photo-page.less
  style.less
```

Вариант **неверного** содержания файла header.less со стилями блока. Внутри файла с блоком header находятся стили другого блока — logo:

```
.header {
  padding: 20px;
}

.header__top {
  background-color: #cccccc;
}

.logo {
  width: 200px;
}
```

### Адаптивность

**Б14. Выполнена вёрстка трёх состояний каждой страницы: мобильной, планшетной и десктопной.**

Сетка в промежутках между основными точками может быть фиксированной или резиновой.

**Важно:** вне указанных точек вёрстка не должна «разваливаться»:

* все элементы продолжают располагаться по сетке, заданной в макете;
* блоки не выпадают из родителей и из общего центрирующего блока;

**Б15. В разметке есть правильный вьюпорт тег.**

Адаптивность должна работать на планшетах и мобильных устройствах. То есть не только при изменении ширины окна браузера.

**Б16. Для микросеток использованы флексы или гриды.**

Следующие компоненты должны быть реализованы с помощью флексов или гридов:

* Седона:
  * разделы формы, поля и подписи формы на странице отзыва;
  * раскладка фотографий на странице «Фото и видео»;
  * блок описания фотографии (название, автор, лайки) на странице «Фото и видео».
* Мишка:
  * шапка сайта (лого, основное меню, поиск, корзина, новые поступления, распродажа, доставка);
  * раскладка товаров и блок описания товара (название, описание, цена, корзина) на странице «Каталог товаров».
* Кэт энерджи:
  * блок «Живой пример» на главной странице;
  * разделы формы, поля и подписи формы на странице «Подбор программы»;
  * раскладка товаров на странице «Каталог продукции».
  * блок «Дополнительные товары» на странице «Каталог продукции»

**Б17. Выполнена ретинизация растровой графики.**

Графика должна быть подготовлена как минимум для двух вариантов экранов: с обычной и двойной плотностью пикселей. Обязательны для ретинизации следующие компоненты:

* Седона:
  * задний фон в промоблоке под главным меню на всех страницах;
  * фоны (или изображения) в промоблоках «Настоящий городок» и «Там есть Мост Дьявола» на главной странице;
  * контентные изображения на странице «Фото и видео».
* Мишка:
  * задний фон в промоблоке на главной странице;
  * изображение товара недели на главной странице;
  * задний фон в блоке отзывов на главной странице;
  * контентные изображения товаров в каталоге.
* Кэт энерджи:
  * задний фон и изображение товара в промоблоке под главным меню на главной странице;
  * изображения котов в блоке «Живой пример» на главной странице;
  * контентные изображения товаров в каталоге;
  * задний фон в блоке «Дополнительные товары» в каталоге.

**Б19. Логотип должен адаптироваться.**

Логотип должен адаптироваться к мобильному, планшетному и десктопному состоянию проекта.

**Б20. Выполнено кадрирование контентных изображений.**

С помощью тега \<picture> выполнено кадрирование контентных изображений:

* Седона:
  * на странице «Фото и видео».
* Кэт энерджи:
  * на странице «Каталог продукции».
* Мишка:
  * на странице «Каталог товаров».

Кадрирование в данном случае подразумевает загрузку разных фотографий на разном разрешении экрана.

Например:

```
<picture>
  <source media="(min-width: 1200px)" srcset="img/photo-1-desktop.jpg">
  <source media="(min-width: 768px)" srcset="img/photo-1-tablet.jpg">
  <img src="img/photo-1-phone.jpg" alt="Пример">
</picture>
```

### Графика

**Б18. Форматы графики.**

Выбран подходящий формат изображений. Например:

* JPEG для фотографий;
* SVG для векторных изображений;
* PNG для всех прочих.

Использование подходящих форматов изображений важно для того, чтобы изображения отображались без погрешностей и имели оптимальный размер при загрузке.

### Оптимизация

**Б21. «Нежная» ретинизация.**

При ретинизации изображений учитывается плотность пикселей устройства пользователя и возвращаются разные изображения. Для контентных изображений должен быть использован srcset, а для фонов — медиавыражения.

Например, ретинизация контентного изображения:

```
<img src="img/photo-1-phone@1x.jpg"
    srcset="img/photo-1-phone@1x.jpg 1x, img/photo-1-phone@2x.jpg 2x"
    alt="Пример">
```

Ретинизация фонового изображения:

```
.page-header__logo {
  background-color: #000000;
  background-image: url("img/bg-header@1x.jpg");
}

@media (min-resolution: 2dppx) {
   .page-header__logo {
    background-image: url("img/bg-header@2x.jpg");
    background-size: 1338px auto;
  }
}
```

### Сборка проекта

**Б22. Процесс сборки личного проекта настроен с помощью Gulp.**

**Б23. Все зависимости проекта должны быть указаны в файле package.json. Команда npm ci должна установить всё необходимое для того, чтобы сборка проекта работала.**

**Б24. Сборка проекта запускается командами build и start:**

* npm run build — запускает сборку проекта;
* npm run start — запускает сборку проекта build, а после запускает server.

Также при сборке не должно возникать никаких ошибок.

**Б25. В результате сборки должна получаться папка build со всеми необходимыми файлами.**

Особенности сборки:

* папка build должна находиться в корне проекта;
* папка build должна автоматически создаваться в момент сборки;
* в папке build должна быть папка css с минифицированным стилевым файлом с префиксами;
* в папке build должна быть папка fonts в которой лежат только шрифты в формате woff и woff2;
* в папке build должна быть папка img в которой лежат только оптимизированные изображения и собранные спрайты;
* HTML-файлы проекта должны лежать в корне папки build.

**Б26. Папка build со всем её содержимым не должна попадать в Гитхаб.**

Это значит, что папка build должна находиться в файле .gitignore.

### Разное

**Б27. Вёрстка идентично отображается в последних версиях браузеров Chrome, Firefox, Safari.**

При проверке этого критерия необходимо смотреть на размеры и расположение блоков, внешнее сходство с макетом. Проверять работу анимации, если такая имеется. Допускаются небольшие отличия в отображениях шрифтов.

**Важно:** обязательно проверить вёрстку в браузерах: Chrome, Firefox, Safari (только для пользователей macOS).

Пользователям Windows тестировать вёрстку в Safari не надо.
Б28. Единообразное написание и форматирование кода в HTML, файлах CSS-препроцессора и JavaScript (включая файлы автоматизации).

Критерий рассматривает единообразие в написании кода:

* используется один тип кавычек: в одном языке (HTML, CSS или JS) должны использоваться только кавычки определённого типа (двойные или одинарные). Однако между языками тип кавычек может отличаться;
* если размер отступа в два пробела, то таким он должен быть везде;
* названия классов должны быть оформлены единообразно;
* свойства, которые поддерживают несколько наборов значений (например, множественные фоны и множественные тени, нужно делать в одном формате: однострочном или многострочном).

Для поддержания единообразия в коде используйте [EditorConfig](https://github.com/htmlacademy/codeguide/blob/master/.editorconfig).

**Важно:** этот критерий учитывает именно единообразие, а не стиль написания и форматирования кода. Единообразие кодовой базы помогает всем участникам команды работать в одинаковых условиях.

**Правильно.** Код написан в одном стиле.

```
<section class="news">
  <h2 class="news-title">Новости</h2>
</section>

<section class="news">
  <h2 class="news-title">Галерея</h2>
</section>
```

**Неправильно.** Одинаковые элементы разметки имеют разные отступы и переносы.

```
<section class="news-title">
  <h2 class="news-title">
    Новости
  </h2>
</section>

<section class="news-title"><h2 class="news-title">Галерея</h2></section>
```

**Правильно.** Цвет в разных блоках используется в одинаковой нотации.

```
.news {
  color: #000000;
}

.news-title {
  color: #ff0000;
  background-color: #ffffff;
}
```

**Неправильно.** Один и тот же цвет написан в разных нотациях.

```
.news {
  color: red;
}

.news-title {
  color: rgb(255, 0, 0);
  background-color: #ffffff;
}
```

**Б29. Отсутствует транслит в названиях классов, атрибутах, переменных CSS-препроцессора, названиях примесей и так далее.**

Для названий необходимо использовать английские слова и термины.

Верно: используются только английские слова.

```
.login-button {}
.container {}
.footer {}
```

Неверно: транслит с русского языка.

```
.knopka-vxoda {}
.kontainer {}
.podval {}
```

**Б30. Мобильное меню должно быть работоспособным при отключённом JavaScript.**

При реализации без JS:

1. Меню должно быть открыто по умолчанию и находиться в потоке (то есть не перекрывать остальной контент).
2. Кнопки, которые работают на JS, должны быть скрыты.
3. В комментариях HTML-файлов должны быть указаны классы (или класс), которые переключают состояния меню и внешний вид кнопки.

В HTML- и CSS-коде должны быть предусмотрены элементы и правила для трёх возможных состояний:

1. Открытое меню в потоке при отключённом JavaScript.
2. Открытое меню вне потока при включённом JavaScript.
3. Закрытое меню.

Скрипт открытия и закрытия меню писать необязательно. Но если он написан, то работать должен так:

1. При инициализации скрипта меню должно убираться из потока (если в макете открытое меню не в потоке) и закрываться.
2. При клике на гамбургер меню открывается, появляется кнопка-закрытие, убирается кнопка-гамбургер.
3. При клике на закрытие меню закрывается, убирается кнопка-закрытие, появляется гамбургер.

**Б31. Проект соответствует техническому заданию.**

Техническое задание каждого проекта можно посмотреть на странице проектов.

В некоторых пунктах есть необязательные реализации, которые выполняются по желанию.

Обратите внимание, что:

* должна быть сделана вёрстка всех модальных окон, но реализовывать открытие/закрытие необязательно;
* должна быть сделана разметка всех слайдов, но оживлять их переключение в слайдере необязательно.

При конфликте технического задания и критериев, считать техническое задание более приоритетным.

## Дополнительные

### Разметка

**Д1. У всех векторных изображений размер прописан в теге \<img>, у встроенных SVG-изображений размер прописан в теге \<svg>.**

В HTML-коде должны быть указаны ширина и высота векторных картинок, так как векторные картинки могут растянуться на всю ширину родителя.

**Важно:** в атрибутах width и height нельзя использовать px, так как по спецификации размеры в пикселях задаются без единиц измерения. Проценты использовать можно, если картинка должна тянуться. Размеры должны быть указаны в виде целого числа — 100, 213, а не дробного — 100.5, 213.25.

Для адаптивных изображений, у которых есть версии с разными размерами и пропорциями (например, заданными через тег sources в элементе picture), размеры в img в HTML можно не задавать.

**Верно:** картинке заданы целочисленные размеры.

```
<div class="page-header__logo">
  <img src="img/logo.svg" alt="Барбершоп" width="300" height="150">
</div>
```

**Неверно:** картинке не заданы размеры.

```
<div class="page-header__logo">
  <img src="img/logo.svg" alt="Барбершоп">
</div>
```

**Неверно:** картинке заданы размеры в виде дробного числа.

```
<div class="page-header__logo">
  <img src="img/logo.svg" alt="Барбершоп" width="300.294" height="150.6">
</div>
```

**Неверно:** картинке заданы размеры с использованием px.

```
<div class="page-header__logo">
  <img src="img/logo.svg" alt="Барбершоп" width="300px" height="150">
</div>
```

**Верно:** тегу svg заданы размеры.

```
<svg width="200" height="200">
  <rect x="0" y="0" width="200" height="200" fill="#FAFAA2" stroke="#000"/>
</svg>
```

**Верно:** адаптивному изображению может быть не задан размер в HTML.

```
<picture>
  <source media="(min-width: 1150px)" srcset="img/logo-desktop.svg">
  <source media="(min-width: 768px)" srcset="img/logo-tablet.svg">
  <img class="logo__icon" src="img/logo-phone.svg" alt="Логотип">
</picture>
```

**Д2. Использовано минимально возможное количество HTML-элементов (нет лишних элементов).**

В разметке должно быть использовано минимально возможное количество элементов. Не должно быть лишних обёрток и блоков, которые используются для оформления и могут быть заменены на псевдоэлементы.

### Стилизация

**Д4. Для стилизации не использованы #id.**

Для стилизации объектов лучше использовать селекторы по классам или тегам. Использовать id для стилизации недопустимо.

**Важно:** использовать атрибут id в HTML-разметке можно и нужно. Например, для привязки полей к подписям в формах.

**Верно:** стилизация элементов через классы.

```
.main-nav {}
.page-footer {}
```

**Неверно:** стилизация элементов строится через идентификаторы.

```
#main-nav {}
#page-footer {}
```

**Д6. Для блока, у которого есть фоновое изображение, прописан фоновый цвет, который соответствует преобладающему цвету изображения (пока изображение не загружено, страница выглядит похоже на макет).**

Такой метод использует для перестраховки, как и в случае со шрифтом. Только в этом случае, если фоновое изображение не загрузится, на заднем фоне останется преобладающий цвет.

**Верно:** указан цвет фона перед основным изображением.

```
body {
  background: #000000 url("../img/background-body.jpg") no-repeat center top;
}
```

**Результат:** картинка не загрузилась, но при этом цвет фона остался тёмным.

**Неверно:** указано только основное изображение.

```
body {
  background: url("../img/background-body.jpg") no-repeat center top;
}
```

**Результат:** картинка не загрузилась, а цвет фона стал белым.

**Д7. Все состояния элементов (смотрите стайлгайд) прописаны в стилевом файле.**

В соответствии со стайлгайдом, который присутствует в каждом проекте, все указанные в нём элементы должны иметь соответствующие эффекты при наведении и нажатии. Должны присутствовать все активные состояния, а для чекбоксов и радиокнопок прописаны состояния disabled. Если в стайлгайде не предусмотрено какое-то состояние, то его реализация остаётся на усмотрение студента.

**Д16. Нет глобальных стилей тегов.**

Для задания стилей используются только селекторы по классам или вложенные селекторы.

**Исключения:**

* Normalize.css, который исправляет браузерные умолчания
* Уникальные теги документа: <⁠⁠⁠⁠html>, <body>
* Дополнительная нормализация: <a>⁠⁠⁠⁠ и <⁠⁠⁠⁠img>⁠⁠⁠⁠

**Верно:**

```
body { 
  margin: 0 
}

img { 
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

a { 
  text-decoration: none 
}

.feedback { color: black }
.feedback ul { list-style: none }
.feedback p { margin-bottom: 0 }

*, *::before, *::after { 
  box-sizing: border-box; 
}
```

**Неверно:**

```
ul { list-style: none }
p { margin: 0 }
div { font-size: 80% }
* { box-sizing: border-box }
```

### CSS-препроцессор

**Д8. Запрещено использовать цветовые функции для изменения цветовых значений в коде.**

Если в макете указаны конкретные цвета, нужно задавать конкретные цветовые значения в коде. Не нужно подбирать эти значения с помощью цветовых функций CSS-препроцессоров (изменение цвета, осветление, затемнение и так далее).

Исключение составляют функции изменения альфа-канала (прозрачности цвета) — их использовать можно. Это функция rgba() в Less и функции opacity() и transparentize() в Sass.
Д9. Примеси не используются для генерации правил с вендорными префиксами.

Этот критерий запрещает использовать миксины для генерации правил с вендорными префиксами. Например:

```
.box-sizing {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.class {
  .box-sizing();
}
```

Использование таких миксинов нецелесообразно, так как в проекте используется Автопрефиксер, который расставляет вендорные префиксы самостоятельно.

**Д10. Вложенность селекторов не больше двух уровней.**

Вложенность усложняет читаемость кода и делает код хрупким. Хорошим подходом считается вложенность не больше двух уровней. Вложенность считается по CSS на выходе.

**Плохо:** вложенность на три уровня.

```
.block {
  .title {
    span {
      font-weight: bold;
    }
  }
}

.block .title span {
  font-weight: bold;
}
```

Комбинаторы + и ~ вложенность не увеличивают.

**Хорошо:** вложенность на два уровня с комбинатором.

.block .one + .two {
font-weight: bold;
}

Вложенные селекторы в препроцессорах вложенность не увеличивают, если в результирующем CSS они остаются простыми.

Хорошо: результирующий селектор остаётся простым.

```
.block {
  &--mod {
    &::before {
      font-weight: bold;
    }
  }
}

.block--mod::before {
  font-weight: bold;
}
```

**Д11. Родительский селектор & используется только для псевдоэлементов, псевдоклассов и модификаторов.**

Использование & для комбинации селекторов не допускается в именах блоков и элементов. Комбинировать можно только псевдоэлементы, псевдоклассы и модификаторы блоков и элементов.

**Плохо:** комбинируется имя элемента.

```
.block {
  &__element {
    color: tomato;
  }
}
```

**Хорошо:** комбинируется псевдоэлемент и модификатор элемента.

```
.block__element {
  &::before {
    color: tomato;
  }
  &--mod {
    color: tomato;
  }

  /* для классического стиля */
  &_mod_value {
    color: tomato;
  }
}
```

**Д12. Не используются расширения (extend).**

Функции &:extend в Less и @extend в Sass запрещены.

Использование расширений приводит к неочевидной трансформации кода в стилях на выходе. Это усложняет отладку и может привести к генерации неоптимальных групп селекторов.

Невинная задача по абстрагированию размера шрифта в расширение:

```
%basic-font-size {
  font-size: 16px;
}

.block-1 {
  @extend %basic-font-size;
}
…
.block-9999 {
  @extend %basic-font-size;
}
```

…может привести к генерации мегабайтов селекторов в выходном файле:

```
.block-1, .block-2, .block-3, .block-4, …, .block-9999 {
  font-size: 16px;
}
```

### Тестирование

**Д13. Вёрстка проходит тест на переполнение контентом.**

* Не ломается при добавлении в элементы большего количества текста.

**Верно:** текст растягивает блок.

**Неверно:** текст выпадает за пределы блока с тёмным фоном.

* Не ломается при использовании картинок с неподходящими размерами.

**Верно:** добавление картинки не сломало сетку, она вписалась в соответствующий размер.

**Неверно:** добавление большей картинки сломало сетку.

* Не ломается при изменении количества потоковых блоков: текст не выпадает из блоков, нижерасположенные блоки не скрываются, смещение блоков в потоке сохраняет логику потока (не приводит к нарушению сетки).

**Верно:** переполнение верхнего блока растягивает его и двигает нижний.

**Неверно:** переполнение верхнего блока приводит к тому, что блоки скрываются под следующими элементами.

**Д14. Критическая функциональность сайта работоспособна без JavaScript (использовано прогрессивное улучшение).**

Например:

* Все формы являются работоспособными без JavaScript.

* Элементы, вызывающие появление попапов, являются ссылками, ведущими на отдельные страницы: достаточно указать адрес на страницу, на которую будет происходить переход в случае неработоспособности JavaScript, при этом верстать саму страницу необязательно. Пример:

```
<a class="btn btn-open-form" href="form.html">Открыть форму</a>
```

* Интерактивная карта без JavaScript показывает статичную картинку с картой.

* Мобильное меню по умолчанию открыто.

### Доступность

**Д17. У интерактивных элементов при нажатии или фокусе с клавиатуры есть активное состояние.**

Активное состояние интерактивных элементов при нажатии или фокусе с клавиатуры должно оставаться либо встроенным браузерным, либо быть равноценно переназначено. В таком случае по интерактивным элементам сайта можно передвигаться с клавиатуры клавишей Tab и видеть каждый текущий элемент в активном состоянии.

Допускается делать недоступные для скринридеров элементы, если равносильная функциональность или контент уже доступны. Например, если есть ссылка на страницу авторизации, модальное окно можно спрятать с помощью display: none или если есть простое поле для ввода даты, вспомогательный попап с календарём тоже можно спрятать недоступно. Однако интерактивные элементы и контент по-прежнему должны быть доступны с клавиатуры.

**Д18. Все интерактивные элементы имеют текстовое описание.**

Интерактивные элементы, представленные на макете только графически, без текста, содержат текстовое описание. Это поможет пользователям понять, что именно произойдёт в результате взаимодействия, в случае, если они не видят элементы интерфейса. Это описание будет озвучено скринридером.

К интерактивным элементам относятся все элементы страницы, с которыми пользователь взаимодействует: кликом, наведением, фокусом, кнопками клавиатуры. Например: ссылки, кнопки, поля ввода и другие элементы форм.

Описание можно добавить с помощью скрытых HTML-элементов, либо с помощью специальных атрибутов aria-label. Обратите внимание: атрибут placeholder не предназначен для описания полей ввода, он приводит пример заполнения данных. В этом случае, предподчтительнее будет добавить скрытый связанный элемент <label> с описанием поля.

### Форматирование и внешний вид

**Д19. Код соответствует правилам в EditorConfig**

При выполнении автоматической проверки и консольной команды npm run editorconfig в корневой папке проекта не возникает ошибок.

**Д20. Код соответствует правилам в Stylelint.**

При выполнении автоматической проверки и консольной команды npm run stylelint в корневой папке проекта не возникает ошибок.

### Оптимизация

**Д21. Использованы изображения в формате WebP.**

Для браузеров, поддерживающих формат WebP, контентные изображения подключаются в этом формате. Для браузеров, не поддерживающих WebP, изображения подключаются в формате jpeg или png.

**Д22. Использован векторный спрайт.**

Векторные изображения на странице объединены в спрайт.

**Д23. Произведена оптимизация загрузки шрифтов.**

Шрифты предзагружаются через link rel="preload".

Используется подходящее значение font-display в описании @font-face.

### Разное

**Д15. При взаимодействии с элементами (наведение, нажатие) ни сам элемент, ни окружающие его блоки не меняют своего положения (если иное не прописано в техническом задании или стайлгайде).**