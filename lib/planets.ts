import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

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

  return planetIds;
}

export const getPlanetData = async (id : string) => {
  const fullPath = path.join(planetsDirectory, 'page_data');
  const filePath = path.join(fullPath, id + '.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml
  }
}