import prisma from "@/database/db.config";
import { Post } from "@prisma/client";

const getEvents= async (): Promise<Post[]> => {

    const posts = await prisma.post.findMany({});
    
    return posts;
};

export  {getEvents};