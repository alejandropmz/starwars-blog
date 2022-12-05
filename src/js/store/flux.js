const getState = ({ getStore, getActions, setStore }) => {
	return {
    //se traen todos los planetas a store para poder manejarlos dentro de la aplicación
		store: {
      planets:[],
      films:[],
      people:[],
      starships:[],
      species:[],
      vehicles:[]
		}, //store es donde se guarda la data
		actions: {
      getAllElements: async (resource, pagination = {}) => {

        let param = ""
        if (!!pagination.page){ //si me piden una página en ESPECÍFICO (!!)
          param = `?page=${pagination.page}&limit=${pagination.limit||10}` // Se concatena entonces la página en específico que se está evaluando y el límite de esa misma página, si por alguna razón no tiene limite entones se coloca 10 por defecto.
        }
        
        //Repasar bien esto de los fetch y las peticiones
        let reply = await fetch("https://swapi.tech/api/"+resource+param) //por defecto no se agrega nada en param (cadena vacía), se agrega entonces dependiendo de si se tiene o no información de paginación (condición superior)
        if (!reply.ok){
          console.error(reply.status+": "+reply.statusText)
          return
        }
        let data = await reply.json()
        let newStore = {...getStore()}
        newStore[resource] = data.result || data.results //esto es lo mismo que hacer store.planets (por ejemplo), pero al hacerlo así se puede mapear los valores e ir pasando cada componente en el parametro resource
        setStore(newStore)
      }
		} //acción es lo que se hace con esa data
	}; // En este caso es hacer un una petición a la api de star wars donde se le haga un set a ese estado deconstruyendolo y anexando la data de planets.results 
};

export default getState;
