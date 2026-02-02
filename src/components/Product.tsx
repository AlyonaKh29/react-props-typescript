import { formatCurrency, getStockClass, trimTitle } from '../utils'

interface Product {
    listing_id: number; 
    url: string;
    MainImage: {
        url_570xN: string;
    };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}

export default function Product({ product }: {product: Product}) {
    return (
        <div className="product-card" id={product.listing_id.toString()}>
            <a href={product.url}>
                <img src={product.MainImage.url_570xN} alt={product.title} className="product-image" />
            </a>
            <div className="product-info">
                <h3 className="product-title">{trimTitle(product.title)}</h3>
                <div className="price-container">
                    <div className="product-price">{formatCurrency(product.currency_code)}{product.price}</div>
                    <span className={getStockClass(product.quantity)}>{product.quantity} left</span>
                </div>
            </div>
        </div>
    )
}