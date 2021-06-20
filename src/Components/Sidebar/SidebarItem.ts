import Home from "../../Pages/Home";

// key와 path는 동일해야함
const Sidebar = [
  {
    title: "사용자 메뉴",
    key: "menu",
    detail: [
      {
        title: "HTML Editor",
        key: "html_editor",
        path: "/html_editor",
        component: Home,
      },
    ],
  },
];

export default Sidebar;
