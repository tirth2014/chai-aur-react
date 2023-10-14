import React from "react";
import { Header,Footer} from "./components/index";
import { Outlet } from "react-router-dom";
// Outlet will take this Layout as a base and jya pan "Outlet" component use kariye e change thase ena uparnu & nichenu badhu same rehse.
// So, we want to use same Header and Footer only in all the pages.

// An <Outlet> should be used in parent route elements to render their child route elements. 
// This allows nested UI to show up when child routes are rendered. 
// If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

export default function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
