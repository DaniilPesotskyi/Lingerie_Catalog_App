import React, {useState, useRef, useEffect} from "react";

import type {IStyledComponent} from "@/types/components";

import {StyledContentContainer, StyledToggleButton, StyledWrapper} from "./styles.ts";

interface ExpandableContentProps extends IStyledComponent {
    children: React.ReactNode[];
    component?: React.ElementType;
    maxHeight: number;
}

const ExpandableContent: React.FC<ExpandableContentProps> = (
    {
        children,
        component = 'div',
        customStyles,
        maxHeight,
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [shouldHide, setShouldHide] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current.scrollHeight;
            setShouldHide(contentHeight > maxHeight);
        }
    }, [children, maxHeight]);

    const toggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <StyledWrapper>
            <StyledContentContainer
                as={component}
                ref={contentRef}
                customStyles={customStyles}
                style={{
                    maxHeight: isOpen || !shouldHide ? 'none' : `${maxHeight}px`,
                }}
            >
                {children.map((child, index) => (
                    <React.Fragment key={index}>
                        {child}
                    </React.Fragment>
                ))}
            </StyledContentContainer>

            {shouldHide && (
                <StyledToggleButton onClick={toggleOpen}>
                    {isOpen ? 'згорнути' : 'показати більше'}
                </StyledToggleButton>
            )}
        </StyledWrapper>
    );
};

export default ExpandableContent;