/**
 * Copyright (c) 2016 by Björn Harrtell.
 * License: https://github.com/bjornharrtell/jsts/blob/master/LICENSE_BHARRTELL_BSD3.txt
 * @module GeoJSONWriter
 */

import GeoJSONParser from './GeoJSONParser'

/**
 * Writes the GeoJSON representation of a {@link Geometry}. The
 * The GeoJSON format is defined <A
 * HREF="http://geojson.org/geojson-spec.html">here</A>.
 */
export default class GeoJSONWriter {
  /**
   * The <code>GeoJSONWriter</code> outputs coordinates rounded to the precision
   * model. Only the maximum number of decimal places necessary to represent the
   * ordinates to the required precision will be output.
   *
   * @param {GeometryFactory} geometryFactory
   */
  constructor () {
    this.parser = new GeoJSONParser(this.geometryFactory)
  }

  /**
   * Converts a <code>Geometry</code> to its GeoJSON representation.
   *
   * @param {Geometry}
   *          geometry a <code>Geometry</code> to process.
   * @return {Object} The GeoJSON representation of the Geometry.
   */
  write (geometry) {
    return this.parser.write(geometry)
  }
}