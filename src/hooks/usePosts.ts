import type { Post } from "@/types/api";
import { useEffect, useState } from "react";

// hook : useState, useMemo, useEffect 등..
// 리액트가 가로채서 기능을 수행하는 기능들

function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  // 처음 로딩될 때만 useEffect 실행(fetch로)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [loading]);
  return { posts, loading };
}

export default usePosts;
