import Papa from "papaparse";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.resolve(
    "public",
    "Electric_Vehicle_Population_Data.csv"
  );

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const file = fs.readFileSync(filePath, "utf8");
  let results;

  try {
    results = Papa.parse(file, {
      header: true,
      dynamicTyping: true,
    });
    //console.log(results.data)
    return NextResponse.json({ results }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
