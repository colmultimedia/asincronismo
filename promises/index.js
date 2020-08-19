const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!!');
        } else {
            reject('ups, pailas pana');
        }
    });
};

// ALGO VA A PASAR, SI SE CUMPLE LO RESUELVE O LO RECHAZA.

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('hello');
            },2000)
        } else {
            const error = new Error('pailas pailas!!');
            // con el new Error nos brinda mas información para debuggear mejor
            reject(error);
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log('array of results', response))
    .catch(err => console.error(err));


