/**
 * Add your actions here
 
 
 In redux/actions.js. Write an action function addAuthor that returns an action with an ADD_AUTHOR type.

Update your reducer to handle ADD_AUTHOR action types. 

When this kind of action is received, update the authors array by creating a new author object and merging it into the authors state. (Hint: your returned state needs to return a NEW array - you will need to use concat())
Modify the SideBar so that it's connected to redux. Change "add authors" button in the Sidebar so that it calls the addAuthor action function instead of the old addAuthorHandler. (Hint: You will need mapDispatchToProps)
You'll know when you're done when clicking the "ADD AUTHOR" button adds a new author to your list

*/


export const addAuthor = () => {
    console.log("action creator")
    return {
        type: "ADD_AUTHOR",
    }
}

export const deleteAuthor = author => {
    return {
        type: "DELETE_AUTHOR",
        payload: author
    }
}