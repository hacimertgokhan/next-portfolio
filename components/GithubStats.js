"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const GitHubStats = ({ username , repository }) => {
    const [repoData, setRepoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepoData = async () => {
            try {
                const res = await fetch(
                    `https://api.github.com/repos/${username}/${repository}`
                );
                if (!res.ok) {
                    throw new Error("GitHub API hatası");
                }
                const data = await res.json();
                setRepoData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepoData();
    }, [username, repository]);

    if (loading) {
        return <p>Yükleniyor...</p>;
    }

    if (error) {
        return <p>Hata: {error}</p>;
    }

    return (
        <Link className={"relative hover:translate-x-3 transition-[250ms] hover:bg-[#202020] w-fit p-2 rounded-md"} href={repoData.html_url}>
            <div className={"h-full w-[1px] bg-[#e2e2e2] absolute left-0 top-0 bottom-0 m-auto"}></div>
            <div className={"ml-3"}>
                <strong className={"text-2xl"}>{repoData.name}</strong>
                <p className={"text-sm"}>{repoData.description}</p>
                <ul className={"text-xs"}>
                    <li><strong>🌟 Stars:</strong> {repoData.stargazers_count}</li>
                    <li><strong>🍴 Forks:</strong> {repoData.forks_count}</li>
                    <li><strong>🐛 Open Issues:</strong> {repoData.open_issues_count}</li>
                    <li><strong>🕒 Last Updated:</strong> {new Date(repoData.updated_at).toLocaleString()}</li>
                </ul>
            </div>
        </Link>
    );
};

export default GitHubStats;
