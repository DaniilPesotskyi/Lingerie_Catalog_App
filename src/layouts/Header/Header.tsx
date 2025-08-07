import {FilterIcon} from "@/icons";

import {Button} from "@/components";

import {filterButtonCustomStyles, StyledHeader} from "./styles.ts";

const Header = () => {

    const handleMenuOpen = () => {
        document.body.classList.add('menu-open')
        document.body.classList.add('no-scroll')
    }

    return (
        <StyledHeader>
            Каталог
            <Button
                variant={'outlined'}
                onClick={handleMenuOpen}
                customStyles={filterButtonCustomStyles}
            >
                Фільтри
                <FilterIcon/>
            </Button>
        </StyledHeader>
    )
}

export default Header