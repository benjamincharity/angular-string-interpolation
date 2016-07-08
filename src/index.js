import { InterpolationService } from './interpolation.service';
import { InterpolationDirective } from './interpolation.directive';
import { InterpolationController } from './interpolation.controller';
import { InterpolationFilter } from './interpolation.filter';

angular.module('bc.AngularStringInterpolation', [])
    .directive('bcInterpolate', InterpolationDirective)
    .controller('InterpolationController', InterpolationController)
    .filter('bcInterpolation', InterpolationFilter)
    .service('bcInterpolationService', InterpolationService)
;

