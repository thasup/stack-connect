"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";
import { getGameData, resetGameData, shuffleArray } from "@/utils/helper";
import { Participant } from "@/types/feelinks";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/types/common";
import SendIcon from "@mui/icons-material/Send";
import StatsContainer from "@/components/StatsContainer";
import { ItoResponse } from "@/types/ito";
import ItoCardContainer from "../components/ItoCardContainer";

// const categories = [
//   { name: "Animals & Nature", icon: "🐾" },
//   { name: "Famous People", icon: "👑" },
//   { name: "Food & Drink", icon: "🍕" },
//   { name: "Movies & TV", icon: "🍿" },
//   { name: "Music & Lyrics", icon: "🎶" },
//   { name: "Sports & Games", icon: "⚽" },
//   { name: "Travel & Adventures", icon: "🌍" },
//   { name: "Technology & Gadgets", icon: "💻" },
//   { name: "Books & Literature", icon: "📚" },
//   { name: "Mythology & Legends", icon: "⚡" },
//   { name: "Action & Movement", icon: "💃" },
//   { name: "Party Time", icon: "🎉" }
// ];

// const categories = [
//   { name: "Numbers & Mathematics", icon: "🔢" },
//   { name: "Famous Landmarks", icon: "🏛️" },
//   { name: "Colors & Shapes", icon: "🎨" },
//   { name: "Everyday Objects", icon: "🛍️" },
//   { name: "Popular Foods", icon: "🍕" },
//   { name: "Random Fun", icon: "🎲" }
// ];

const languages = [
  { name: "English" },
  { name: "Thai" },
  { name: "French" },
  { name: "Spanish" },
  { name: "German" },
  { name: "Italian" },
  { name: "Portuguese" },
  { name: "Russian" }
];

// const CHUNK_SIZE = 3;

export default function ItoGeneratorPage() {
  const router = useRouter();
  const [question, setQuestion] = useState(
    "Please select a category to generate question."
  );
  const [isLoading, setIsLoading] = useState(false);
  const [sound, setSound] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [label, setLabel] = useState({
    least: "",
    most: ""
  });
  const [language, setLanguage] = useState("English");
  const [participants, setParticipants] = useState<Participant[]>([]);

  function handleClickCategory(category: string) {
    setSelectedCategory(category);
  }

  function handleEndGame() {
    resetGameData();
    router.push(ROUTE.ITO.PATH);
  }

  function handleSubmitCustomCategory() {
    setSelectedCategory(customCategory);
  }

  function handleLanguageChange(event: SelectChangeEvent) {
    setLanguage(event.target.value);
  }

  // const categoryChunks = () => {
  //   return Array.from({ length: Math.ceil(categories.length / CHUNK_SIZE) }, (_, i) =>
  //     categories.slice(i * CHUNK_SIZE, i * CHUNK_SIZE + CHUNK_SIZE)
  //   );
  // };

  useEffect(() => {
    // retrieve participants from local storage
    const storedData = getGameData();
    const modifiedGameData = storedData.participants.map((participant) => {
      return {
        name: participant.name,
        score: participant.score
      };
    });
    const shuffledGameData = shuffleArray(modifiedGameData);
    setParticipants(shuffledGameData);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setIsLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_AI_ENDPOINT}/ito`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          category: selectedCategory,
          lang: language
        })
      })
        .then((response) => response.json())
        .then((response: ItoResponse) => {
          const audioUrl = `data:audio/mp3;base64,${response.audio}`;
          const data = response.data;
          setQuestion(data.question);
          setLabel({
            least: data.least,
            most: data.most
          });
          setSound(audioUrl);
        })
        .catch((err) => {
          setQuestion("Something went wrong, please try again.");
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
          setSelectedCategory("");
          setCustomCategory("");
        });
    }
  }, [language, selectedCategory]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        {/* Header Section */}
        <Stack spacing={1}>
          <Typography variant="h5">
            Welcome to 🎲 <strong>ITO</strong> – A Cooperative Card Game of Hints & Strategy!
          </Typography>
          <Typography variant="body1">
            Work together to arrange the number cards in the correct order by giving clever hints
            without revealing the values.
          </Typography>
          <Typography variant="body1">
            Challenge your friends, interpret each other&apos;s clues, and
            see if you can place all the cards in ascending order!
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
            sx={{ pt: "24px" }}
          >
            <Typography variant="h6">Player Turn: WIP...</Typography>
            <Button
              variant="outlined"
              color="error"
              sx={{ flex: 1, wordBreak: "break-word", maxWidth: "fit-content" }}
              onClick={handleEndGame}
            >
              End Game
            </Button>
          </Stack>
        </Stack>

        {/* Main Content Area */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          {/* Left Section */}
          <Stack sx={{ width: { xs: "100%", md: "50%" } }} spacing={2}>
            {/* Category Panel */}
            <Container
              maxWidth="md"
              sx={{ mt: 4, p: 4, border: "1px solid white", borderRadius: "8px" }}
            >
              <Stack direction="column" spacing={2} justifyContent="center" height="100%">
                <Typography variant="h6">Pick Your Theme!</Typography>
                {/* {categoryChunks().map((chunk, index) => (
                  <Stack key={index} direction="row" spacing={2} justifyContent="center">
                    {chunk.map((category) => (
                      <Button
                        key={category.name}
                        variant="outlined"
                        fullWidth
                        sx={{ flex: 1, wordBreak: "break-word" }}
                        disabled={isLoading}
                        onClick={() => handleClickCategory(category.name)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </Stack>
                ))} */}

                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={2}
                  justifyContent="flex-start"
                >
                  <FormControl sx={{ m: 1, minWidth: 200 }} size="small" error={language === ""}>
                    <InputLabel id="language-select-label">Language</InputLabel>
                    <Select
                      labelId="language-select-label"
                      id="language-select"
                      size="medium"
                      label="Language"
                      value={language}
                      disabled={isLoading}
                      onChange={handleLanguageChange}
                    >
                      {languages.map((language) => (
                        <MenuItem key={language.name} value={language.name}>
                          {language.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    required
                    id="outlined-required"
                    label="Custom Theme"
                    sx={{ width: "100%" }}
                    value={customCategory}
                    disabled={isLoading}
                    onChange={(e) => setCustomCategory(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    disabled={isLoading}
                    onClick={handleSubmitCustomCategory}
                  >
                    <SendIcon />
                  </Button>
                </Stack>

                <Typography variant="h6">OR</Typography>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  sx={{ flex: 1, wordBreak: "break-word" }}
                  disabled={isLoading}
                  onClick={() => handleClickCategory("Random Fun")}
                >
                  Random Fun 🎉
                </Button>
              </Stack>
            </Container>
          </Stack>

          {/* Right Section */}
          <Stack sx={{ width: { xs: "100%", md: "50%" } }} spacing={2}>
            <ItoCardContainer
              question={question}
              sound={sound}
              label={label}
              disabled={isLoading}
            />
          </Stack>
        </Stack>

        {/* Bottom Section */}
        <Stack spacing={2}>
          <StatsContainer participants={participants} />
        </Stack>
      </Stack>
    </Container>
  );
}
