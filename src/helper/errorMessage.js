import { NextResponse } from "next/server";

export const errorMessage = (message, statusCode, success) => {
  return NextResponse.json(
    {
      message: message,
      success: success,
    },
    {
      status: statusCode,
    }
  );
};
