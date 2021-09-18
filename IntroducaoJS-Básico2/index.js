/**Funções:
 * são trechos de códigos que podem ser reutilizados
 * classes agrupa atributos e métodos no mesmo lugar
 * return :Encerra a função e retorna um valor
 * 
 * temos 3 tipos de funções:7
 * função comum,com nome
 * função anônima,nao tem nome
 * função de seta
 * 
 * Conhecido como argumentos ou parâmetros, sao informações que as funções precisam.
 * Argumentos ou Args permitem acessar Parâmetros de uma função
 * 
 * o eval(); é uma função nativa que entende o que esta em string e faz o que se pede
 * 
 * FUNÇÃO NORMAL:
 * function calc(x1, x2, operator){
 *      return eval(`${x1} ${operator} ${x2}`);
 * }
 * let resultado = calc(1, 2, "+");
 * console.log(resultado);
 * 
 * 
 * FUNÇÃO ANÔNIMA:
 * (function(x1, x2, operator){
 *      return eval(`${x1} ${operator} ${x2}`);
 * })(1,2,"+");
 * let resultado = calc(1, 2, "+");
 * console.log(resultado);
 * 
 * 
 * ARROW FUNCTION: é um novo recurso para funções.No arrow function eu consigo compartilhar informaçoes que estao de fora para dentro da função.
 * let calc = (x1, x2, operator) => {
 *      return eval(`${x1} ${operator} ${x2}`);
 * }
 * let resultado = calc(1,2,"*");
 * console.log(resultado);
 * 
 * 
 * CallBack: Função de retorno,como parâmetros após uma ação
 * 
 * DOM: DOCUMENT OBJECT MODEL , a estrutura como o HTML é formado
 * o js manipula elementos HTML,podemos inserir e tirar coisas no HTML e CSS
 * com isso temos os EVENTOS:Ações realizadas na aplicação que dispara rotinas.
 * 
 * window.addEventListener('focus', event => {
 *      console.log("focus");
 * });
 * document.addEventListener('click', event => {
 *      console.log('click');
 * });
 * 
 * 
 * Window: Manipulamos a aplicação
 * 
 * 
 * DATA :
 * TimeStamp: Quantidade de segundos desde 01/01/1970
 * para saber a data de agora:     let agora = new Date();
 *                                 console.log(agora);
 * 
 * podemos manipular cada parte da data:
 * dia = console.log(agora.getDate());
 * ano = console.log(agora.getFullYear());
 * mes = console.log(agora.getMonth());  o mes vem como array entao o mes de janeiro é 0 e o "mes 5" ira vir como 4
 * 
 * 
 * Podemos usar a localização do navegador do usuario para mostrar a data de onde ele esta:
 * assim formatando o padrao de uso do local,trazendo tudo certinho de acordo com o local, use:
 * let agora = new Date();
 * console.log(agora.toLocaleDateString("pt-BR"))
 * 
 * 
 * ARRAY: Variável indexada(todo array começa do 0):
 * conseguimos chamar a função ou manipular um item dentro do array,ex:
 * let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];
 * console.log(carros[6]()); 
 * console.log(carros[5].getFullYear());
 * 
 * 
 * FOREACH: vamos fazer um laço de repetição para ver que tipo de informaçoes tem em cada uma desses itens
 * let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];
 * carros.forEach(function(value,index){
 *      console.log(index, value);
 * })
 * 
 * 
 * ORIENTAÇÃO A OBJETOS: é uma das coisas mais importantes em linguagens de programaçao.
 * é um jeito de se programar, um forma de programar que voce reutiliza seu codigo,deixa ele organizado e funcional
 * tudo acontece em uma classe, uma classe é um conjunto de atributos e metodos
 *  A Classe irá englobar todos os assuntos em comum
 *  as variaveis e funçoes dentro de uma classe mudam de nome,viram:
 *  var = ATRIBUTOS
 *  funcao = METODOS
 * 
 *  ->ELES MUDAM DE NOME PQ GANHAM ALGUNS RECURSOS A MAIS;
 *  UM ATRIBUTO É COMO UMA VAR,COM O ATRIBUTO PODEMOS CHAMA-LO DENTRO DAQUELA CLASSE ONDE QUISERMOS,PODEMOS POR RECURSOS
 *  QUE CONTROLAM QUEM PODE OU NAO CHAMAR ESSE ATRIBUTO E COMO ELES DEVEM SER CHAMADOS
 *  UM METODO É COMO UMA FUNÇAO,A DIFERENÇA É QUE VC N VAI CRIAR ELE COM A PALAVRA FUNCTION,ATE PODE POR MAS ELE TEM Q
 *  ESTAR DENTRO DE UMA CLASSE,ELE EXECUTA ALGUMA COISA E ELE TMB PODE SER CHAMADO POR OUTROS CAMARADAS DENTRO DA CLASSE
 *  E PRA ISSO VAMOS TER UM COMANDO EXTREMAMENTE IMPORTANTE QUE VAI SER USADO DEMAIS DENTRO DA CLASSE QUE É O THIS
 * 
 * THIS: É um comando interno usado para referenciar,referenciar um atributo ou metodo naquela classe,vamos falar this
 *  "chama aquele" atributo / "chama aquele" método  -  "chama aquele"=This  
 * 
 * UMA CLASSE É UM CONJUNTO DE ATRIBUTOS E MÉTODOS;
 * atributo = a minha informaçao,onde armazeno.
 * método = açoes que devem acontecer.
 * 
 *  VOCE CRIOU UMA CLASSE E AGORA?
 *  COMO CHAMAR ELA? AI QUE VEM A PALAVRA " NEW "
 *  let calculator = new calculadora;  calculadora = nomeClasse
 *      -> voce esta dizendo que apartir de agr,essa var é uma nova instancia da classe calculator
 *      Instância = é quando o objeto representa uma class
 *      |
 *      +-> OU SEJA;
 *          TODOS OS ATRIBUTOS E MÉTODOS QUE CRIAMOS NA CLASSE VAO SER USADOS OU ESTAREM ACESSIVEIS NO OBJETO CALCULATOR
 *          A VAR CALCULATOR PASSA A SER UM OBJETO JA QUE REFENCIA UMA CLASSE
 * 
 *                   ![QUANTO MAIS INTELIGENTE FOR A SUA CLASSE, MAIS LIMPO SERÁ SEU CODIGO !!!]!
 * 
 * EXEMPLO:
 * let celular = function(){
 *      this.cor = "prata";
 *      this.ligar = function(){
 *          console.log("uma ligação");
 *          return "ligando";
 *      }    
 * }
 * let objeto = new celular();
 * //console.log(objeto);
 * console.log(objeto.ligar());
 * 
 * 
 *
 * NO JS TEMOS UM NOVO JEITO DE SE FAZER UM CLASSE,UMA FORMA MAIS POLIDA DE SE FAZER UMA CLASSE, SEJA:
 * VAMOS FAZER A MSM COISA QUE FIZEMOS NA CLASSE DE CIMA, SO Q DA NOVA MANEIRA:
 * 
 * class celular {
 *      constructor(){
 *          this.cor = "prata";
 *      }
 *      ligar(){
 *          console.log("uma ligaão");
 *          return "ligando";
 *      }
 * }
 * let objeto = new celular();
 * //console.log(objeto);
 * console.log(objeto.ligar());
 * 
 * 
 * 
 */
