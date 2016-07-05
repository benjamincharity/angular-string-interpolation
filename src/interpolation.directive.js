import { InterpolationController } from './interpolation.controller';

export function InterpolationDirective(
) {
    'ngInject';

    // TODO: Make directive work as an attribute also?
    const directive = {
        restrict: 'E',
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

