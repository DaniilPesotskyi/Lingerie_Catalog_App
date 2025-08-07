import {Container} from "@/components";

import Header from "@/layouts/Header/Header.tsx";

import ProductsList from "./ProductsList/ProductsList.tsx";
import Filters from "./Filters/Filters.tsx";

const CatalogPage = () => {

    return (
        <Container>
            <Header/>

            <Filters/>

            <ProductsList/>
        </Container>
    )
}

export default CatalogPage