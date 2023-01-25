import Badge from "./Badge";
import { useState, useRef } from "react";
import { IServerProps } from "../pages/index";

export default function Resume({ katas, user }: IServerProps["codewars"] & { [k: string]: any }) {
    return (
        <div className="codewar__card  px-5 py-3">
            <div className="card__nav mb-4 text-xl font-semibold">Codewars Stats</div>
            <div className="card_tabs">
                <div className={`flex justify-between items-center px-10 py-6 rounded-sm bg-neutral-100 shadow-lg`}>
                    <div className="flex justify-center flex-col">
                        <img src="https://avatars.githubusercontent.com/u/65892564?s=400" alt="avatar" className="aspect-square rounded-full overflow-hidden p-2 w-32 p-1 bg-neutral-400" />
                        <p className="mt-2 text-xl">{user.name}</p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <div className=""></div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}
