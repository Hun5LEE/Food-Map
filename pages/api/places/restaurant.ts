import axios from "axios";

export default async function handler(req: any, res: any) {
  try {
    if (req.method === "GET") {
      const URL =
        "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
      const options = {
        params: {
          bl_latitude: "11.847676",
          tr_latitude: "12.838442",
          bl_longitude: "109.095887",
          tr_longitude: "109.149359",
        },
        headers: {
          "X-RapidAPI-Key":
            "82285e1d04msh14aeaedb155e876p131051jsnb8bb89203348",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      };
      const {
        data: { data },
      } = await axios.get(URL, options);
      return res.status(200).json("성공");
    }
  } catch (err) {
    console.log(err);
  }
}
