import { Project } from "./components/projects";

export const projects: Project[] = [
    {
        image: "images/minirc.png",
        alt: "minirc",
        label: "minirc",
        description: "A tiny, no-bling-bling IRC client written from scratch in Rust.",
        link: "https://github.com/ranmaru22/minirc"
    },
    {
        image: "images/divibot.png",
        alt: "DiviBot",
        label: "DiviBot",
        description:
            "A simple Discord bot written in Rust that helps with dice rolling for pen & paper RPGs.",
        link: "https://github.com/ranmaru22/divibot"
    },
    {
        image: "images/fso.svg",
        alt: "Full Stack Open",
        label: "Full Stack Open",
        description:
            "Solutions for the exercises of the University of Helsinki's Full Stack Open certificate.",
        link: "https://github.com/ranmaru22/fullstackopen"
    },
    {
        image: "images/odinbook.png",
        alt: "Odinbook",
        label: "Odinbook",
        description:
            "A Facebook clone written in pure TypeScript as capstone for The Odin Project.",
        link: "https://github.com/ranmaru22/odinbook"
    },
    {
        image: "images/odin.svg",
        alt: "The Odin Project",
        label: "The Odin Project",
        description:
            "Solutions for the exercises of The Odin Project's full-stack node.js curriculum.",
        link: "https://github.com/ranmaru22/the_odin_project"
    }
];
