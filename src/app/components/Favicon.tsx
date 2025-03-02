"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { ROUTE } from "@/constants/common";

export default function Favicon() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to update all favicon links
    const updateFavicons = (newHref: string) => {
      // Get all favicon related links
      const links = document.querySelectorAll("link[rel*='icon']");

      // If no existing links, create a new one
      if (links.length === 0) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = newHref;
        document.head.appendChild(link);
        return;
      }

      // Update all existing favicon links
      links.forEach((link) => {
        if (link instanceof HTMLLinkElement) {
          link.href = newHref;
        }
      });
    };

    // Determine which favicon to use
    let faviconPath = "/stack-connect-logo.svg";
    if (pathname?.startsWith(ROUTE.FEELINKS.PATH)) {
      faviconPath = "/favicon/feelinks.ico";
    } else if (pathname?.startsWith(ROUTE.SOUNDS_FISHY.PATH)) {
      faviconPath = "/favicon/sounds-fishy.ico";
    }

    // Update the favicons with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      updateFavicons(faviconPath);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
