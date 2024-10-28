import React, { useState } from 'react';
import s from './Accardeon.module.css'

export function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.accordion_item}>
            <div className={s.accordion_header} onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className={s.accordion_content}>
                    {children}
                </div>
            )}
        </div>
    );
}

export function Accordion() {
    return (
        <div className={s.accordion}>
            <AccordionItem title="котак 1">
                <p>Очень комфортный</p>
            </AccordionItem>
            <AccordionItem title="котак 2">
                <p>Очень быстрый</p>
            </AccordionItem>
            <AccordionItem title="котак 3">
                <p>Очень красивый</p>
            </AccordionItem>
        </div>
    );
}