import supabase, { supabaseUrl } from "../../services/supabase"

export async function getBlogs() {
    const { data, error } = await supabase.from('blog').select('*');

    if (error) {
        console.error(error)
        throw new Error('Blog could not be loaded');
    }
    return data;
}

export async function createBlogs(newBlog) {
    const imageName = `${Math.random()}-${newBlog.imageSrc.name}`.replaceAll(
        "/",
        ""
    );
    const imagePath = `${supabaseUrl}/storage/v1/object/public/blog-images/${imageName}`


    // 1. Create cabin 
    const { data, error } = await supabase.from('blog').insert([{ ...newBlog, imageSrc: imagePath }]);

    if (error) {
        console.error(error)
        throw new Error('Blog could not be created');
    }

    // 2. Upload image
    const { error: storageError } = await supabase.storage
        .from('blog-images')
        .upload(imageName, newBlog.imageSrc);

    // 3.  Delete the cabin IF there  was an error uploading image
    if (storageError) {
        await supabase.from("blogs").delete().eq("id", data.id);
        console.error(storageError)
        throw new Error('Blog image could not be uploaded and the cabin was not created');
    }

    return data;
}