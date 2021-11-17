import React from 'react'
import Image from 'next/image'

const about = () => {
    const myLoader = ( {src , width , quality} ) => {
        return `${src}?w=${width}?q=${quality || 75}`
    }
    return (
        <div>
            <h1>This is About Page</h1>
            <Image 
                loader={myLoader}
                src='/sample.png'
                width={600}
                height={500}
            />
        </div>
    )
}

export default about
