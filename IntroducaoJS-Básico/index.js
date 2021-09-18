//console.log("Olá Mundo!");

 
//Variáveis:
/**
 * console.log("Olá Mundo!");
 *           =
 * var olaMundo = "Olá Mundo";
 * console.log(olaMundo);
 * 
 */

/** Var sempre foi usada para declarar as variáveis,mas em novas versoes e JS trouxe variaveis de escopo:
 * let = declara variáveis definindo o escopo de atuaçao, nao monstrando a var fora de onde foi usada.
 * const = declara constantes, declara valores que voce nao pretende mudar.
 * 
 */

/** Tipos de Dados:
 * Primitive = Number,String,Boolean,NULL,,Undefined e Symbol
 * Non-Primitive = Object, como os Arrays e Datas 
 * 
 * Temos comando para mostrar o tipo de dado, use o typeOf
 * Para saber de qual instancia daquele objeto, use o instanceOf
 * 
 * É possível por uma funçao anônima dentro de umma variável e invocar essa funçao por meio de uma var
 */

/** Funções de  Conversão: 
 * parseInt, parseFloat , toString  ....
 */

/**Operadores:
 * O = (igual) é um operador de atribuição.
 * O == (dois iguais) é um operador de comparaçao de valor de duas espressões.
 * O === (três iguais) é um operador de comparação de valor e tipo de dados.
 * O !== compara se os vzzloreses e tipos de dados são diferentes
 * O !=  compara se oss valores sao diferentes
 */

/**Operadores Lógicos
 * && = and, as duas condiçoes tem que ser verdadeiras ao mesmo tempo,se uma ou as duas forem falsas o resultado sera falso
 * || = or, so ira ser falso se as duas condições forem falsas,se uma ou as duas forem verdadeira o reesultado sera true
 */

/**Operador incremental e decremental
 * a++ incremental
 * a-- decremental
 */

/**if(){}, else if(){} e else{}
 * if(se){entao,faça isso}
 * else if(caso n seja o if){entao,faça isso}
 * else{se nenhumma ocndiçao foi atendida, entao faça isso}
 * 
 * 
 * PODEM TER DIVERSOS else if(){}  entre o if e else
 */

/**switch = ESTRUTURA DE CONTROLE COM OPÇÕES PRÉ-DEFINIDAS
 * FORMA DE USAR: case: = caso, break; = pausa , entre o case: e o break; ponha o que deseja que o codigo faça caso o case seja atendido.
 * o default é caso nenhuma condição seja atendida e sempre é usado no final do switch,nao precisando ter o break.
 * 
 * let cor = "azul";
 * switch(cor) {
 *      case "verde":
 *          console.log("siga");
 *      break;
 * 
 *      case "amarelo":
 *          console.log("atenção");
 *      break;
 * 
 *      case "vermelho":
 *          console.log("pare");
 *      break;   
 * 
 *      default:
 *          console.log("não sei..")
 * }
 */

/**Laços de repetição, para repetir alguma instrução no seu codigo.Quer você sabendo ou não quantas vezes você vai repetir esse trecho de código,usa-se o for
 * para isso o for vai ter algumas variações:
 * Se você sabe quantas vezes exatamente vai ter de repetições voce vai usar um for com três instruções,
 *  -> de onde ele se inicia, ate quando ele vai exxecutar esse for e qual vai ser o incremento dessa var
 *
 * foreach : voce tmb pode percorrer um array, para cada index do array vc vai querer executar algo, como é 'para cada',usa o foreach
 * 
 * outro for que voce vai ter tmb é para percorrer nomes de objetos, de atributos de objetos na vdd que é p forin,
 * entao para cada chave ou atributo que ele encontrar de um objeto voce pode usar esse repetidor
 * 
 * ->alem do while, que é conhecido em outra linguagens ou o dowhile que vai exxecutar pelo ,menos uma vez 
 * 
 * quando executa o for, foreach ou o forin voce tem os coringas para poder sair deles caso alguma coisa aconteça:
 *  >se quiser interromper um laço de repetiçao usa-se o break, porem o break vai ser usado dentro de uma condiçao if dentro do nosso for
 * 
 * se voce estiver percorrendo um array e quiser pular algum index usa o continue, o continue é similar ap break, porém ignora e vai para o próximo
 * 
 * ex do uso do for para uma tabuada do 7:
 * let n = 7;
 * for(let i = 0; i<=10; i++){
 *      console.log(`${i} x ${n} = ${i*n}`);
 * }
 * 
 * 
 * -> esse console.log que fizemos esta com um novo recurso do JS, o Template String: `recurso incrível ddo ${js}`
 *    -> todo o que esta dentro de ${é codigo JS}
 * 
 * Com Template String: console.log(`${i} X ${n}  = ${i*n}`);
 * Sem Template String:comnsole.log(i + " X " + n + " = " + (i*n));
*/

