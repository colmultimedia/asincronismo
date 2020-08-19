const fabiolo = () => {
    return new Promise ((resolve, reject) => {
    (true)
        ? setTimeout(() => resolve('bidibidibambam'), 3000)
        : reject(new Error('sorry amor'))
    });
}

// haciendolo de la forma sencilla
const elias = async () => {
   const algo =  await fabiolo();
    console.log(algo);
}


// haciendolo con try catch
const anibal = async () => {
        try {
        const something = await fabiolo();
        console.log(something + '1');
    }catch (error) {
        console.error(error)
    }
}

// llamando funciones async await
elias();
anibal();