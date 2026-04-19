import { LinkCardInfo } from "@/utils/linkCardUtils";
import { html } from "code-tag";

export const projectCards: LinkCardInfo[] = [
  {
    title: "PickSome Playlist Maker",
    text: html`
      A website to create YouTube playlists by randomly picking from a user's
      playlist library. My goal was to gain a deeper understanding of
      technologies and concepts like Next.js and user authentication. I also
      personally use YouTube to listen to music, which was part of why I chose
      this idea!
    `,
    targetUrl: "https://picksome-playlist-maker.vercel.app/",
  },
  {
    title: "Muna's Menagerie",
    text: html`
      This is a browser extension that adds pets to your browser! I developed it
      because I wanted to learn more about web development, and I used
      TypeScript, React, and a framework called WXT. Clicking this card will
      open the extension's Google Chrome web store page.
    `,
    targetUrl:
      "https://chromewebstore.google.com/detail/munas-menagerie/beejipbnbgcpmhabegicgapojpaggjip",
  },
  {
    title: "Portfolio Website",
    text: html`
      That's this website! I am developing it using TypeScript, React, and a few
      other tools such as Vite and React Router. The source code can be found by
      clicking this card.
    `,
    targetUrl: "https://github.com/Choollol/portfolio-website",
  },
  {
    title: "Lox Interpreters",
    text: html`
      Following along Robert Nystrom's book *Crafting Interpreters*, I coded two
      interpreters for a language called Lox. CPPLox, coded in C++, is a
      tree-walk interpreter and is simpler but slower. CLox, coded in C, is a
      bytecode virtual machine and is more complex but much faster.
    `,
    targetUrl: "https://github.com/Choollol/CLox",
  },
  {
    title: "URLO+",
    text: html`
      URLO+ is an improved version of URLO that I developed in C++ using the
      Windows API. It fixes the problem of URLO being limited to a single list
      by providing a menu of buttons corresponding to text files containing
      URL's.
    `,
    targetUrl: "https://github.com/Choollol/URLO_Plus",
  },
  {
    title: "URLO",
    text: html`
      URLO, or URL Opener, is a simple C program I wrote that reads from a text
      file named urls.txt and opens every URL found inside. I wanted to program
      something in C that could be useful to myself, and I realized having a
      program to open the same URL's I often open (email, calendar, etc.) would
      be convenient.
    `,
    targetUrl: "https://github.com/Choollol/URLO",
  },
];
