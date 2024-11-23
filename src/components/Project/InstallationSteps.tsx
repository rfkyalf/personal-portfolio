'use client';

import { ProjectsProps } from '@/lib/types';
import CopyToClipboard from '../CopyToClipboard';
import { TitleProject } from './ProjectComps';

export default function InstallationSteps({
  project,
}: {
  project: ProjectsProps;
}) {
  if (!project.source_code) return '';

  const STEPS = [
    {
      description: 'Clone the repository:',
      command: `git clone ${project.source_code}`,
    },
    {
      description: 'Navigate to the project directory:',
      command: `cd ${project.project_name}`,
    },
    {
      description: 'Install the dependencies:',
      command: 'npm install',
    },
  ];

  return (
    <div className="flex flex-col">
      <TitleProject title="Installation" />
      <p className="text-[0.9rem] md:text-[1rem] text-neutral-700 pt-1 md:pt-2 text-pretty">
        Follow the steps below to set up the project locally.
      </p>
      <div className="flex flex-col gap-y-1 md:gap-y-2 mt-1 md:mt-2">
        {STEPS.map((step, index) => (
          <InstallationStep
            key={index}
            number={index + 1}
            command={step.command}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}

const InstallationStep = ({
  number,
  command,
  description,
}: {
  number: number;
  command: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-y-1 md:gap-y-2 px-2 md:px-4">
      <p className="text-[0.9rem] md:text-[1rem] text-neutral-700">
        {number}.&nbsp;{description}
      </p>
      <div className="bg-neutral-300 p-2 md:p-4 flex items-center justify-between gap-x-2 rounded-md">
        <code className="text-[0.9rem] md:text-[1rem] text-neutral-700 overflow-x-auto whitespace-nowrap">
          {command}
        </code>
        <CopyToClipboard text={command} />
      </div>
    </div>
  );
};
