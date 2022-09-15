//this module has the responsibility of creating function called navbar
//that returns what chefs and admins see when they login 

import { AdminNav } from "./AdminNav"
import { ChefNav } from "./ChefNav"

//create the funtion called navbar and export 
export const Navbar = () => {

    const localCookUser = localStorage.getItem("cook_user")
    const cookUserObject = JSON.parse(localCookUser)

    if (cookUserObject.staff) {
        return <AdminNav />
    }
    else {

        return <ChefNav />
    }

}