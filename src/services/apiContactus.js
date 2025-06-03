import supabase from "./supabase"

export async function getContactus() {
    const { data, error } = await supabase.from('contactus').select('*');

    if (error) {
        console.error(error)
        throw new Error('Contact-Us could not be loaded');
    }

    return data;
}

export async function createContactus(newContactus) {

    const { data, error } = await supabase
        .from('contactus')
        .insert([newContactus])
        .select()

    if (error) {
        console.error(error)
        throw new Error('Contact-Us could not be created');
    }
    return data;
}