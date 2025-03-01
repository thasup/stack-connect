"use client";

import * as React from "react";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ForumIcon from "@mui/icons-material/Forum";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

import Content from "@/components/Content";
import RegisterContainer from "@/components/RegisterContainer";
import { ROUTE } from "@/constants/common";
import LobbyLayout from "@/components/layouts/LobbyLayout";

const items = [
  {
    icon: <ForumIcon sx={{ color: "white" }} />,
    title: "Bluff & Deceive",
    description: (
      <>
        <p>In this game of deception, your words are your weapon.</p>
        <p>
          Can you fool your friends with a completely made-up answer, or will you sniff out the real
          truth hiding in a sea of lies?
        </p>
      </>
    )
  },
  {
    icon: <EmojiObjectsIcon sx={{ color: "white" }} />,
    title: "Mind-Bending, Bizarre Trivia",
    description: (
      <>
        <p>
          From ancient laws that still exist today to strange world records no one should be proud
          of, every round is a test of wit and instinct.
        </p>
      </>
    )
  },
  {
    icon: <CelebrationIcon sx={{ color: "white" }} />,
    title: "Chaos, Comedy & Unforgettable Moments",
    description: (
      <>
        <p>
          Every session is a wild ride of outrageous claims, hilarious guesses, and jaw-dropping
          revelations.
        </p>
        <p>
          Whether you’re a master manipulator or just along for the laughs, there’s never a dull
          moment!
        </p>
      </>
    )
  },
  {
    icon: <AutoFixHighIcon sx={{ color: "white" }} />,
    title: "AI-Powered Trickery",
    description: (
      <>
        <p>
          With an ever-growing database of real yet ridiculous facts and AI-crafted fake answers, no
          two games are ever the same.
        </p>
        <p>
          The game adapts to your playstyle, making sure every round is a fresh and thrilling
          experience!
        </p>
      </>
    )
  }
];

export default function SoundsFishyLobbyPage() {
  return (
    <LobbyLayout backgroundImage="https://res.cloudinary.com/thasup/image/upload/v1740741434/central/landscape/tim-stief-YFFGkE3y4F8-unsplash_cbbwzg.jpg">
      <Content title="🐟 Sounds Fishy" items={items} />
      <RegisterContainer link={ROUTE.SOUNDS_FISHY.SUB_PAGE.GAME.PATH} />
    </LobbyLayout>
  );
}
