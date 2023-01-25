import axios from "axios";

interface IKatas {
    totalPages: number;
    totalItems: number;
    data: {
        id: string;
        name: string;
        slug: string;
        completedAt: string;
        completedLanguages: string[];
    }[];
}

/**
 * @TODO Implement this code :/
 *
 */
export default async function getSolvedKatas(): Promise<IKatas> {
    const ENDPOINT = "https://www.codewars.com/api/v1/users/mangadi3859/code-challenges/completed?page=0";
    return (await axios.get(ENDPOINT)).data;
}
