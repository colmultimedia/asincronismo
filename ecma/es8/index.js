const data = {
    frontend: 'Mattheuv',
    backend: 'Luis',
    design: 'Daniel'
}

const entries = Object.entries(data);

//disponemos del valor .length

console.log(`Existen ${entries.length} registros`);
console.log(entries);


// obteniendo los valores

const values =Object.values(data);

console.log(values);


// otro elemento que se ha añadido ha sido el padding, extendiendo un string

const string = 'Hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, '------'));
console.log('food'.padEnd(12, '------'));
