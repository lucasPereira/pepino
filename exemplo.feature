# language: pt
 
História: História sacar dinheiro
	No papel de um cliente idiota
	Eu quero sacar dinheiro de um caixa eletrônico
	Para que eu não precise esperar na fila do banco

    Contexto:
	    Dado que a conta tem saldo

    Cenário: conta tem saldo
	    E que o cartão é válido
	    E que o caixa eletrônico contém dinheiro
	    Quando o cliente tentar sacar dinheiro
	    Então garanta que a conta será debitada
	    E que o dinheiro será liberado
	    Ou que o cartão será retornado

		Exemplos:
		| atributo1 | atributo2 |
		| 1         | "valor a"	|
		| 2         | "valor b"	|
