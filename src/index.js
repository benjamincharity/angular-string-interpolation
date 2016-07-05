import { InterpolationDirective } from './interpolation.directive';
import { InterpolationController } from './interpolation.controller';

angular.module('bc.angular-string-interpolation', [])
    .directive('InterpolationDirective', InterpolationDirective)
    .controller('InterpolationController', InterpolationController)
;

