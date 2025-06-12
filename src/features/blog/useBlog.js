import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlogId } from "./apiBlogs";

export function useBlog() {
    const { blogId } = useParams();

    const {
        isLoading,
        data: blog,
        error,
    } = useQuery({
        queryKey: ["blog", blogId],
        queryFn: () => getBlogId(blogId),
        retry: false,
    });
    return { isLoading, blog, error };
}