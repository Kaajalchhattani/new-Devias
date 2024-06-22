import { NextResponse } from "next/server";
import { user } from "../../../../components/layout/data";

export function GET(response, content) {
  const data = user.filter((item) => {
    content.params.id == item.age;
    console.log(content.params.id, item.age, content.params.id == item.age);
  });
  console.log(data);
  return NextResponse.json(
    data.length == 0
      ? { result: "not found", success: false }
      : { result: { data }, success: true },
    { status: 200 }
  );
}

export async function PUT(request, content) {
  let payload = await request.json();
  console.log(payload);

  payload.id = content.params.id;
  console.log("Payload" + payload);
  console.log("Payload2" + content);
  if (!payload.id || !payload.firstName || !payload.age || !payload.email) {
    return NextResponse.json({ result: payload, success: false });
  }
  return NextResponse.json({ result: payload, success: true });
}
export function DELETE(request, content) {
  let id = content.params.id;
  if (id) {
    return NextResponse.json({ result: "User delete", success: true });
  } else {
    return NextResponse.json({
      result: "User not  deleted as not valid",
      success: false,
    });
  }
}
