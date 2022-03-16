import *  as fs from 'fs'
import * as path from 'path'

const planetsDirectory = path.join(process.cwd(), 'planets');

export const getSortedPlanetsData = () => {
  const fullPath = path.join(planetsDirectory, 'card_data');
  const planetFiles = fs.readdirSync(fullPath);
  const planetFilesContent = planetFiles.map((fileName) => {
    const planetFilePath = path.join(fullPath, fileName);
    const planetFileContentRaw = fs.readFileSync(planetFilePath,'utf-8');
    const planetFileContent = JSON.parse(planetFileContentRaw);
    return planetFileContent;
  })

  const planetFilesContentSorted = planetFilesContent.sort(({ AU: a}, {AU: b}) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0
  })

  return planetFilesContentSorted;
}

export const getAllPlanetIds = () => {
  const fullPath = path.join(planetsDirectory, 'card_data');
  const fileNames = fs.readdirSync(fullPath);
  const planetIds = fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace('.json', '')
      }
    }
  });

  console.log('planetIds:' , planetIds);

  return planetIds;
}