import { Link } from "@tanstack/react-router";

function NavigationBar() {
    var paragraphStyling=" ml-4 text-white"
    return (
        <div className="flex bg-primary py-2 items-center mb-6 gap-6">
            <Link to="/">
                <p className={paragraphStyling}>About Project</p>
            </Link>
            <Link to='/category'>
                <p className={paragraphStyling}>Category Table</p>
            </Link>
            <a 
                className={paragraphStyling + " ml-auto mr-8"} 
                href="https://github.com/kcarnrite/municipal-spending-dashboard">
                    Source Code
            </a>
        </div>


    );
}

export default NavigationBar;
