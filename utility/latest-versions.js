"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestVersions = void 0;
exports.latestVersions = {
    // We could have used TypeScripts' `resolveJsonModule` to make the `latestVersion` object typesafe,
    // but ts_library doesn't support JSON inputs.
    ...require('./latest-versions/package.json')['dependencies'],
    // As Angular CLI works with same minor versions of Angular Framework, a tilde match for the current
    Angular: '^16.1.0-next.0',
    // Since @angular-devkit/build-angular and @schematics/angular are always
    // published together from the same monorepo, and they are both
    // non-experimental, they will always have the same version.
    DevkitBuildAngular: '^' + require('../package.json')['version'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0ZXN0LXZlcnNpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvc2NoZW1hdGljcy9hbmd1bGFyL3V0aWxpdHkvbGF0ZXN0LXZlcnNpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7OztBQUVVLFFBQUEsY0FBYyxHQUd2QjtJQUNGLG1HQUFtRztJQUNuRyw4Q0FBOEM7SUFDOUMsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxjQUFjLENBQUM7SUFFNUQsb0dBQW9HO0lBQ3BHLE9BQU8sRUFBRSxnQkFBZ0I7SUFFekIseUVBQXlFO0lBQ3pFLCtEQUErRDtJQUMvRCw0REFBNEQ7SUFDNUQsa0JBQWtCLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztDQUNoRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjb25zdCBsYXRlc3RWZXJzaW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiAmIHtcbiAgQW5ndWxhcjogc3RyaW5nO1xuICBEZXZraXRCdWlsZEFuZ3VsYXI6IHN0cmluZztcbn0gPSB7XG4gIC8vIFdlIGNvdWxkIGhhdmUgdXNlZCBUeXBlU2NyaXB0cycgYHJlc29sdmVKc29uTW9kdWxlYCB0byBtYWtlIHRoZSBgbGF0ZXN0VmVyc2lvbmAgb2JqZWN0IHR5cGVzYWZlLFxuICAvLyBidXQgdHNfbGlicmFyeSBkb2Vzbid0IHN1cHBvcnQgSlNPTiBpbnB1dHMuXG4gIC4uLnJlcXVpcmUoJy4vbGF0ZXN0LXZlcnNpb25zL3BhY2thZ2UuanNvbicpWydkZXBlbmRlbmNpZXMnXSxcblxuICAvLyBBcyBBbmd1bGFyIENMSSB3b3JrcyB3aXRoIHNhbWUgbWlub3IgdmVyc2lvbnMgb2YgQW5ndWxhciBGcmFtZXdvcmssIGEgdGlsZGUgbWF0Y2ggZm9yIHRoZSBjdXJyZW50XG4gIEFuZ3VsYXI6ICdeMTYuMS4wLW5leHQuMCcsXG5cbiAgLy8gU2luY2UgQGFuZ3VsYXItZGV2a2l0L2J1aWxkLWFuZ3VsYXIgYW5kIEBzY2hlbWF0aWNzL2FuZ3VsYXIgYXJlIGFsd2F5c1xuICAvLyBwdWJsaXNoZWQgdG9nZXRoZXIgZnJvbSB0aGUgc2FtZSBtb25vcmVwbywgYW5kIHRoZXkgYXJlIGJvdGhcbiAgLy8gbm9uLWV4cGVyaW1lbnRhbCwgdGhleSB3aWxsIGFsd2F5cyBoYXZlIHRoZSBzYW1lIHZlcnNpb24uXG4gIERldmtpdEJ1aWxkQW5ndWxhcjogJ14nICsgcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylbJ3ZlcnNpb24nXSxcbn07XG4iXX0=