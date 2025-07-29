import React from "react";

import type {IStyledComponent} from "@/types/components";

import {AnimatePresence, motion, type Variants} from "framer-motion";

import {StyledWrapper, StyledSpinner} from "./styles.ts";

interface ISpinnerLoaderProps extends IStyledComponent {
    show: boolean;
}

const loaderVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

const spinTransition = {
    repeat: Infinity,
    duration: 1
};

const Loader: React.FC<ISpinnerLoaderProps> = ({show, customStyles}) => {
    return (
        <AnimatePresence>
            {show && (
                <StyledWrapper
                    as={motion.div}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={loaderVariants}
                    transition={{duration: 0.3}}
                    customStyles={customStyles}
                >
                    <StyledSpinner
                        as={motion.span}
                        animate={{rotate: 360}}
                        transition={spinTransition}
                    />
                </StyledWrapper>
            )}
        </AnimatePresence>
    )
}

export default Loader