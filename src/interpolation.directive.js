import { InterpolationController } from './interpolation.controller';

export function InterpolationDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'EA',
        replace: true,
        scope: {},
        bindToController: {
            bcString: '@',
            bcArray: '=',
        },
        template: '<span data-ng-bind="vm.string"></span>',
        controller: InterpolationController,
        controllerAs: 'vm',
    };

    return directive;

}

