"use client";

import * as React from "react";
import { ROUTE } from "@/types/common";
import FrontLayout from "@/components/layouts/FrontLayout";

export default function ItoPage() {
  return (
    <FrontLayout
      cardImage="https://res.cloudinary.com/thasup/image/upload/v1740769837/stack%20connect/ito-masked-banner_swbzhi.jpg"
      backgroundImage="https://res.cloudinary.com/thasup/image/upload/v1740741437/central/landscape/alex-mesmer-kRMKxda6aM0-unsplash_ozttwe.jpg"
      generatorLink={ROUTE.ITO.SUB_PAGE.GENERATOR.PATH}
      gameLink={ROUTE.ITO.SUB_PAGE.LOBBY.PATH}
    />
  );
}
