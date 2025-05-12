import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../auth/context/AuthContext"
import { PublicRoute } from "../../PublicRoute"

describe('pruebas en <PublicRoute />', () => { 

    test('debe de mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute />
            </AuthContext.Provider>
        )

    })
 })