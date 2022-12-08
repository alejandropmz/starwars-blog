import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { Films } from "./views/films.jsx";
import { People } from "./views/people.jsx";
import { Planets } from "./views/planets.jsx";
import { Species } from "./views/species.jsx";
import { Starships } from "./views/starships.jsx";
import { Vehicles } from "./views/vehicles.jsx";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { PlanetsDetail } from "./views/planetsDetail.jsx";
import { FilmsDetail } from "./views/filmsDetail.jsx";
import { PeopleDetail } from "./views/peopleDetail.jsx";
import { SpeciesDetail } from "./views/speciesDetail.jsx";
import { VehiclesDetail } from "./views/vehiclesDetail.jsx";
import { StarshipsDetail } from "./views/starshipDetail.jsx";
import { LogPage } from "./views/logInpage.jsx";
import { Interactive } from "./views/interactive.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:filmid" element={<FilmsDetail />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:peopleid" element={<PeopleDetail />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:planetid" element={<PlanetsDetail />} />
            <Route path="/species" element={<Species />} />
            <Route path="/species/:specieid" element={<SpeciesDetail />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:starshipid" element={<StarshipsDetail />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:vehicleid" element={<VehiclesDetail />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/logInpage" element={<LogPage />} />
            <Route path="/interactive" element={<Interactive />} />
            <Route path="*" element={<h1>Page in progress</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

//Es el primer elemento de Route
