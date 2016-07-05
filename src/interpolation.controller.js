export class InterpolationController {

    constructor(
        $scope
    ) {
        'ngInject';

        this.$scope = $scope;
        this._activate();

    }




    _activate() {
        this.string = this.interpolate(this.bcString, this.bcArray);

        // This watch is needed since the items being passed in may not exist yet (async data)
        this.$scope.$watch('vm.bcArray', (newValue) => {
            this.string = this.interpolate(this.bcString, this.bcArray);
        });
    }


    /**
     * Interpolate text with items from an array
     *
     * @param {String} text
     * @return {String} text (interpolated)
     */
    interpolate(text, array) {
        const regex = /\${(.*?)}/g;
        const length = array.length;

        // Loop through the array of replacement items
        for (let i = 0; i < length; i += 1) {
            // Replace each matched item
            text = text.replace(regex, convert)
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

