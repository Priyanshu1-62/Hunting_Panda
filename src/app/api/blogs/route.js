import fs from "fs/promises";
import path from "path";

export async function GET() {
    try {
        const filePath=path.join(process.cwd(), "src/data/blogs");
        const files=await fs.readdir(filePath);
        const data=[];
        for(let i=0;i<files.length;i++){
            const fileName=files[i];
            const currPath=path.join(filePath, fileName);
            const fileData=await fs.readFile(currPath, "utf-8");
            const parsedData=JSON.parse(fileData);
            data.push({
                "title": parsedData.title,
                "description": parsedData.description,
                "date": parsedData.date,
                "slug": parsedData.slug
            })
        }
        return Response.json(data);
    } 
    catch (error) {
        if(error.code === "ENOENT"){
            return Response.json({error: "File not found"}, {status: 404});
        }
        return Response.json({error: "Internal Server Error"}, {status: 500});
    }
}