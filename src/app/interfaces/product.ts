export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: string;
    'sub-category': string;
    image: string;
    images?: string[]; // Propiedad opcional para un array de URLs de imágenes adicionales
    stock: number;
    features?: string[];
}
