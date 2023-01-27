import axios from "axios";

export interface IKataInfo {
    id: string;
    name: string;
    slug: string;
    url: string;
    category: string;
    description: string;
    tags: string[];
    languages: string[];
    rank: {
        id: number;
        name: string;
        color: string;
    };
    createdBy: {
        username: string;
        url: string;
    };
    approvedBy: {
        username: string;
        url: string;
    };
    totalAttempts: number;
    totalCompleted: number;
    totalStars: number;
    voteScore: number;
    publishedAt: string;
    approvedAt: string;
}

export default async function getKataInfo(id: string): Promise<IKataInfo> {
    return (await axios.get(`https://www.codewars.com/api/v1/code-challenges/${id}`, { timeout: 10000 })).data;
}
