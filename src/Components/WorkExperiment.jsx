import testBg from "../Assets/testBg.png";
import { Divider } from "./Divider";

export function WorkExperiment() {
  return (
    <section className="flex flex-col  border border-solid border-[var(--color-border-strong)] bg-[var(--color-bg-0)]  pb-20">
      <div className="flex items-center justify-center px-8 py-8 ">
        <h2 className="grow text-text-secondary text-14-decorative">
          \Work + Experiments
        </h2>
      </div>
      <div className="project-container flex flex-col gap-3">
        {/*Item 1*/}
        <div className="item1 group relative cursor-pointer overflow-hidden ">
          <img
            src={testBg}
            alt="testbg"
            className="w-full transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h3 className="text-text-primary text-16-medium">Project Title</h3>

            <p className="mt-1 text-text-tertiary text-14-regular">
              Short description of the project.
            </p>
          </div>
        </div>

        <Divider height={24} />

        {/* Item 2 */}
        <div className="item1 group relative cursor-pointer overflow-hidden ">
          <img
            src={testBg}
            alt="testbg"
            className="w-full transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h3 className="text-text-primary text-16-medium">Project Title</h3>

            <p className="mt-1 text-text-tertiary text-14-regular">
              Short description of the project.
            </p>
          </div>
        </div>

        <Divider height={24} />

        {/* Item 3 */}
        <div className="item1 group relative cursor-pointer overflow-hidden ">
          <img
            src={testBg}
            alt="testbg"
            className="w-full transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h3 className="text-text-primary text-16-medium">Project Title</h3>

            <p className="mt-1 text-text-tertiary text-14-regular">
              Short description of the project.
            </p>
          </div>
        </div>
        <Divider height={24} />

        {/* Item 4 */}
        <div className="item1 group relative cursor-pointer overflow-hidden ">
          <img
            src={testBg}
            alt="testbg"
            className="w-full transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h3 className="text-text-primary text-16-medium">Project Title</h3>

            <p className="mt-1 text-text-tertiary text-14-regular">
              Short description of the project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
