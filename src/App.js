import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MyContext from "./utils/MyContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = () => {
    const [userName, setUserName] = useState("elonmusk");
    return (
        <Provider store={appStore}>
            <MyContext.Provider value={{ username: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </MyContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                // Chunk
                element: <Suspense fallback={<h1>Loading..</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error />,
    },

])

root.render(<RouterProvider router={appRouter} />);