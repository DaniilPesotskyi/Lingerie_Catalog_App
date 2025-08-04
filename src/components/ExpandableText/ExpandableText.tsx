import React, {useState} from "react";

import {StyledExpandableText, type StyledExpandableTextTypes, ToggleButton} from "@/components/ExpandableText/styles.ts";

interface ExpandableTextProps extends StyledExpandableTextTypes {
    children: string;
    component: React.ElementType;
    maxChars: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = (
    {
        children,
        component,
        maxChars,
        customStyles,
    }) => {
    const [isOpen, setIsOpen] = useState(false);

    const shouldHide = children.length > maxChars;

    const toggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsOpen(!isOpen);
    }

    const textToRender = isOpen || !shouldHide ? children : children.slice(0, maxChars);

    return (
        <StyledExpandableText as={component} customStyles={customStyles}>
            {textToRender}
            {shouldHide && !isOpen && (
                <>
                    ..
                    <ToggleButton customStyles={customStyles} onClick={toggleOpen}>
                        більше
                    </ToggleButton>
                </>
            )}
        </StyledExpandableText>
    );
};

export default ExpandableText;
