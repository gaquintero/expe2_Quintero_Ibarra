# expe2_Quintero_Ibarra

- Se debe copiar y pegar la apyKey en os archivos enviroment.prod.ts y enviroment.ts. con un atributo llamado apiKey
- Crear un servicio para poder utilizar la api, con el comando : Ionic g service services/noticias 
-importar HttpClientModule en el archivo app.module.ts.
-en noticias.service.ts. en el constructor implementaremos private http: HttpClient
-luego creamos un metodo que nos retornara el encabezado de la api
-Iniciado el servidor, hay que dirigirse a la consola donde debemos inspeccionar si se encuentran los objetos correspondientes de la api implementada
-Crear interfaces.ts y exportamos las clases con los atributos correspondientes para poder vizualisar de manera correcta la api.
-importamos la interface en el archivo noticias.service.ts 
-definimos un arreglo para poder almacenar las noticias, como por ejemplo Article la cual debemos importar en la cabezera del page
-Ingresamos cada objeto con el metodo push.
-En el html de noticias creamos la codificacion necesaria para poder mostrar los datos, teniendo en cuenta que hay que recorrer el arreglo que implementamos en el ts.
	con un ngFor.
-Instalar en consola el plugin de storage "npm install --save @ionic/storage" 
-Importamos storage en el archivo app.module.ts. 
-Crear un servicio para los datos = "Ionic g service services/servicesdatos"
-En el servicio creado en el paso anterior debemos imoportar storage, al igual que definiremos una interface con atributos de identificacion.
-Inyectamos en el constructor un objeto de tipo Storage de ámbito private, este objeto nos dara la opcion de acceder a :  get, set,
clear, entre otros
-Implementamos los metodos de CRUD.