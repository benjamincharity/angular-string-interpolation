import { InterpolationController } from './.controller';

export function InterpolationDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            bcString: '&',
            bcArray: '='
        },
        template: '<span></span>',
        link: linkFunction,
        controller: InterpolationController,
        controllerAs: 'vm',
    };

    return directive;


    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, vm) {

    }

}

