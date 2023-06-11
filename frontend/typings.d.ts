

type MenuData = {
    id: ID;
    name: string;
    url: string;
    subMenu?: boolean;
}

type SubMenuData = {
    id: ID;
    name: string;
    doc_count: number;
}