/**
 * Supplies a set of utility methods for building Geometry objects from lists
 * of Coordinates.
 *
 * Note that the factory constructor methods do <b>not</b> change the input
 * coordinates in any way.
 *
 * In particular, they are not rounded to the supplied <tt>PrecisionModel</tt>.
 * It is assumed that input Coordinates meet the given precision.
 */


/**
 * Constructs a GeometryFactory that generates Geometries having a floating
 * PrecisionModel and a spatial-reference ID of 0.
 */
jsts.geom.GeometryFactory = function() {

};
