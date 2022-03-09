"use strict";
exports.__esModule = true;
exports.getSortedPlanetCardData = void 0;
var fs = require("fs");
var path = require("path");
var planetsDirectory = path.join(process.cwd(), 'planets');
var getSortedPlanetCardData = function () {
    // get full path
    var fullPath = path.join(planetsDirectory, 'card_data');
    // console.log('fullPath: ', fullPath);
    // read all files from directory and store file names
    var planetFiles = fs.readdirSync(fullPath);
    // console.log('planetFiles: ', planetFiles);
    // iterate through filenames
    var planetFilesContent = planetFiles.map(function (fileName) {
        var planetFilePath = path.join(fullPath, fileName);
        // console.log('planetFilePath: ', planetFilePath);
        var planetFileContentRaw = fs.readFileSync(planetFilePath, 'utf-8');
        var planetFileContent = JSON.parse(planetFileContentRaw);
        // console.log('planetFileContent: ', planetFileContent);
        return planetFileContent;
    });
    // console.log('planetFilesContent: ', planetFilesContent);
    // read json file
    // return json object
    // sort planet objects by AU value
    var planetFilesContentSorted = planetFilesContent.sort(function (_a, _b) {
        var a = _a.AU;
        var b = _b.AU;
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
    console.log('planetFilesContentSorted: ', planetFilesContentSorted);
    // return result
    return {};
};
exports.getSortedPlanetCardData = getSortedPlanetCardData;
