import './index.css'
import NavigationBar from './components/NavigationBar';
import { Outlet } from '@tanstack/react-router';
//import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { createRootRoute } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: App
})


function App() {
  return (
    <div>
      <NavigationBar />
      < Outlet />
      {/*< TanStackRouterDevtools />*/}
    </div>
  )
}