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
      getAllElements: async (resource) => {
        let reply = await fetch("https://swapi.tech/api/"+resource) //Repasar bien esto de los fetch y las peticiones
        if (!reply.ok){
          console.error(reply.status+": "+reply.statusText)
          return
        }
        let data = await reply.json()
        let newStore = {...getStore()}
        newStore[resource] = data.results || data.result //esto es lo mismo que hacer store.planets (por ejemplo), pero al hacerlo así se puede mapear los valores e ir pasando cada componente en el parametro resource
        setStore(newStore)
      }
		} //acción es lo que se hace con esa data
	}; // En este caso es hacer un una petición a la api de star wars donde se le haga un set a ese estado deconstruyendolo y anexando la data de planets.results 
};

export default getState;
