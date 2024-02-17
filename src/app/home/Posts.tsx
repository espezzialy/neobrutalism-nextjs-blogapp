import { PrismaClient } from "@prisma/client";
import PostCard from "./PostCard";

const prisma = new PrismaClient();

export default async function Posts() {
  const users = await prisma.user.findMany();
  console.log(users);
  const posts = await prisma.post.findMany();
  console.log(posts);

  return (
    <div>
      <h2 className="text-4xl text-center mt-6">Trending</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
