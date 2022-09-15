

import { AdminNav } from "../nav/AdminNav"
import { ChefNav } from "../nav/ChefNav"
import { AdminViews } from "./AdminViews"
import { ChefViews } from "./ChefViews"


export const ApplicationViews = () => {
    const localCookUser = localStorage.getItem("cook_user")
    const cookUserObject = JSON.parse(localCookUser)

    if (cookUserObject.admin) {
        //return admin view
        return (<>

            <AdminNav />
            <AdminViews />
        </>)
    }
    else {
        return (<>

            <ChefNav />
            <ChefViews />
        </>)
    }

}