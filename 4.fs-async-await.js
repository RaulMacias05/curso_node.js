const { readFile } = require('node:fs/promises')

// IIFE -> Inmediatly Involved Function Expression

;(async () => {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('Primer Texto:', text)

    console.log('--> Hacer cosas mientras lee el archivo...')

    console.log('Leyendo el segundo archivo...')
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('Segundo Texto:', secondText)
}
)()

/* async function init() {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('Primer Texto:', text)

    console.log('--> Hacer cosas mientras lee el archivo...')

    console.log('Leyendo el segundo archivo...')
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('Segundo Texto:', secondText)
}

init() */


    