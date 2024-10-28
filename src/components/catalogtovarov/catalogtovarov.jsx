import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Товар 1',
        price: 100,
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_dc8d82ab64%2Fmain_dc8d82ab64.jpg&w=1920&q=75',
        quantity: 2,
        category: 'Внедорожники'
    },

    {
        id: 2,
        title: 'Товар 2',
        price: 200,
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmc_Laren_37afc51a4d%2Fmc_Laren_37afc51a4d.jpg&w=1920&q=75',
        quantity: 7,
        category: 'Спорткары'
    },
    {
        id: 3,
        title: 'Товар 3',
        price: 300,
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_2853ff4161%2Fmain_2853ff4161.jpg&w=1920&q=75',
        quantity: 1,
        category: 'Электромобили'
    },
    {
        id: 4,
        title: 'Товар 4',
        price: 400,
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_dc8d82ab64%2Fmain_dc8d82ab64.jpg&w=1920&q=75',
        quantity: 1,
        category: 'Внедорожники'
    },

    {
        id: 5,
        title: 'Товар 5',
        price: 500,
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmc_Laren_37afc51a4d%2Fmc_Laren_37afc51a4d.jpg&w=1920&q=75',
        quantity: 2,
        category: 'Спорткары'
    },
    {
        id: 6,
        title: 'Товар 6',
        price: 600,
        image: 'https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_2853ff4161%2Fmain_2853ff4161.jpg&w=1920&q=75',
        quantity: 5,
        category: 'Электромобили'
    }
    
];


export function Catalogtovarov() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Внедорожники">Внедорожники</option>
                <option value="Спорткары">Спорткары</option>
                <option value="Электромобили">Электромобили</option>
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="quantityAsc">Количество: по возрастанию</option>
                <option value="quantityDesc">Количество: по убыванию</option>
            </select>
        </div>
            <div className={s.catalogs}>
                <div className={s.catalog}>
                    {sortedProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            price={product.price} 
                            image={product.image} 
                            quantity={product.quantity} 
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}