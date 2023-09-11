import React, { useState } from 'react'

const Latest = () => {
    const [value, setValue] = useState(0)
    return (
        <div className='main-class'>
            <div className="latest">
                <span class="slider__thumb-13-circle-1"></span>
                <span class="slider__thumb-13-circle-2"></span>

            </div>

        </div>
    )
}

export default Latest