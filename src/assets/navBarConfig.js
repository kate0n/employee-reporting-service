import avatar from './images/avatar.png';

export const navBarConfig = {
    profile: {
        avatar: avatar,
        userName: 'Кириллов Владимир',
    },
    menu: [
        {
            link: '',
            title: 'Ежедневный отчет'
        },

        {
            link: '',
            title: 'Годовой отчет',
            subLink: [
                {
                    link: '',
                    title: 'Зарплата за год'
                },
                {
                    link: '',
                    title: 'Время на объекты'
                },
            ],

        },
        {
            link: '',
            title: 'Расходы на бизнес'
        },
        {
            link: '',
            title: 'Объект',
            subLink: [
                {
                    link: '',
                    title: 'Расходы сотрудников'
                },
                {
                    link: '',
                    title: 'Расходы на объект'
                },
            ],

        },
        {
            link: '',
            title: 'Объекты',
            subLink: [
                {
                    link: '',
                    title: 'Реестр объекто'
                },
                {
                    link: '',
                    title: 'Объекты'
                },
            ],

        },
    ],
};

export default navBarConfig;