import { NextResponse } from "next/server";

export const GET = async () => {
  const apiKey = process.env.NYT_API_KEY;

  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return NextResponse.json(data);
};
