const CATEGORY_KEY = "csc_categories";
export const getCategories = () => {

    const data =
        localStorage.getItem(CATEGORY_KEY);


    return data
        ? JSON.parse(data)
        : [

            "CSC Services",
            "PAN Card Services",
            "Aadhaar Services",
            "Banking Services",
            "Insurance Services",
            "Government Schemes",
            "Bill Payments",
            "Education Services",
            "Railway / Flight Booking",
            "Utility Services"

        ];
};
export const saveCategories = (categories) => {


    localStorage.setItem(

        CATEGORY_KEY,

        JSON.stringify(categories)

    );


};