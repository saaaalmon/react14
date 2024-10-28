import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import { OrderFormModal } from '../Modal/Modal';
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Товар 1',
        price: 100,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_dc8d82ab64%2Fmain_dc8d82ab64.jpg&w=1920&q=75',
        quantity: 2,
        category: 'Внедорожники'
    },

    {
        id: 2,
        title: 'Товар 2',
        price: 200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmc_Laren_37afc51a4d%2Fmc_Laren_37afc51a4d.jpg&w=1920&q=75',
        quantity: 7,
        category: 'Спорткары'
    },
    {
        id: 3,
        title: 'Товар 3',
        price: 300,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_2853ff4161%2Fmain_2853ff4161.jpg&w=1920&q=75',
        quantity: 1,
        category: 'Электромобили'
    },
    {
        id: 4,
        title: 'Товар 4',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_dc8d82ab64%2Fmain_dc8d82ab64.jpg&w=1920&q=75',
        quantity: 1,
        category: 'Внедорожники'
    },

    {
        id: 5,
        title: 'Товар 5',
        price: 500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmc_Laren_37afc51a4d%2Fmc_Laren_37afc51a4d.jpg&w=1920&q=75',
        quantity: 2,
        category: 'Спорткары'
    },
    {
        id: 6,
        title: 'Товар 6',
        price: 600,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_2853ff4161%2Fmain_2853ff4161.jpg&w=1920&q=75',
        quantity: 5,
        category: 'Электромобили'
    }
    
];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>Добавить в корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal   
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                product={product} 
            />
        </div>
    );
}