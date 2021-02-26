const RouterPathEnum = {
    HOME : "/",
    PAGE1: "/page1",
    PAGE2: "/page2",
}

export const MenuItems = [
    {
        text:' dashboard',
        route: RouterPathEnum.HOME,
        icon: 'chess-bishop'
    },
    {
        text:' Page1',
        route: RouterPathEnum.PAGE1,
        icon: 'chess-queen'
    },
]

export default RouterPathEnum;