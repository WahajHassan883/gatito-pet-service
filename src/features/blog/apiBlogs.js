import supabase, { supabaseUrl } from "../../services/supabase"

export async function getBlogs() {
    const { data, error } = await supabase.from('blog').select('*');

    if (error) {
        console.error(error)
        throw new Error('Blog could not be loaded');
    }
    return data;
}

export async function createEditBlogs(newBlog, id) {
    const hasImagePath = newBlog.imageSrc?.startsWith?.(supabaseUrl)

    const imageName = `${Math.random()}-${newBlog.imageSrc.name}`.replaceAll(
        "/",
        ""
    );
    const imagePath = hasImagePath ? newBlog.imageSrc : `${supabaseUrl}/storage/v1/object/public/blog-images/${imageName}`


    // 1. Create cabin 
    let query = supabase.from('blog')

    // A) Create
    if (!id) query = query.insert([{ ...newBlog, imageSrc: imagePath }]);

    // B) Edit
    if (id) query = query.update({ ...newBlog, imageSrc: imagePath }).eq('id', id)

    const { data, error } = await query.select().single();

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
        await supabase.from("blog").delete().eq("id", data.id);
        console.error(storageError)
        throw new Error('Blog image could not be uploaded and the Blog was not created');
    }
    return data;
}

export async function deleteBlog(id) {

    const { data, error } = await supabase.from('blog')
        .delete().eq('id', id);

    if (error) {
        console.error(error)
        throw new Error('Blog could not be deleted');
    }
    return data;
}

export async function getBlogId(id) {
    const { data, error } = await supabase
        .from('blog')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error);
        throw new Error('Blog not found');
    }
    return data;
}