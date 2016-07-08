import { InterpolationService } from './interpolation.service';
import { InterpolationDirective } from './interpolation.directive';
import { InterpolationController } from './interpolation.controller';

angular.module('bc.AngularStringInterpolation', [])
    .directive('bcInterpolate', InterpolationDirective)
    .controller('InterpolationController', InterpolationController)
    .service('bcInterpolationService', InterpolationService)
;

