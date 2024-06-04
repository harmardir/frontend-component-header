import React from 'react';
export interface OverflowScrollContextProps {
    setOverflowRef: () => void;
    isScrolledToStart: boolean;
    isScrolledToEnd: boolean;
    scrollToPrevious: () => void;
    scrollToNext: () => void;
}
export interface ChipCarouselProps {
    className?: string;
    items: Array<React.ReactElement>;
    ariaLabel: string;
    disableOpacityMasks?: boolean;
    onScrollPrevious?: () => void;
    onScrollNext?: () => void;
    canScrollHorizontal?: boolean;
    offset?: number | string;
    offsetType?: 'percentage' | 'fixed';
    gap?: number;
}
declare const ChipCarousel: React.ForwardRefExoticComponent<ChipCarouselProps & React.RefAttributes<HTMLDivElement>>;
export default ChipCarousel;
