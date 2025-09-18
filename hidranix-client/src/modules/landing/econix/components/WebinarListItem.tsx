import { AnimationComponent } from "../../animation/AnimationComponent";
import { WebinarItemContent } from "../../shared/interfaces";

interface Props {
  item: WebinarItemContent;
  animationDelay?: number;
  isClickable?: boolean;
}

export const WebinarListItem = ({
  item,
  animationDelay = 0,
  isClickable,
}: Props) => {
  return (
    <AnimationComponent
      className="flex justify-center items-center border-gray-400 border rounded-lg shadow-md  hover:shadow-lg bg-white "
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: animationDelay, duration: 0.3 },
        },
      }}
    >
      <div
        className={`p-6  transition-shadow ${
          isClickable ? "cursor-pointer" : ""
        }`}
      >
        <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          🗓 {item.date} – {item.time} | 📍 {item.platform}
        </p>
        <p className="mt-4 text-gray-700">{item.description}</p>

        <div className="mt-4 border-t pt-3">
          <p className="font-semibold">{item.speaker.name}</p>
          <p className="text-sm italic">{item.speaker.title}</p>
          <p className="text-sm text-gray-700 mt-1">{item.speaker.bio}</p>
        </div>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
        >
          {item.isFree ? "Inscripción gratuita" : "Inscribirse"}
        </a>

        {item.extraNotes && (
          <p className="text-xs text-gray-500 mt-2">{item.extraNotes}</p>
        )}
      </div>
      <div className="pr-4">
        <img src={item.imgSrc} className="w-[24rem] max-w-none" />
      </div>
    </AnimationComponent>
  );
};
