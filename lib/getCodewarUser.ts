import axios from "axios";

interface IKataUser {
    id: string;
    username: string;
    name: string;
    honor: number;
    clan: string;
    leaderboardPosition: number;
    skills: any[];
    ranks: {
        overall: { rank: number; name: string; color: string; score: number };
        languages: {
            [lang: string]: { rank: number; name: string; color: string; score: number };
        };
    };
    codeChallenges: { totalAuthored: number; totalCompleted: number };
}

/**
 * @TODO Implement this code :/
 *
 */
export default async function getCodewarUser(): Promise<IKataUser> {
    const ENDPOINT = "https://codewars.com/api/v1/users/mangadi3859";
    return (await axios.get(ENDPOINT)).data;
}
