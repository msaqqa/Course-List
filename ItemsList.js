import React from 'react';

const ItemsList = (props) => {
    const {items, handleDelete} = props;
    const length = items.length;
    const theItems = length? (
        items.map(item => {
            return(
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => handleDelete(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (<p className="pargraph">No Items To Show</p>)
    
    return(
        <div className="ItemsList">
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
            {theItems}
        </div>
    )
}

export default ItemsList;