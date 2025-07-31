import {Container, IconButton} from "@/components";

import {FilterIcon} from "@/icons";

import ProductsList from "./ProductsList/ProductsList.tsx";
import Filters from "./Filters/Filters.tsx";

import {PageHeading} from "./styles.ts";

const CatalogPage = () => {

    const handleMenuOpen = () => {
        document.body.classList.add('menu-open')
        document.body.classList.add('no-scroll')
    }

    return (
        <Container>
            <PageHeading>
                Каталог
                <IconButton onClick={handleMenuOpen}>
                    <FilterIcon/>
                </IconButton>
            </PageHeading>

            <Filters/>

            <ProductsList/>
        </Container>
    )
}

export default CatalogPage