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
    <nav className="pagination-nav">
      <ul className="pagination justify-content-center">
        <li className={"bg-black page-item" + props.currentPage == 1 ? " disabled" : ""}>
          <Link
          style={{color:"yellow", border:"none", borderTop:"solid 1px gray", borderBottom:"solid 1px gray"}}
            className="page-link bg-transparent"
            to={
              props.currentPage == 1
                ? "#"
                : `/${props.type}?page=${props.currentPage - 1}`
            }
          >
            Previous
          </Link>
        </li>
        {Array(props.pages)
          .fill("")
          .map((val, page) => (
            <li
              key={page}
              className={`bg-black page-item${
                props.currentPage == page + 1 ? " active" : ""
              }`}
            >
              <Link
              style={{color:"yellow", border:"none", borderTop:"solid 1px gray", borderBottom:"solid 1px gray"}}
                className="page-link bg-transparent"
                to={`/${props.type}?page=${page + 1}`}
              >
                {page + 1}
              </Link>
            </li>
          ))}
        <li
          className={
            "page-item" + props.currentPage == props.pages ? " disabled" : ""
          }
        >
          {" "}
          {/* ese props.pages señala a la última página */}
          <Link
            style={{color:"yellow", border:"none", borderTop:"solid 1px gray", borderBottom:"solid 1px #737088"}}
            className="pagination page-link bg-transparent"
            to={
              props.currentPage == props.pages
                ? "#"
                : `/${props.type}?page=${parseInt(props.currentPage) + 1}`
            }
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};
