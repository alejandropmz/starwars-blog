import React from "react";
import { Link } from "react-router-dom";

export const Pagination = (props) => {

  /* props que va a recibir el componente ya que pagination se va a usar dentro de los views que tengan más de una página
  
  pages: cantidad de páginas que hay dentro del elemento
  currentPage: página actual en la que que se está
  type: si es people, planets o starships por ej.

  */


  //la condición del li indica que si estamos en la página actual se agregue la clase active (lo rellena de color azul) al la páginación
  //El Array(props.pages) obliga a crear un nuevo arreglo con la cantidad de posiciones que haya en props.pages, en este caso 10. Al se un arreglo, se comienza a contabilizar desde 0 por lo que a cada page se le suma 1 

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={"page-item"+props.currentPage == 1?" disabled":""}>
          <Link className="page-link">Previous</Link>
        </li>
          {Array(props.pages).fill("").map((val,page)=>(
            <li key={page} className={`page-item${props.currentPage==page+1?" active":""}`}> 
            <Link className="page-link" to={`/${props.type}?page=${page+1}`}>
              {page+1}
            </Link>
          </li>
          ))}
        <li className={"page-item"+props.currentPage == props.pages?" disabled":""}> {/* ese props.pages señala a la última página */}
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
