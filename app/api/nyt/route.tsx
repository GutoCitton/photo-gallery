import { NextResponse } from "next/server";

export const GET = async () => {
  const apiKey = "yZaNxAqY1Uuf5O1k5GvUqTkUMrls7qE8YbMoTn0zJmIMFSsG";

  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return NextResponse.json(data);
};
