import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";
import { runInNewContext } from "vm";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3333/api/resources");
    const data = await dataRes.json();

    res.send(data);
  }

  if (req.method === "POST") {
    const { title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      res.status(422).send("Data is missing");
    }
    try {
      const axiosRes = await axios.post(
        "http://localhost:3333/api/resources",
        req.body
      );

      res.send(axiosRes.data)
    } catch {
      console.log('Data cannot be stored');
    }
  }
}
