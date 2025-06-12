import supabase, { supabaseUrl } from "../../services/supabase"

export async function getBlogs() {
    const { data, error } = await supabase.from("blog").select("*");

    if (error) {
        console.error(error);
        throw new Error("Blog could not be loaded");
    }
    return data;
}

export async function createEditBlogs(newBlog, id) {
    const hasImagePath = newBlog.imageSrc?.startsWith?.(supabaseUrl);
    let imagePath = newBlog.imageSrc;

    if (!hasImagePath && newBlog.imageSrc instanceof File) {
        const imageName = `${Math.random()}-${newBlog.imageSrc.name}`.replaceAll("/", "");
        imagePath = `${supabaseUrl}/storage/v1/object/public/blog-images/${imageName}`;

        const { error: storageError } = await supabase.storage
            .from("blog-images")
            .upload(imageName, newBlog.imageSrc);

        if (storageError) {
            console.error(storageError);
            throw new Error("Blog image could not be uploaded");
        }
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
        console.error(authError);
        throw new Error("User not authenticated");
    }

    let query = supabase.from("blog");

    if (!id) {
        query = query.insert([{ ...newBlog, imageSrc: imagePath, authorid: user.id }]);
    } else {
        query = query.update({ ...newBlog, imageSrc: imagePath, authorid: user.id }).eq("id", id);
    }

    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        if (!id && hasImagePath) {
            await supabase.storage.from("blog-images").remove([imagePath.split("/").pop()]);
        }
        throw new Error(`Blog could not be ${id ? "updated" : "created"}`);
    }

    return data;
}

export async function deleteBlog(id) {
    const { data, error } = await supabase.from("blog").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Blog could not be deleted");
    }
    return data;
}

// export async function getBlogId(id) {
//     if (!id || isNaN(id)) {
//         console.error("Invalid blog ID:", id);
//         throw new Error("Invalid blog ID");
//     }

//     const { data, error } = await supabase
//         .from("blog")
//         .select(`*
//   blog_with_authors:authorid (
//         UID,
//         DisplayName,
//         Email
//     )
//    `).eq("id", id)
//         .single();


//     console.log(data)

//     if (error) {
//         console.error("Supabase error:", error.message, error.details, error.hint);
//         throw new Error(`Blog not found: ${error.message}`);
//     }

//     return {
//         ...data,
//         users: data.user_profiles,
//     };
// }

export async function getBlogId(id) {
    if (!id) {
        console.error("Invalid blog ID:", id);
        throw new Error("Invalid blog ID");
    }

    const { data, error } = await supabase
        .from("blog_with_authors")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error("Supabase error:", error.message, error.details, error.hint);
        throw new Error(`Blog not found: ${error.message}`);
    }

    return data;
}
