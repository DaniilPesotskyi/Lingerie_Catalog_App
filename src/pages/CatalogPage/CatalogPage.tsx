import {Container} from "@/components";

import ProductsList from "./ProductsList/ProductsList.tsx";

import {PageHeading} from "@/pages/CatalogPage/styles.ts";

const CatalogPage = () => {
    return (
        <Container>
            <PageHeading>Каталог</PageHeading>
            {/*Search*/}

            {/*FilterButton*/}

            <ProductsList/>
        </Container>
    )
}

export default CatalogPage