
function NavigationBar() {
    var paragraphStyling=" ml-4 text-white"
    return (
        <div className="flex bg-primary py-2 items-center mb-6 gap-6">
            <p className={paragraphStyling}>About Project</p>
            <p className={paragraphStyling}>Category Table</p>
            <p className={paragraphStyling}>Search By Municipality</p>
            <p className={paragraphStyling + " ml-auto mr-8"}>Source Code</p>
        </div>

    );
}

export default NavigationBar