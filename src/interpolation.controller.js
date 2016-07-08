export class InterpolationController {

    constructor(
        $scope,
        bcInterpolationService
    ) {
        'ngInject';

        this.$scope = $scope;
        this.bcInterpolationService = bcInterpolationService;


        this._activate();

    }




    _activate() {
        // Interpolated the string and expose to the DOM
        this.string = this.bcInterpolationService.interpolate(this.bcString, this.bcArray);

        // This watch is needed since the items being passed in may not exist yet (async data).
        // This also allows us to dynamically re-interpolate if any of the array items change.
        this.$scope.$watch('vm.bcArray', (newValue) => {
            this.string = this.bcInterpolationService.interpolate(this.bcString, this.bcArray);
        });
    }

}

