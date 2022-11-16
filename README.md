
# Manejo de arreglos en JavaScript

Ejemplos, descripcion y caracteristicas de los metodos que tiene JavaScript para manejar arreglos
## Indice 

1. [**Inmutables**]()
-  [Foreach](#Array.foreach())
-  [Map](#Array.map())
-  [Filter](#Array.filter())
-  [Reduce](#Array.reduce())
-  [Some](#Array.some())
-  [Every](#Array.every())
-  [Find](#Array.find())
-  [FindIndex](#Array.findIndex())
-  [Includes](#Array.includes())
-  [Join](#Array.join())
-  [Concat](#Array.concat())
-  [Flat](#Array.flat())
-  [Flatmap]()

2. [**Mutables**]()
-  [Push]()
-  [Splice]()
-  [Sort]()

3. [**Metodos string**]()
-  [Split](#String.split())

4. [**Metodos Obkects**]()
-  [Key]()
-  [Values]()
## Array.foreach()
## Array.map()
- Recibe una funcion que se va a ejecutar en cada iteracion de array retornando una copia modificada o no del array iterado
- El array retornado puede tener menor o la misma cantidad de elementos que contenia el array original
## Array.filter()
- La funcion itera sobre cada elemento del array
- Recibe una funcion que deberia contener una condicion para evaluar el elemento que se esta iterando dentro del Array
- Retorna una copia del arreglo original con los elementos que hayan cumplido con la condicion
- El array retornado puede contener la misma o menos cantidad de elemento que contenia el arreglo original

## Array.reduce()
- Recibe como parametro una funcion y un valor que sera el estado inicial del acumulador
- Toma la funcion y la reduce a un solo valor a retornar
- La funcion que recibe tiene como parametros un acumulador y el item del arreglo que se esta iterando
- "Reduce" en cada iteracion retorna el nuevo valor que tendra el acumulador en la siguiente iteracion
## Array.some()
- "Some" recibe como parametro una funcion que deberia contener una condicional
- Retorna un valor Booleano
- Si almenos un elemento del arreglo cumple con la condicion retornara un "True"
- Si ningun elemento del arreglo cumple con la condicion el valor retornado sera "False"
## Array.every()
- "Every" recibe como parametro una funcion que deberia contener una condicion
- Retorna un valor Booleano
- Si cada uno de los elementos del arreglo cumplen con la condicion retornara "True"
- Si almenos un elemnento del arreglo no cumple con la condicion se retornara "False"

## Array.find()
- "find" recibe como parametro una funcion que deberia contener una condicion de busqueda
- Retorna un solo elemento del Array
- Retorna el valor del primer elemento en el array que haya cumplido con la condicion
- Si ningun elemento del arreglo cumple con la condicion retorna "undefined"

## Array.findIndex()
- "FindIndex" recibe como parametro una funcion que deberia contener una condicion de busqueda
- Retorna un numero entero
- Retorna la posicion o el indice que ocupe el primer elemento que haya cumplido con la condicion
- Si ningun elemento en el arreglo cumple con la condicion retorna -1
## Array.includes()
- Recibe como parametro el valor que se esta buscando en un "array" y opcionalmente un indice representado por un numero entero
- Retorna un valor Booleano
- Retorna "true" si uno de los elementos en el arreglo contiene el valor que se busca
- Retorna "false" si ninguno de los elementos contiene el valor buscado
- Si se recibio el indice como segundo parametro este nos indicara la posicion en el arreglo donde se empezara la busqueda
## Array.join()
- Recibe como parametro un "string"
- "join" concatena todos los elementos de un arreglo en un solo "string" uniendolos mediante el parametro "string" que recibio la funcion
## Array.concat()
- Recibe como parametro otro "array"
- Retorna un nuevo "array" fusionado
- Este nuevo arreglo contendra los elementos del arreglo original y el arreglo que se recibio como parametro
## Array.flat()
- Recibe como parametro la "profundidad de un arreglo" representada por un "int"
- Por defecto recibe como parametro 1
- Es para la manipulacion de "arreglos anidados"
- Toma un arreglo de multiples niveles y lo aplana a un solo nivel
- Retorna una copia aplanada del arreglo original
## String.split()
- Recibe como parametro un "string"
- Retorna un "array" de "strings" dividiendo el "string" original por el parametro recibido