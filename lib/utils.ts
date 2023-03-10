import getCodewarUser from "./getCodewarUser";
import getSolvedKatas from "./getSolvedKatas";
import { IKataInfo } from "./getKata";

export type UnPromise<T> = T extends Promise<infer U> ? U : never;

export interface IServerProps extends JSX.Element {
    codewars: {
        user: UnPromise<ReturnType<typeof getCodewarUser>>;
        katas: UnPromise<ReturnType<typeof getSolvedKatas>>;
        katasInfo: IKataInfo[];
    };
}
