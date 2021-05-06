
const state = {


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
    }
};



export const addNewPosts = () => {
    let text = {
        id: 6,
        post: state.profilePage.newPostText
    };
    state.profilePage.posts.push(text);
    state.profilePage.newPostText = '';
    refresh(state);


};

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    refresh(state);


};


export const addUser = (user) => {
    let newUser = {
        id:7,
        name: user
    };
    state.massegePage.data.push(newUser);
    refresh(state);
};

export const subscribe = (observer) => {
    refresh = observer;
}