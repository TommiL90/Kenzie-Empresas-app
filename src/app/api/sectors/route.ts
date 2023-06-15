import { prisma } from "@/database/prisma";
import { NextRequest, NextResponse } from "next/server";




export const GET = async () => {
  const responseCompanies = await prisma.category.findMany();
  return NextResponse.json(responseCompanies, { status: 200 });
};

