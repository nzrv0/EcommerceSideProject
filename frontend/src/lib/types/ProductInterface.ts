interface ProductInterface {
    _id: string;
    name: string;
    image?: string;
    description: string;
    price: number;
    rating?: number;
    reviews?: string[];
    category: string;
    inStock?: boolean;
    colours: string[];
    quantity: number;
    discount?: number;
}
