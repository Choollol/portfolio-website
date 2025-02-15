import { PageSummaryInfo } from "@/utils/PageUtils";
import slimeThumbnail from "@/assets/game_thumbnails/Slime_Thumbnail.png";
import higherThumbnail from "@/assets/game_thumbnails/Higher_Thumbnail.png";
import espaceThumbnail from "@/assets/game_thumbnails/Espace_Thumbnail.png";
import dreamsThumbnail from "@/assets/game_thumbnails/Dreams_Thumbnail.png";
import pluckiThumbnail from "@/assets/game_thumbnails/Plucki_Thumbnail.png";
import sonicThumbnail from "@/assets/game_thumbnails/Sonic_Thumbnail.png";
import hunterThumbnail from "@/assets/game_thumbnails/Hunter_Thumbnail.png";
import untableThumbnail from "@/assets/game_thumbnails/Untable_Thumbnail.png";
import leftBehindThumbnail from "@/assets/game_thumbnails/Left_Behind_Thumbnail.png";
import ghostlyReflectionThumbnail from "@/assets/game_thumbnails/Ghostly_Reflection_Thumbnail.png";
import hedgehogThumbnail from "@/assets/game_thumbnails/Hedgehog_Thumbnail.png";

function getGameUrl(path: string) {
  return `https://choollol.itch.io/${path}`;
}

export const gamesSummaryData: PageSummaryInfo[] = [
  {
    imageInfo: { imagePath: hedgehogThumbnail },
    title: "Hedgehog's Dilemma",
    text: (
      <>
        I worked on this game along with four other developers as a submission
        to "Global Game Jam 2025." It is a game very similar to Peggle, however,
        the player is periodically forced to choose modifiers that change how
        the game is played.
      </>
    ),
    targetUrl: "https://ctnp.itch.io/hedgehogs-dilemma",
  },
  {
    imageInfo: { imagePath: ghostlyReflectionThumbnail },
    title: "A Ghostly Reflection",
    text: (
      <>
        This game, a puzzle-platformer, was my submission to "Fall 2024 VGDC
        ZotJam" hosted by the Video Game Development Club at UC Irvine. The
        protagonist, a ghost, is able to travel into alternate dimensions by
        entering mirrors. Their goal? To catch that dastardly jack-o'-lantern
        once and for all.
      </>
    ),
    targetUrl: getGameUrl("a-ghostly-reflection"),
  },
  {
    imageInfo: { imagePath: leftBehindThumbnail },
    title: "Left Behind",
    text: (
      <>
        After taking a break from game development, I decided to return to it
        and participate in a game jam. I made this game in four days for "Weekly
        Jam #2. Players rewind time to restart the level, however, each time
        they do, they leave a copy of themself behind. Depending on their color,
        colliding with their left-behind bodies will have different results.
      </>
    ),
    targetUrl: getGameUrl("left-behind"),
  },
  {
    imageInfo: { imagePath: untableThumbnail },
    title: "Untable",
    text: (
      <>
        This is a point-and-click puzzle game developed in three days for "Jam
        Off! #1" inspired by games such as "There Is No Game." In fact, that was
        one of the themes I chose to follow. Players annoy the narrator by
        destroying the legs of a table over and over, dropping its top onto a
        button to continue to the next level.
      </>
    ),
    targetUrl: getGameUrl("untable"),
  },
  {
    imageInfo: { imagePath: hunterThumbnail },
    title: "Hunter",
    text: (
      <>
        "Hunter" was also developed in two days. The game jam's theme was
        "Daylight Horror," and I had never developed a horror-like game before.
        This game is also a platformer, but instead of solving puzzles, players
        possess monsters' bodies and fight against a bot.
      </>
    ),
    targetUrl: getGameUrl("hunter"),
  },
  {
    imageInfo: { imagePath: sonicThumbnail },
    title: "Sonic Boost",
    text: (
      <>
        I developed this game in two days for "NSJS | Summer 2023 Jam #11", the
        first game jam I joined whose time constraint was under two weeks, much
        less two days. It is a puzzle-platformer where players use sound waves
        to boost themselves through the air to reach the goal.
      </>
    ),
    targetUrl: getGameUrl("sonic-boost"),
  },
  {
    imageInfo: { imagePath: pluckiThumbnail },
    title: "Plucki's Golden Town",
    text: (
      <>
        In this game, players deliver food and ingredients to and from a
        restaurant called "Plucki's Eats." They earn money through completing a
        minigame called Coinfall which is essentially a typing game. After
        upgrading their vehicle and earning enough coins, players can then
        discover the secret hidden inside the restricted area.
      </>
    ),
    targetUrl: getGameUrl("pluckis-golden-town"),
  },
  {
    imageInfo: { imagePath: dreamsThumbnail },
    title: "Dreams of Life",
    text: (
      <>
        "Dreams of Life" is a puzzle game consisting of four puzzles and a final
        sequence. Players dream of the protagonist's past life in each puzzle,
        playing as a fish, a rubber duck, a wildfire, and a leaf.{" "}
      </>
    ),
    targetUrl: getGameUrl("dreams-of-life"),
  },
  {
    imageInfo: { imagePath: "" },
    title: "The Blind Gladiator",
    text: (
      <>
        I created this game for the "Games for Blind Gamers 2" game jam. This
        jam caught my eye because previously, I hadn't really thought about how
        blind people play video games, and creating video games specifically for
        the visually impaired sounded very interesting. In this game, players
        play as a blind gladiator in an arena, relying on spatial sound to gauge
        which direction their opponent is approaching from.
      </>
    ),
    targetUrl: getGameUrl("the-blind-gladiator"),
  },
  {
    imageInfo: { imagePath: espaceThumbnail },
    title: "Espace",
    text: (
      <>
        "Espace" was developed over the course of a month for a game jam called
        "KW MoLoGa Jam 2023." It's a puzzle-platformer where players are placed
        in rooms full of boxes and have to clear enough space to place their
        generator and move on to the next level.
      </>
    ),
    targetUrl: getGameUrl("espace"),
  },
  {
    imageInfo: { imagePath: higherThumbnail },
    title: "Higher",
    text: (
      <>
        "Higher" was the first game I made using Unity and C#, developed right
        after "Slime and Witch." Players jump and launch themselves upward,
        propelling themselves off of objects that allow them to get even higher.
        It has a shop system where players earn currency after each playthrough
        and are able to buy upgrades that improve their ability to climb.
      </>
    ),
    targetUrl: getGameUrl("higher"),
  },
  {
    imageInfo: { imagePath: slimeThumbnail },
    title: "Slime and Witch",
    text: (
      <>
        This game has a top-down-style and was the first game I made, and I
        created it using MonoGame and C#. The protagonist, a slime, meets a
        witch in the middle of a forest and exchanges the souls of nearby
        monsters for power. Eventually, the slime powers up enough to take on
        the god of reality.
      </>
    ),
    targetUrl: getGameUrl("slime"),
  },
];
