"use client"

import React from 'react';
import {
    ActivityIcon,
    BookIcon,
    EarthIcon,
    Github,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    PackageIcon, PackageSearchIcon, PersonStandingIcon, StarsIcon
} from "lucide-react";
import Link from "next/link";
import GitHubStats from "@/components/GithubStats";
import {FlipWords} from "@/components/ui/flip-words";

const Page = () => {

    const links = [
        {
            title: "Home",
            icon: <EarthIcon size={16}/>,
            href: "/",
        },
        {
            title: "About me",
            icon: <BookIcon size={16}/>,
            href: "/about",
        },
        {
            title: "Projects",
            icon: <PackageIcon size={16}/>,
            href: "/projects",
        },
        {
            title: "Activity",
            icon: <ActivityIcon size={16}/>,
            href: "/activity",
        },
        {
            title: "Career",
            icon: <PersonStandingIcon size={16}/>,
            href: "/career",
        }
    ]

    const repos = [
          "denis",
          "merui",
        "BadgePicker",
        "Elecration",
          "rust-live-md",
          "next-json-view",
          "meros",
          "fixr",
        ]

    const techs = ["Rust", "Java", "Spring", "MySQL", "SQLite", "MongoDB", "DenisDB", "Postgresql", "TailwindCSS", "Css", "Sass", "Scss", "Jwt", "npm", "Socket", "Styled-Components", "Next.js", "React", "Tauri", "Express", "Node.js", "Actix"]

    return (
        <main className={"p-16 select-none"}>
          <div className={"flex flex-row justify-between items-center"}>
              <div>
                  <h1 className={"text-2xl flex flex-row gap-1 items-center justify-start"}><EarthIcon size={24}/>H.
                      Mert Gökhan</h1>
                  <p>Fullstack Web, Cross Platform Desktop Application, CLI Developer</p>
                  <div className={"w-full h-[1px] bg-[#e2e2e2] mt-1"}></div>
              </div>
              <div className={"flex flex-row gap-3 items-center justify-center"}>
                  <Link href={"/"} className={"hover:text-indigo-500 transition-[300ms]"}><Github size={20}/></Link>
                <Link href={"/"} className={"hover:text-blue-500 transition-[300ms]"}><LinkedinIcon size={20}/></Link>
                <Link href={"/"} className={"hover:text-purple-500 transition-[300ms]"}><InstagramIcon size={20}/></Link>
                <Link href={"/"} className={"hover:text-red-500 transition-[300ms]"}><PackageSearchIcon size={20}/></Link>
            </div>
          </div>
            <div className={"w-full flex flex-row items-start gap-3 h-screen"}>
                <div className={" flex-1"}>
                    <div className={"w-96 mt-2"}>
                        {
                            links.map((item, index) => {
                                return (
                                    <Link href={item.href} key={index}>
                                        <div
                                            className={"flex flex-row gap-1 items-center hover:translate-x-2 transition-[350ms] justify-start cursor-pointer"}>
                                            {item.icon}
                                            <p className={"text-sm"}>{item.title}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={"mt-4"}>
                        <h1 className={"text-3xl flex flex-row gap-1 items-center justify-start"}><StarsIcon size={24}/>Top
                            Projects</h1>
                        <div className={"overflow-y-scroll gap-3 flex flex-col mt-2 h-[550px]"}>
                            {
                                repos.map((item, index) => {
                                    return (
                                        <GitHubStats key={index} username={"hacimertgokhan"} repository={item}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={"text-left flex flex-[2] items-start justify-start w-full h-screen"}>

                    <div className="text-4xl mx-auto font-normal text-[#e2e2e2]">
                        <h1>
                            Fullstack Web, Cross Platform Desktop Application,<br/> CLI Rust And Java Developer<br/>
                        </h1>
                        <div className={"flex flex-row flex-wrap text-sm gap-1"}>
                            {
                                techs.map((item, index) => {
                                    return (
                                        <div key={index} className={"py-1 hover:scale-105 transition-[250ms] cursor-pointer px-2 text-background bg-white rounded-md"}>
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={"mt-3"}>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;