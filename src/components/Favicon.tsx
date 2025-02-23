'use client';
import { useEffect, useState } from "react";
import Head from 'next/head';

import { ROUTE } from "@/types/common";

export default function Favicon() {
  const [favicon, setFavicon] = useState('/favicon.ico');

  useEffect(() => {
    const currentPath = window?.location?.pathname;
    if (currentPath === ROUTE.FEELINKS) {
      setFavicon('../public/favicon/feelinks.ico');
    } else if (currentPath === ROUTE.SOUNDS_FISHY) {
      setFavicon('../public/favicon/sounds-fishy.ico');
    } else {
      setFavicon('./favicon.ico');
    }
    console.log('favicon >>>', {currentPath, favicon});

  }, [window?.location?.pathname]);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={favicon} />
      </Head>
    </html>
  );
}
