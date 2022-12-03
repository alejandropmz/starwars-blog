const getState = ({ getStore, getActions, setStore }) => {
	return {
    //se traen todos los planetas a store para poder manejarlos dentro de la aplicación
		store: {
      planets:[]
		}, //store es donde se guarda la data
		actions: {
      getPlanets: async () => {
        let reply = await fetch("https://swapi.tech/api/planets") //Repasar bien esto de los fetch y las peticiones
        let data = await reply.json()
        setStore({
          ...getStore(),
          planets: data.results
        })
      }

		} //acción es lo que se hace con esa data
	}; // En este caso es hacer un una petición a la api de star wars donde se le haga un set a ese estado deconstruyendolo y anexando la data de planets.results 
};

export default getState;
