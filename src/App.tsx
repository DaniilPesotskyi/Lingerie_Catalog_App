import {Route, Routes} from "react-router-dom";

import RootLayout from "./layouts/RootLayout.tsx";

import CatalogPage from "@/pages/CatalogPage/CatalogPage.tsx";
import ProductPage from "@/pages/ProductPage/ProductPage.tsx";
import RemainsPage from "@/pages/RemainsPage/RemainsPage.tsx";
import GalleryPage from "@/pages/GalleryPage/GalleryPage.tsx";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<RootLayout/>}>
                <Route path={'/'} element={<CatalogPage/>}/>
                <Route path="/:id" element={<ProductPage/>}>
                    <Route path={'/:id/remains'} element={<RemainsPage/>}/>
                    <Route path={'/:id/gallery'} element={<GalleryPage/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default App
