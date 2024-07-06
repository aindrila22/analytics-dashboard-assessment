import Papa from "papaparse";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.resolve("public", "Electric_Vehicle_Population_Data.csv");
    console.log("Resolved file path:", filePath);

    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath);
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const file = fs.readFileSync(filePath, "utf8");
    console.log("File read successfully");

    let results;
    try {
      results = Papa.parse(file, {
        header: true,
        dynamicTyping: true,
      });
      console.log("File parsed successfully:", results.data.length, "records");
      return NextResponse.json({ results }, { status: 200 });
    } catch (parseError:any) {
      console.error("Error parsing file:", parseError.message);
      return NextResponse.json({ error: parseError.message }, { status: 500 });
    }
  } catch (readError:any) {
    console.error("Error reading file:", readError.message);
    return NextResponse.json({ error: readError.message }, { status: 500 });
  }
}
