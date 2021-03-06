export class InterpolationService {

    constructor() {
        'ngInject';
    }



    /**
     * Interpolate text with items from an array
     *
     * @param {String} text Text that contains placeholders
     * @return {String} text Interpolated text
     */
    interpolate(text, array) {
        // Define a regex to look for our custom tag `${}`
        const regex = /\${(.*?)}/g;
        // Cache the array length
        const length = array.length;

        // Loop through the array of replacement items
        for (let i = 0; i < length; i += 1) {
            // Replace each matched item
            text = text.replace(regex, convert);
        }

        // Custom conversion function
        function convert(str, p1) {
            // Grab the content of the match (should be an index number)
            // Return the array item with the found index
            return array[p1];
        }

        return text;
    }


}

