import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('component has been mounted')
        return () => {
            console.log('component unmounted')
        }
    }, [])

    return (
        <div>
            <h3>Eres genial!</h3>
        </div>
    )
}
