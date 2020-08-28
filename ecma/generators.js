function* helloWorld() {
	
	if(true) {
	yield('hello, ')
	}

	if (true) {
	yield('world')
	}
}

const llamarGenerador = helloWorld();

console.log(llamarGenerador.next().value);
console.log(llamarGenerador.next().value);
console.log(llamarGenerador.next().value);