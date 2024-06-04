import React from 'react';
declare const STYLE_VARIANTS: readonly ["primary", "success", "error", "warning"];
export type BubbleVariant = typeof STYLE_VARIANTS[number];
export interface BubbleProps {
    children: React.ReactNode;
    variant?: BubbleVariant;
    disabled?: boolean;
    className?: string;
    expandable?: boolean;
}
declare const Bubble: React.ForwardRefExoticComponent<BubbleProps & React.RefAttributes<HTMLDivElement>>;
export default Bubble;
