"use client";

import * as React from "react";

import { ROUTE } from "@/constants/common";
import FrontLayout from "@/components/layouts/FrontLayout";

export default function SoundsFishyPage() {
  return (
    <FrontLayout
      cardImage="https://res.cloudinary.com/thasup/image/upload/v1740776549/stack%20connect/sounds-fishy-masked-banner_d0baz6.jpg"
      backgroundImage="https://res.cloudinary.com/thasup/image/upload/v1740741434/central/landscape/tim-stief-YFFGkE3y4F8-unsplash_cbbwzg.jpg"
      generatorLink={ROUTE.SOUNDS_FISHY.SUB_PAGE.GENERATOR.PATH}
      gameLink={ROUTE.SOUNDS_FISHY.SUB_PAGE.LOBBY.PATH}
    />
  );
}
