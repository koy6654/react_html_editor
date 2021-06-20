import Home from '../../Pages/Home'
import HTMLEditor from '../../Pages/HTMLEditor'

// key와 path는 동일해야함
const Sidebar = [
    {
        title: '사용자 메뉴',
        key: 'menu',
        detail: [
            {
                title: '홈',
                key: 'home',
                path: '/home',
                component: Home,
            },
            {
                title: '송이 에디터',
                key: 'html_editor',
                path: '/html_editor',
                component: HTMLEditor,
            },
        ],
    },
]

export default Sidebar
