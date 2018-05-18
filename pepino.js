'use strict';

const fs = require('fs');

module.exports = {
	gerarHtml: function (arquivos) {
		let saida = '';
		let template = fs.readFileSync('pepino.template.html', 'utf-8');
		let templateHistoria = fs.readFileSync('historia.template.html', 'utf-8');
		arquivos.forEach((arquivo) => {
			let entrada = fs.readFileSync(arquivo, 'utf-8');
			entrada = entrada.replace(/^\s*/gm, '');
			entrada = entrada.replace(/\s*$/gm, '');
			entrada = entrada.replace(/^#(.*)$/gm, '<p class="comentario">#$1</p>');
			entrada = entrada.replace(/^História:(.*)$/gm, '<p class="historia"><em>História:</em>$1</p>');
			entrada = entrada.replace(/^Cenário:(.*)$/gm, '<p class="cenario"><em>Cenário:</em>$1</p>');
			entrada = entrada.replace(/^Contexto:(.*)$/gm, '<p class="contexto"><em>Contexto:</em>$1</p>');
			entrada = entrada.replace(/^No papel(.*)$/gm, '<p class="filho-historia"><em>No papel</em>$1</p>');
			entrada = entrada.replace(/^Eu quero(.*)$/gm, '<p class="filho-historia"><em>Eu quero</em>$1</p>');
			entrada = entrada.replace(/^Para(.*)$/gm, '<p class="filho-historia"><em>Para</em>$1</p>');
			entrada = entrada.replace(/^Dado(.*)$/gm, '<p class="filho-cenario-contexto"><em>Dado</em>$1</p>');
			entrada = entrada.replace(/^Quando(.*)$/gm, '<p class="filho-cenario-contexto"><em>Quando</em>$1</p>');
			entrada = entrada.replace(/^Então(.*)$/gm, '<p class="filho-cenario-contexto"><em>Então</em>$1</p>');
			entrada = entrada.replace(/^E(.*)$/gm, '<p class="filho-cenario-contexto"><em>E</em>$1</p>');
			entrada = entrada.replace(/^Ou(.*)$/gm, '<p class="filho-cenario-contexto"><em>Ou</em>$1</p>');
			saida += templateHistoria.replace('${conteudo}', entrada);
		});
		saida = template.replace('${conteudo}', saida);
		fs.writeFile('saida.html', saida, 'utf-8');
	}
}
