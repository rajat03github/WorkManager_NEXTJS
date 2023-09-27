import { NextResponse } from "next/server";

export const GET = (request, { params }) => {
  console.log(params);
  const { userId } = params;
  console.log("User id is", userId);
  return NextResponse.json({
    message: "testing delete",
  });
};
