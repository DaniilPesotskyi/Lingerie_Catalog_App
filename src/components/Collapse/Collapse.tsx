import {type FC, type ReactNode} from "react";
import {motion} from "framer-motion";

import type {IStyledComponent} from "@/types/components";

import {StyledCollapse} from "./styles.ts";

interface ICollapseProps extends IStyledComponent {
    children: ReactNode;
    orientation?: "horizontal" | "vertical";
    open: boolean;
}

const Collapse: FC<ICollapseProps> = (
    {
        children,
        open,
        customStyles,
        orientation = 'vertical'
    }) => {
    const isHorizontal = orientation === "horizontal";

    const variants = {
        closed: isHorizontal
            ? {width: 0, opacity: 1}
            : {height: 0, opacity: 1},
        open: isHorizontal
            ? {width: "auto", opacity: 1}
            : {height: "auto", opacity: 1}
    };

    return (
        <StyledCollapse customStyles={customStyles}>
            <motion.div
                style={{
                    overflow: "hidden",
                    whiteSpace: isHorizontal ? "nowrap" : "normal"
                }}
                initial="closed"
                animate={open ? "open" : "closed"}
                exit="closed"
                variants={variants}
                transition={{type: "tween", duration: 0.3}}
            >
                {children}
            </motion.div>
        </StyledCollapse>
    );
};

export default Collapse;