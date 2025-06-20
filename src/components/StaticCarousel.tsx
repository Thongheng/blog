"use client";

import React from "react";
import { Carousel as OnceUICarousel } from "@once-ui-system/core";

// A wrapper for the Carousel component that disables animations
export const StaticCarousel: React.FC<React.ComponentProps<typeof OnceUICarousel>> = (props) => {
    return <OnceUICarousel {...props} />;
};
