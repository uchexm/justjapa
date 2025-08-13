"use client";

import { useEffect } from "react";

export function HydrationFix() {
    useEffect(() => {
        // Clean up any browser extension attributes that might cause hydration issues
        const cleanupExtensionAttributes = () => {
            const body = document.body;
            if (body) {
                // List of known extension attributes that can cause hydration issues
                const extensionAttributes = [
                    "inject_video_svd",
                    "data-new-gr-c-s-check-loaded",
                    "data-gr-ext-installed",
                    "cz-shortcut-listen",
                    "data-lt-installed",
                    "spellcheck",
                    "data-sharkid",
                    "data-sharklabel",
                ];

                extensionAttributes.forEach((attr) => {
                    if (body.hasAttribute(attr)) {
                        body.removeAttribute(attr);
                    }
                });
            }
        };

        // Clean immediately and set up observer for future changes
        cleanupExtensionAttributes();

        // Optional: Set up mutation observer to catch future extension injections
        const observer = new MutationObserver(() => {
            cleanupExtensionAttributes();
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: [
                "inject_video_svd",
                "data-new-gr-c-s-check-loaded",
                "data-gr-ext-installed",
                "cz-shortcut-listen",
                "data-lt-installed",
                "spellcheck",
                "data-sharkid",
                "data-sharklabel",
            ],
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return null;
}
