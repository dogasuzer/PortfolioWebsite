import React, { useCallback, useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import MovieBookModal from './MovieBookModal';
import PrepAppModal from './PrepAppModal';
import WatchNextModal from './WatchNextModal';

function Projects() {
  const { isOpen, closeModal } = useInfoModalStore();
  const { openModal, projectName } = useInfoModalStore();
  const [project, setProject] = useState<string>('none');

  const handleOpenModal = useCallback(
    (project: string) => {
      openModal(project);
    },
    [openModal]
  );
  return (
    <>
      <MovieBookModal
        visible={projectName == 'MovieBook'}
        onClose={closeModal}
      />
      <WatchNextModal
        visible={projectName == 'WatchNext'}
        onClose={closeModal}
      />
      <PrepAppModal visible={projectName == 'PrepApp'} onClose={closeModal} />
      <div className="flex flex-col h-full  text-center justify-start">
        Projects
        <div className="mt-8 justify-center h-1/2 flex flex-wrap  gap-4 ">
          <div
            onClick={() => {
              handleOpenModal('MovieBook');
            }}
          >
            <SingleProject name="MovieBook" />
          </div>
          <div
            onClick={() => {
              handleOpenModal('GroceryTracker');
            }}
          >
            <SingleProject name="GroceryTracker" />
          </div>
          <div
            onClick={() => {
              handleOpenModal('PrepApp');
            }}
          >
            <SingleProject name="PrepApp" />
          </div>{' '}
          <div
            onClick={() => {
              handleOpenModal('WatchNext');
            }}
          >
            <SingleProject name="WatchNext" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
