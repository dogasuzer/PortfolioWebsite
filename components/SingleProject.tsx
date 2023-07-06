import React from 'react';
interface SingleProjectProps {
  name: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({ name }) => {
  if (name == 'PrepApp') {
    return (
      <div
        className={`overflow-x-hidden overflow-y-hidden rounded-xl  bg-[url('/PrepApp.png')] object-none text-zinc-200 font-bold hover:scale-110   h-2/3 `}
      >
        <div className="rounded-xl w-full h-full bg-zinc-700 bg-opacity-80 hover:bg-opacity-50">
          {name}
          <div className="justify-center  invisible text-zinc-300 w-0 lg:w-auto lg:visible mt-2 lg:mt-8 font-normal gap-2 lg:gap-4 px-4 max-w-xl text-lg  lg:max-w-md flex flex-wrap">
            <div>#ReactNative</div>
            <div>#AWS</div>
            <div>#Javascript</div>
            <div>#Redux</div>
            <div>#GraphQL</div>
          </div>
        </div>
      </div>
    );
  }
  if (name == 'MovieBook') {
    return (
      <div
        className={`overflow-x-hidden overflow-y-hidden rounded-xl  bg-[url('/MovieBook.png')] object-none text-zinc-200 font-bold hover:scale-110 h-2/3 `}
      >
        <div className="rounded-xl w-full h-full bg-zinc-700 bg-opacity-80 hover:bg-opacity-50">
          {name}
          <div className="justify-center  invisible text-zinc-300 w-0 lg:w-auto lg:visible mt-2 lg:mt-8 font-normal gap-2 lg:gap-4 px-4 max-w-xl text-lg  lg:max-w-md flex flex-wrap">
            <div>#React</div>
            <div>#JavaScript</div>
            <div>#Firebase</div>
            <div>#NoSQL</div>
            <div>#HTML</div>
            <div>#CSS</div>
          </div>
        </div>
      </div>
    );
  }

  if (name == 'GroceryTracker') {
    return (
      <div
        className={`overflow-x-hidden overflow-y-hidden rounded-xl  bg-[url('/GroceryTracker.png')] object-none text-zinc-200 font-bold hover:scale-110 h-2/3 `}
      >
        <div className="rounded-xl w-full h-full bg-zinc-700 bg-opacity-80 hover:bg-opacity-50">
          {name}
          <div className="justify-center  invisible text-zinc-300 w-0 lg:w-auto lg:visible mt-2 lg:mt-8 font-normal gap-2 lg:gap-4 px-4 max-w-xl text-lg  lg:max-w-md flex flex-wrap">
            <div>#ReactNative</div>
            <div>#Javascript</div>
            <div>#Tailwind</div>
            <div>#React</div>
            <div>#MongoDB</div>
            <div>#Zustand</div>
            <div>#React SWR</div>
            <div>#Prisma</div>
          </div>
        </div>
      </div>
    );
  }
  if (name == 'WatchNext') {
    return (
      <div
        className={` overflow-x-hidden overflow-y-hidden rounded-xl  bg-[url('/WatchNext.png')] object-none text-zinc-200 font-bold hover:scale-110 h-2/3 `}
      >
        <div className="rounded-xl w-full h-full bg-zinc-700 bg-opacity-80 hover:bg-opacity-50">
          {name}
          <div className="justify-center  invisible text-zinc-300 w-0 lg:w-auto lg:visible mt-2 lg:mt-8 font-normal gap-2 lg:gap-4 px-4 max-w-xl text-lg  lg:max-w-md flex flex-wrap">
            <div>#TypeScript</div>
            <div>#Next.js</div>
            <div>#Node.js</div>
            <div>#Tailwind</div>
            <div>#React</div>
            <div>#MongoDB</div>
            <div>#Zustand</div>
            <div>#Prisma</div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default SingleProject;
