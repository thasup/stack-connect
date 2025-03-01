"use client";

import * as React from "react";

import { ROUTE } from "@/constants/common";
import FrontLayout from "@/components/layouts/FrontLayout";


export default function FeelinksPage() {
  return (
    <FrontLayout
      cardImage="https://res.cloudinary.com/thasup/image/upload/v1740776548/stack%20connect/feelinks-masked-banner_fwrdky.jpg"
      backgroundImage="https://res.cloudinary.com/thasup/image/upload/v1740741438/central/landscape/justin-bisson-beck-YwFHhIgG77M-unsplash_iljp5o.jpg"
      generatorLink={ROUTE.FEELINKS.SUB_PAGE.GAME.PATH}
      gameLink={ROUTE.FEELINKS.SUB_PAGE.LOBBY.PATH}
    />
  );
}
