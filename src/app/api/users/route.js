// ! This will work as API's

import { NextResponse } from "next/server";

const GET = (request) => {
  const users = [
    {
      name: "rajat don",
      phone: "232313",
      email: "dsadDDADQ222asd@mail.com",
    },
    {
      name: "DSDASDAS don",
      phone: "232313",
      email: "dsadasd@mail.com",
    },
    {
      name: "rajaDR3R3R3t don",
      phone: "23231SDDD3",
      email: "dsadaDDDDDsd@mail.com",
    },
  ];

  return NextResponse.json(users);
};
//DATA POST
const POST = async (request) => {
  // console.log(request.body);
  // console.log(request.method);
  // console.log(request.cookies);
  // console.log(request.headers);
  // console.log(request.nextUrl);
  const { searchParams } = request.nextUrl;
  console.log(searchParams);

  const jsonData = await request.json();

  console.log(jsonData);

  const { yo } = jsonData;
  console.log(yo);

  return NextResponse.json({
    message: "Posting user data",
  });
};
const DELETE = (request) => {
  console.log("Delete API");
  return NextResponse.json(
    {
      success: true,
      message: "deleted",
    },
    { status: 201, statusText: "Deleted" }
  );
};
const PUT = () => {};

export { GET, POST, DELETE, PUT };
