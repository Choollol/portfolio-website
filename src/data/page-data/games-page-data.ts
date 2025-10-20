import { GAME_THUMBNAILS_PATH } from "@/utils/imageUtils";
import { PageSummaryInfo } from "@/utils/pageUtils";
import { html } from "code-tag";


function getGameUrl(path: string) {
  return `https://choollol.itch.io/${path}`;
}

export const gamesSummaryData: PageSummaryInfo[] = [
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Towhere_Thumbnail.png` },
    title: "To Where We Were",
    text: html`
      "To Where We Were" is a walking simulator about being brought to the
      afterlife. The narrator plays the part of Death, accompanying the
      protagonist as they find their way to the end. It was made in 48 hours and
      was my submission to "Spring 2025 VGDC ZotJam."
    `,
    targetUrl: getGameUrl("to-where-we-were"),
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Hedgehog_Thumbnail.png` },
    title: "Hedgehog's Dilemma",
    text: html`
      I worked on this game along with four other developers as a submission to
      "Global Game Jam 2025." It is a game very similar to Peggle, however, the
      player is periodically forced to choose modifiers that change how the game
      is played.
    `,
    targetUrl: "https://ctnp.itch.io/hedgehogs-dilemma",
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Ghostly_Reflection_Thumbnail.png` },
    title: "A Ghostly Reflection",
    text: html`
      This game, a puzzle-platformer, was my submission to "Fall 2024 VGDC
      ZotJam" hosted by the Video Game Development Club at UC Irvine. The
      protagonist, a ghost, is able to travel into alternate dimensions by
      entering mirrors. Their goal? To catch that dastardly jack-o'-lantern once
      and for all.
    `,
    targetUrl: getGameUrl("a-ghostly-reflection"),
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Left_Behind_Thumbnail.png` },
    title: "Left Behind",
    text: html`
      After taking a break from game development, I decided to return to it and
      participate in a game jam. I made this game in four days for "Weekly Jam
      #2. Players rewind time to restart the level, however, each time they do,
      they leave a copy of themself behind. Depending on their color, colliding
      with their left-behind bodies will have different results.
    `,
    targetUrl: getGameUrl("left-behind"),
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Untable_Thumbnail.png` },
    title: "Untable",
    text: html`
      This is a point-and-click puzzle game developed in three days for "Jam
      Off! #1" inspired by games such as "There Is No Game." In fact, that was
      one of the themes I chose to follow. Players annoy the narrator by
      destroying the legs of a table over and over, dropping its top onto a
      button to continue to the next level.
    `,
    targetUrl: getGameUrl("untable"),
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Hunter_Thumbnail.png` },
    title: "Hunter",
    text: html`
      "Hunter" was also developed in two days. The game jam's theme was
      "Daylight Horror," and I had never developed a horror-like game before.
      This game is also a platformer, but instead of solving puzzles, players
      possess monsters' bodies and fight against a bot.
    `,
    targetUrl: getGameUrl("hunter"),
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Sonic_Thumbnail.png` },
    title: "Sonic Boost",
    text: html`
      I developed this game in two days for "NSJS | Summer 2023 Jam #11", the
      first game jam I joined whose time constraint was under two weeks, much
      less two days. It is a puzzle-platformer where players use sound waves to
      boost themselves through the air to reach the goal.
    `,
    targetUrl: getGameUrl("sonic-boost"),
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Plucki_Thumbnail.png` },
    title: "Plucki's Golden Town",
    text: html`
      In this game, players deliver food and ingredients to and from a
      restaurant called "Plucki's Eats." They earn money through completing a
      minigame called Coinfall which is essentially a typing game. After
      upgrading their vehicle and earning enough coins, players can then
      discover the secret hidden inside the restricted area.
    `,
    targetUrl: getGameUrl("pluckis-golden-town"),
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Dreams_Thumbnail.png` },
    title: "Dreams of Life",
    text: html`
      "Dreams of Life" is a puzzle game consisting of four puzzles and a final
      sequence. Players dream of the protagonist's past life in each puzzle,
      playing as a fish, a rubber duck, a wildfire, and a leaf.{" "}
    `,
    targetUrl: getGameUrl("dreams-of-life"),
  },
  {
    imageInfo: { imagePath: "" },
    title: "The Blind Gladiator",
    text: html`
      I created this game for the "Games for Blind Gamers 2" game jam. This jam
      caught my eye because previously, I hadn't really thought about how blind
      people play video games, and creating video games specifically for the
      visually impaired sounded very interesting. In this game, players play as
      a blind gladiator in an arena, relying on spatial sound to gauge which
      direction their opponent is approaching from.
    `,
    targetUrl: getGameUrl("the-blind-gladiator"),
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Espace_Thumbnail.png` },
    title: "Espace",
    text: html`
      "Espace" was developed over the course of a month for a game jam called
      "KW MoLoGa Jam 2023." It's a puzzle-platformer where players are placed in
      rooms full of boxes and have to clear enough space to place their
      generator and move on to the next level.
    `,
    targetUrl: getGameUrl("espace"),
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Higher_Thumbnail.png` },
    title: "Higher",
    text: html`
      "Higher" was the first game I made using Unity and C#, developed right
      after "Slime and Witch." Players jump and launch themselves upward,
      propelling themselves off of objects that allow them to get even higher.
      It has a shop system where players earn currency after each playthrough
      and are able to buy upgrades that improve their ability to climb.
    `,
    targetUrl: getGameUrl("higher"),
  },
  {
    imageInfo: { imagePath: `${GAME_THUMBNAILS_PATH}/Slime_Thumbnail.png` },
    title: "Slime and Witch",
    text: html`
      This game has a top-down-style and was the first game I made, and I
      created it using MonoGame and C#. The protagonist, a slime, meets a witch
      in the middle of a forest and exchanges the souls of nearby monsters for
      power. Eventually, the slime powers up enough to take on the god of
      reality.
    `,
    targetUrl: getGameUrl("slime"),
  },
];
