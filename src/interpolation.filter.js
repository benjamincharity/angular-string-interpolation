export function InterpolationFilter(
    bcInterpolationService
) {
    'ngInject';

    return interpolate;


    /**
     * Interpolate a string
     *
     * @param {String} string Text to interpolate
     * @param {Array} values Values to inject into placeholders
     * @return {String} output
     */
    function interpolate(string, values) {
        var foo = 'unused'
        return bcInterpolationService.interpolate(string, values)
    }

}

