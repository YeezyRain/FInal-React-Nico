import './App.css'
import RouterApp from './routers/RouterApp'
import { CartProvider } from './context/CartContext'

function App() {
    return (
        <CartProvider>
            <RouterApp />
        </CartProvider>
    )
}

export default App
