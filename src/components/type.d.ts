interface IProductProps {
    id: string;
    category: string;
    title: string;
    price: string;
    imgLink: string;
    available: boolean;
    categoryId: string;
}

interface IFilterProps {
    propertyList: string[];
}