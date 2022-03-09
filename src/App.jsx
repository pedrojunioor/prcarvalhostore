import { AppRoutes } from './Routes'
import { AuthProvider } from './context/AuthContext'
import history from './history'

import {Header} from './components/Header/Header'

function App() {

    return (
        <div>
            <AuthProvider>
                <AppRoutes history={history} />
            </AuthProvider>
        </div>
    )
}

export default App
