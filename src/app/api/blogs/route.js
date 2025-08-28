import fs from "fs/promises";
import path from "path";

export async function GET() {
    try {
        const filePath=path.join(process.cwd(), "src/data/blogs");
        const files=await fs.readdir(filePath);
        return Response.json(files);
    } 
    catch (error) {
        if(error.code === "ENOENT"){
            return Response.json({error: "File not found"}, {status: 404});
        }
        return Response.json({error: "Internal Server Error"}, {status: 500});
    }
}