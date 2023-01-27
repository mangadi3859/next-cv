import type { NextApiRequest, NextApiResponse } from "next";
import getKata, { IKataInfo } from "../../lib/getKata";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let id = req.query.id;

    if (!id) return res.status(400).json({ message: "Bad Request" });

    try {
        let kata = await getKata(<string>id);
        if (!kata) return res.status(404).json({ message: "Not Found" });

        res.status(200).json(kata);
    } catch (e) {
        res.status(404).json({ message: "Not Found" });
    }
}
