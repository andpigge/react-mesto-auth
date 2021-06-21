# __Места России__

## Интерактивная страница. Позволяет изменять имя и деятельность в профиле, с помощью формы в модальном окне

### Описание (функциональность) :
* открытие закрытие модального окна с помощью добавления и удаления класса popup_opened,
* сохранение вверденных данных пользователя из формы в модальном окне,
* замена текста. Из созданных переменных с веденными данными пользователя, в блок профиль,
* динамически выводит карточек при зпгрузке страницы из сервера
* с помощью отдельной формы popup можно добавлять отдельные карточки, при этом они сохраняются на сервер
* добавление лайков. Лайки добавляются и подружаются динамически. Имеется счетчик лайков
* загрузка аватара пользователя с сервера. Можно загружать новую картинку для аватара по url адресу, сохраняется на сервере
* можно удалять карточки, удаляются с сервера
* можно просмотреть картинку в карточки в popup
* закрытие попапов на кнопку ESC, и на свободную область.
* формы валидируются на клиенте
* весь функционал написан в ООП стиле
* регистрация и авторизация. При повторном входе ключ сохраняется в localStorage

### Сайт поддерживает все современные браузеры, такие как:
* Google Chrome
* Yandex Browser
* Mozilla Firefox

На всех остальных браузерах, 100% поддержка не ~~гарантируется~~

### Использовались технологии:
#### __Для верстки__:
* flexbox,
* grid layout,
* директива @font-face, подключались локально шрифты,
* методология БЭМ
* метод построения файловой структуру для проета nested БЭМ
* директива @media для построения отзывчевой верстки
* create-react-app
#### __Для javascript__:
* API DOM
* REST API для страницы mesto и для авторизации отдельный API. Сервер предоставлялся от яндекса
* fetch
* React
* Хуки
* React Context
* React Route
* localStorage

### Что предстоит сделать
* Попробовать оптимизировать приложения с помощью чистых компонентов
* ~~При нажатии на кнопку esc закрывать все попапы~~
* ~~Добавить подтверждение удаления карточки~~
* Реализовать валидацию формы с помощью React
* ~~Реализовать на кнопке сохранить три точки во время закрытия попапа~~
* Реализовать для email в шапке адаптив

### Случайно начал проект, не в том проекте. Пришлось удалить .git, поэтому истории комитов нету((
Ссылка на проект: [Места России](https://andpigge.github.io/mesto-react-auth)
