import fs from "fs/promises";
import path from "path";

export async function GET(req, context) {
    try {
        const { params }=await context;
        const filePath=path.join(process.cwd(), "src/data/blogs", `${params.topic}.json`);
        const fileContent=await fs.readFile(filePath, "utf-8");
        const data=JSON.parse(fileContent);
        return Response.json(data);
    } 
    catch (error) {
        if(error.code === "ENOENT"){
            return Response.json({error: "File not found"}, {status: 404});
        }
        return Response.json({error: "Internal Server Error"}, {status: 500});
    }
}