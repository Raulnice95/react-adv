import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes';
import { Suspense } from 'react';


export const Navigation = () => {
  return (
    // El Suspense sirve para mostrar un componente cuando se esta cargando el componente al navegar a la ruta y aun no ha finalizado . 
    // Mientras tanto, se muestra dicho componente, o en el caso de que haya una excepcion
    <Suspense fallback={ <span>Loading...</span> }>
      <BrowserRouter>
          <div className='main-layout'>
              <nav>
                  <img src={ logo } alt="React Logo" />
                  <ul>
                    { routes.map(({to, name}) => (
                      <li key={to}>
                        <NavLink 
                          to={ to } 
                          className={ ({isActive}) => isActive ? 'nav-active' : '' }>
                          {name}
                        </NavLink></li>))}
                  </ul>
              </nav>

              <Routes>
                { 
                  routes.map(({path, Component}) => (
                    <Route 
                      key={path} 
                      path={ path } 
                      element= { <Component />}
                    />
                  ))
                }

                {/* Para manejar la excepcion de navegar a una ruta no definida. Redirige al home y reemplaza la url incorrecta introducida por el home */}
                <Route path='/*' element={ <Navigate to={ routes[0].to } replace/>} />
              </Routes>

          </div>
      </BrowserRouter>
    </Suspense>
  )
}
