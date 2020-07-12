import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next'
import Page from '@components/Page';
import Header from '@components/Header';
import Paragraph from '@components/Paragraph';
import Project from '@components/Project';

import { ProjectItem, ProjectList } from '@data/projectlist';

export default function Projects({ projectList }: any) {
  return (
    <Page title='projects'>
      <Header title='projects'/>
      <div>
        {projectList.map((project: ProjectItem) => (
          <Project
            name={ project.name }
            desc={ project.desc }
            link={ project.link }
            img={ project.img }
            />
        ))}
      </div>
    </Page>
  )
}

export async function getStaticProps() {
  const projectList = ProjectList;
  return {
    props: {
      projectList
    },
  }
}