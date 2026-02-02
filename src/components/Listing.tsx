import  Product from './Product'
import data from '../data/etsy.json'


interface Products {
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

export default function Listing() {
  const items: Products[] = data.filter(prod => prod.state === 'active').map(prod =>({
    listing_id: prod.listing_id,
    url: prod.url ?? '',
    MainImage: {
      url_570xN: prod.MainImage?.url_570xN ?? '',
    },
    title: prod.title ?? '',
    currency_code: prod.currency_code ?? '',
    price: prod.price ?? '',
    quantity: prod.quantity ?? 1
  }))

  return (
    <div className="product-grid">
        {items.map(product => (
            <Product product = {product} key={product.listing_id}/>
        ))}
    </div>
  )
}