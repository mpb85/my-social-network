

 const store = {
    _state: {
        massegePage: {
            data:[
                {id: 1, name: 'Роман'},
                {id: 2, name: 'Сергей'},
                {id: 3, name: 'Артем'},
                {id: 4, name: 'Катя'},
                {id: 5, name: 'Маша'},
                {id: 6, name: 'Яна'}
            ],
            dataMessage: [
                {id: 1, message: 'Привет это мое первое сообщение в моей социальной сети'},
                {id: 2, message: 'Как дела братуха'},
                {id: 3, message: 'Чувак мож ну его этот карантин, го футбол'},
                {id: 4, message: 'Где ты пропал?'},
                {id: 5, message: 'Сегодня в 20:00?'},
                {id: 6, message: 'Напонимаю что в четверг вечером курс по react'}
            ]
        },
        profilePage: {
            posts: [
                {id: 1, post: 'hello man'},
                {id: 2, post: 'С профисиональным праздником'},
                {id: 3, post: 'Поздравляю с розыгрышем'},
                {id: 4, post: 'Как дела, зайди на мою страницу и лайкни мою аватарку'},
                {id: 5, post: 'Старые добрые времена'}
            ],
            newPostText: 'hello slabak'
        },
        friendsPage: {
            friends: [
                {name: 'Сергей', image: 'https://mir-avatarok.3dn.ru/_si/0/49231772.jpg'},
                {name: 'Артем', image: 'https://mir-avatarok.3dn.ru/_si/0/39559692.jpg'},
                {name: 'Николай', image: 'https://mir-avatarok.3dn.ru/_si/0/65451130.jpg'},
                {name: 'Альбина', image: 'https://mir-avatarok.3dn.ru/_si/0/90954349.jpg'},
                {name: 'Кристина', image: 'https://mir-avatarok.3dn.ru/_si/0/28861160.jpg'},
                {name: 'Маргарита', image: 'https://mir-avatarok.3dn.ru/_si/0/78181166.png'},
            ]
        },},
     getState() {
         return this._state;
     },
    setUpdateNewPostText(text) {
debugger;
        this._state.profilePage.newPostText = text;
        this._refresh(this._state);
    },

    setAddNewPosts() {
        let text = {
            id: 6,
            post: this._state.profilePage.newPostText
        };
        this._state.profilePage.posts.push(text);
        this._state.profilePage.newPostText = '';
        this._refresh(this._state);


    },
    setAddUser(user) {
        let newUser = {
            id:7,
            name: user
        };
        this._state.massegePage.data.push(newUser);
        this._refresh(this._state);
    },
    _refresh(){
        debugger;
        const a ='';
    },
    getSubscribe(observer) {
        debugger;
        this._refresh = observer;
    },


};


export default store;