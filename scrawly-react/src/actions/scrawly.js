// Création de constantes pour stocker le nom des actions
export const UPDATE_SLUG = 'UPDATE_SLUG';
export const SCRAWLY_ADD = 'SCRAWLY_ADD';

// Met a jour le slug
export function updateSlug(slug){
    return{
        type: UPDATE_SLUG,
        payload: slug,
    }
}

// Action pour ajouter un item
export function scrawlyAdd(item){
    return{
        type: SCRAWLY_ADD,
        payload: item
    }
}