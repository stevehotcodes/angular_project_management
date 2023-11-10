export interface InewUserDetails{
    fullname:string
    email:string
    password:string
}
export interface IuserLogin{
    email:string
    password:string
}

export interface IProject{
    id:string,
    projectTitle:string,
    projectDescription:string,
    createdAt:string,
    projectDueDate:string,
    projectStatus:'unassigned'| 'assigned' |'in progress' |'completed'
    projectComments:string,
    userID:string
    fullname:string
}