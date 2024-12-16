import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd, max = 0, initialCount = 1 }) => {
    const [count, setCount] = useState(initialCount > 0 ? initialCount : 1);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const onAddHandler = () => {
        onAdd(count)
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='m-2'>
                {
                    count > 1 && (
                        <button className='btn btn-danger' onClick={restar} >-</button>
                    )
                }

                <span className='btn'>{count}</span>
                {
                    count < max && (
                        <button className='btn btn-success' onClick={sumar}>+</button>
                    )
                }
            </div>
            <div className='m-2'>
                <button className='btn btn-primary' onClick={onAddHandler} disabled={stock === 0 || count === 0}>Comprar</button>
            </div>
        </div>
    )
}

export default ItemCount