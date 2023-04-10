import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from '../logo.svg'
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={ logo } alt="React Logo" />
                <ul>
                  <li>
                    <NavLink to="/" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Shopping</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={ ({isActive}) => isActive ? 'nav-active' : '' }>About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
                  </li>
                </ul>
            </nav>

            <Routes>
              <Route path='about' element={ <h1>About</h1>} />
              <Route path='users' element={ <h1>Users</h1>} />
              <Route path='/' element={ <ShoppingPage />} />

              {/* Para manejar la excepcion de navegar a una ruta no definida. Redirige al home y reemplaza la url incorrecta introducida por el home */}
              <Route path='/*' element={ <Navigate to="/home" replace/>} />
            </Routes>

        </div>
    </BrowserRouter>
  )
}
