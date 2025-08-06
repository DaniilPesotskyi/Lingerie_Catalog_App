import React, {useState, type ReactNode} from 'react';
import {
    StyledExpandableText,
    type StyledExpandableTextTypes,
    ToggleButton
} from '@/components/ExpandableText/styles.ts';

interface ExpandableTextProps extends StyledExpandableTextTypes {
    children: ReactNode;
    component: React.ElementType;
    maxChars: number;
}

function extractText(children: ReactNode): string {
    let txt = '';
    React.Children.forEach(children, child => {
        if (typeof child === 'string' || typeof child === 'number') {
            txt += child;
        } else if (React.isValidElement(child)) {
            // @ts-ignore
            txt += extractText(child.props.children);
        }
    });
    return txt;
}

function getTruncatedChildren(children: ReactNode, maxChars: number): ReactNode[] {
    const result: ReactNode[] = [];
    let count = 0;

    React.Children.forEach(children, child => {
        if (count >= maxChars) return;

        if (typeof child === 'string' || typeof child === 'number') {
            const str = String(child);
            const next = count + str.length;
            if (next <= maxChars) {
                result.push(str);
                count = next;
            } else {
                result.push(str.slice(0, maxChars - count));
                count = maxChars;
            }
        } else if (React.isValidElement(child)) {
            // @ts-ignore
            const innerText = extractText(child.props.children);
            const next = count + innerText.length;

            if (next <= maxChars) {
                result.push(child);
                count = next;
            } else {
                const sliced = innerText.slice(0, maxChars - count);
                result.push(React.cloneElement(child, {}, sliced));
                count = maxChars;
            }
        }
    });

    return result;
}

const ExpandableText: React.FC<ExpandableTextProps> = (
    {
        children,
        component,
        maxChars,
        customStyles,
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const fullText = extractText(children);
    const shouldHide = fullText.length > maxChars;

    const toggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(open => !open);
    };

    const content = isOpen || !shouldHide
        ? children
        : getTruncatedChildren(children, maxChars);

    return (
        <StyledExpandableText as={component} customStyles={customStyles}>
            {content}
            {shouldHide && !isOpen && (
                <>
                    …{' '}
                    <ToggleButton customStyles={customStyles} onClick={toggleOpen}>
                        більше
                    </ToggleButton>
                </>
            )}
        </StyledExpandableText>
    );
};

export default ExpandableText;
