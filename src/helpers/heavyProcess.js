export const heavyProcess = ( iterations ) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Working...')
    }

    return `${ iterations } iterations finished`
}