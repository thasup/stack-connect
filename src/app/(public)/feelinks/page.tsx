"use client";

import * as React from "react";

import { ROUTE } from "@/types/common";
import FrontLayout from "@/components/layouts/FrontLayout";


export default function FeelinksPage() {
  return (
    <FrontLayout
      backgroundImage="https://res.cloudinary.com/thasup/image/upload/v1740769837/stack%20connect/ito-masked-banner_swbzhi.jpg"
      generatorLink={ROUTE.FEELINKS.SUB_PAGE.GAME.PATH}
      gameLink={ROUTE.FEELINKS.SUB_PAGE.LOBBY.PATH}
    />
  );
}
