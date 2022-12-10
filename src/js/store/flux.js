const getState = ({ getStore, getActions, setStore }) => {
	return {
    //se traen todos los planetas a store para poder manejarlos dentro de la aplicación
		store: {
      planets:[],
      films:[],
      people:[],
      starships:[],
      species:[],
      vehicles:[],
      favorites:[]
		}, //store es donde se guarda la data
		actions: {
      getAllElements: async (resource, pagination = {}) => {

        let param = "" //Se crea el string vacío para posteriormente llenarlo con la info que deseemos
        if (!!pagination.page){ //si me piden una página en ESPECÍFICO (!!)
          param = `?page=${pagination.page}&limit=${pagination.limit||10}` // Se concatena entonces la página en específico que se está evaluando y el límite de esa misma página, si por alguna razón no tiene limite entones se coloca 10 por defecto.
        }
        
        //Repasar bien esto de los fetch y las peticiones
        let reply = await fetch("https://swapi.tech/api/"+resource+param) //por defecto no se agrega nada en param (cadena vacía), se agrega entonces dependiendo de si se tiene o no información de paginación (condición superior)
        if (!reply.ok){
          console.error(reply.status+": "+reply.statusText)
          return
        }
        let data = await reply.json() // espera que se convierta la respuesta en un objeto javascript
        let newStore = {...getStore()} // deconstrúye el store y lo guarda en una nueva variable
        newStore[resource] = data.result || data.results //esto es lo mismo que hacer store.planets (por ejemplo), es decir en el deconstruido de newStore busca el elemento específico con el que se desee trabajar (planets, starships etc)
        // toda la info de getStore se suplanta con la data de cada elemento (los cuales se están pasando por el parametro resource), ej, planets, starships etc
        setStore(newStore)
        return {
          records: data.total_records || null,
          pages: data.total_pages || null
        }
      },
      getAllDetails: async (resource, id) =>{ // Creamos otra actions el cual nos traiga los detalles de la data de postman, en este caso los elementos más el id de cada uno
        let reply = await fetch(`https://www.swapi.tech/api/${resource}/${id}`) //hacemos las petición a la API con los parametros que se le pasan, para planets, starships etc y el id de cada uno de ellos. La diferencia de la petición principal es que aquella es una petición general, esta segunda es una petición especifica la cual se valida por el id
        if (!reply.ok){
          console.error("Error: "+reply.status+": "+reply.statusText)
          return
        }
        let data = await reply.json()
        return { //en este caso a diferencia del primer actions get (que guardamos la información en un store) en este caso solo la vamos a retornar más no a guardar en un store, en este caso solo trae lo que está dentro de properties
          ...data.result.properties
        }
      },
      /* addFavorites: (add) => {
        
      },
      deleteFavorites: (remove) => {
        
      }, */
      changeFavorite: (data) => { //La data que se captura en el evento se pasa a la función changeFavorites en el componente
        let foundIndex = getStore().favorites.findIndex(
          index=>index.link==data.link
          )
        if (foundIndex == -1){
          setStore({ //Actualizamos el store con la deconstrucción del este, y actualizamos los favoritos con los favoritos más el elemento que se agrega
            ...getStore(), //se deconstruye el store
            favorites: [...getStore().favorites, data] // el arreglo favorite se va a llenar con el store ACTUAL deconstruido más el elemento que se agrega en el parametro de la funcion 
          })
        } else {
          let newFavorites = [...getStore().favorites] // se crea un arreglo donde se mete toda la info que se encuentra en el store de favorites
          newFavorites.splice(foundIndex,1) // en este caso se usa el splice para que ignore el valor qu ese le pasa en el parametro remove
          setStore({
            ...getStore(),
            favorites:newFavorites
            //se deconstruye el store y el arreglo de favorites se iguala al la info de newFavorite
          })
          }
        }
		} //acción es lo que se hace con esa data
	}; // En este caso es hacer un una petición a la api de star wars donde se le haga un set a ese estado deconstruyendolo y anexando la data de [elements].results 
};

export default getState;
