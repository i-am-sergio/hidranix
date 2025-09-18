import { AnimationComponent } from "../../animation/AnimationComponent";
import { WebinarItemContent } from "../../shared/interfaces";
import { WebinarListItem } from "./WebinarListItem";

interface Props {
  id?: string;
  title: string;
  subTitle: string;
  webinars: WebinarItemContent[];
  isClickable?: boolean;
}

export const ListWebinar = ({
  id,
  title,
  subTitle,
  webinars,
  isClickable,
}: Props) => {
  return (
    <section
      id={id}
      className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white overflow-x-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationComponent
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary-light to-slate-900 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
          </div>
        </AnimationComponent>

        <AnimationComponent
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.1, duration: 0.25 } },
          }}
        >
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16 px-4">
            {subTitle}
          </p>
        </AnimationComponent>

        <div className="flex flex-col gap-8">
          {webinars.map((item, index) => (
            <WebinarListItem
              key={index}
              item={item}
              animationDelay={0.25 + index * 0.1}
              isClickable={isClickable}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
