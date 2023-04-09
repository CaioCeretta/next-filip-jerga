import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const dataRes = await fetch('http://localhost:3333/api/resources')
  const data = await dataRes.json();

  res.send(data);
}