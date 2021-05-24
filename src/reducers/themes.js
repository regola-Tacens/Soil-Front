export default (themes =[], action) => {

    switch (action.type){
        case 'CREATE_THEME' : 
            return [...themes, action.payload]
        
        case 'FETCH_THEMES' :
            return action.payload

        case 'UPDATE_THEME' :
            return themes.map(theme =>(
                theme._id === action.payload._id ? action.payload : theme
            ))
        
        case 'ERASE_THEME':
                return themes.filter((theme)=> theme._id !== action.payload)

        default :
            return themes

    }

}
