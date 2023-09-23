import { NextResponse } from "next/server";

export const GET = (request) => {
  return NextResponse.json({
    success: false,
    message: "Done Tho",
  });
};
