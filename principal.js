'use strict';

const process = require('process');
const fs = require('fs');
const pepino = require('./pepino.js');

let arquivosRecebidos = process.argv.slice(2);
let arquivos = [];
if (arquivosRecebidos.length == 0) {
	console.log('Você deve informar os arquivos como parâmetro');
}
arquivosRecebidos.forEach((arquivo) => {
	if (fs.existsSync(arquivo)) {
		arquivos.push(arquivo);
		console.log(`${arquivo}`);
	} else {
		console.log(`Arquivo inválido: ${arquivo}`);
	}
});

pepino.gerarHtml(arquivos);
