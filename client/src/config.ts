console.log(process.env)
export const {
    REACT_APP_API:api='http://localhost:8080/api', 
    REACT_APP_LOCALHOST:localhost='http://localhost/'
} = process.env
