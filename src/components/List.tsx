import React, { useState } from 'react';

interface Item {
    id: number;
    name: string;
    calories: number;
}

interface ListProps {
    category: string;
    items: Item[];
}

const List: React.FC<ListProps> = (props) => {
    const { category, items } = props;

    const [list, setList] = useState<Item[]>(items);

    const handleClick = () => {
        const itemName = (document.getElementById('listItemNameInput') as HTMLInputElement).value;
        const itemCalories = parseInt((document.getElementById('listItemCaloryInput') as HTMLInputElement).value);
        
        const newItem: Item = { id: list.length + 1, name: itemName, calories: itemCalories };
        
        setList([...list, newItem]);
    };

    const listItems = list.map(item => (
        <li key={item.id}>
            {item.name}: <b>{item.calories}</b>
        </li>
    ));

    return (
        <div className="pannel shadow-low">
            <h3 className="list-category">{category} list</h3>
            <ol className="list-items">{listItems}</ol>
            <input type="text" id="listItemNameInput" />
            <input type="number" id="listItemCaloryInput" />
            <button onClick={handleClick}>Add {category}</button>
        </div>
    );
};

export default List;