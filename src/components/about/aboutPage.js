//this module has the responsibility of displaying the about and community guidelines page 
import "./aboutPage.css"


export const AboutPage = () => {
    return <>
        <form className="about">
            <header>About Us</header>
            <div className="bio">When it comes to cooking the right stuff, nobody knows better ingredients or recipe secrets like your neighbors around the block! CookCom encourages you and local chefs in your area to show what you're made of and display wonderful tasty recipes to bring about more togetherness and strengthen community ties! Simply post your latest creations, peruse others' masterpieces, and overall enjoy the experience of cooking as a whole!</div>
        </form>
        <form className="guidelines">
            <header>Community Guidelines</header>
            <div className="entry"> Due to the importance of keeping CookCom a safe, family-friendly app for those who love providing tasty meals right from their own backyward, users MUST live within the premesis of selected neighborhoods. If the address provided does not match up with any logged street, the user added will be immediately deleted. If a user posts a recipe that is considered to be 'not family-friendly', has suspicious ingredients, or questionable instructions, the submission will be deleted.</div>
        </form>
    </>
}