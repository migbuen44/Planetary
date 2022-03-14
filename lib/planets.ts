import *  as fs from 'fs'
import * as path from 'path'

const planetsDirectory = path.join(process.cwd(), 'planets');

export const getSortedPlanetCardData = () => {
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

export const getSortedMenuBarData = () => {
  const cardData = getSortedPlanetCardData();
  const sortedMenuBarData = cardData.map(data => data.name);

  return sortedMenuBarData;
}