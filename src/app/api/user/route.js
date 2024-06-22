import { NextResponse } from "next/server";
import { user } from "../../../components/layout/data";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
export async function POST(request) {
  let payload = await request.json();
  console.log(payload);
  // generate unique identifier (e.g., UUID)

  console.log("ggg");

  if (!payload.name || !payload.email || !payload.age) {
    return NextResponse.json({ result: "not hello" });
  }

  return NextResponse.json({ result: "hello" });
}
