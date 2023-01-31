import type { NextApiRequest, NextApiResponse } from "next";
import getSolvedKatas from "../../lib/getSolvedKatas";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let page = parseInt(<string>req.query.page || "0");

    try {
        let kata = await getSolvedKatas(page);
        if (!kata) return res.status(404).json({ message: "Not Found" });

        res.status(200).json(kata);
    } catch (e: any) {
        console.log(e.message);
        res.status(404).json({ message: "Not Found" });
    }
}
