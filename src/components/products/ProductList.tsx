import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProductList.module.css';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface ProductListProps {
    onClose: () => void;
}

const ProductList: React.FC<ProductListProps> = ({ onClose }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        axios.get<Product[]>('https://localhost:7265/api/Product')
            .then(response => {
                setProducts(response.data);
                const initialQuantities = response.data.reduce((acc, product) => {
                    acc[product.id] = 1;
                    return acc;
                }, {} as { [key: number]: number });
                setQuantities(initialQuantities);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    const handleQuantityChange = (productId: number, newQuantity: number) => {
        setQuantities(prev => ({ ...prev, [productId]: newQuantity }));
    };

    const calculateTotal = () => {
        const subTotal = products.reduce((total, product) => {
            return total + product.price * (quantities[product.id] || 1);
        }, 0);
        const deliveryCharge = products.length * 15;
        return subTotal + deliveryCharge;
    };

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <h1>Shopping Cart</h1>
                <div className={styles.productContainer}>
                    {products.map(product => (
                        <div key={product.id} className={styles.productItem}>
                            <div className={styles.productDetails}>
                                <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                                <div>
                                    <h2 className={styles.productTitle}>{product.name}</h2>
                                    <p className={styles.productDescription}>{product.description}</p>
                                    <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className={styles.productSummary}>
                                <p>Delivery: $15.00</p>
                                <div className={styles.quantityControls}>
                                    <button onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 1) - 1)}>-</button>
                                    <input 
                                        type="number" 
                                        value={quantities[product.id] || 1} 
                                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                    />
                                    <button onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 1) + 1)}>+</button>
                                </div>
                                <p>Total: ${(product.price * (quantities[product.id] || 1) + 15).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.proceedCheckout}>
                    <button className={styles.closeButton} onClick={onClose}>Close</button>
                    <div className={styles.totalContainer}>
                        <p>Sub Total: ${products.reduce((total, product) => total + product.price * (quantities[product.id] || 1), 0).toFixed(2)}</p>
                        <p>Delivery Charge: ${(products.length * 15).toFixed(2)}</p>
                        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
                        <button className={styles.proceedButton}>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
