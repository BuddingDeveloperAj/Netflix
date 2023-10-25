import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import "./main.css"

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/signin',
                element: <Login signIn={true} />
            },
            {
                path: '/signup',
                element: <Login signIn={false} />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={myRouter} />);
