import { AnimationComponent } from "../../animation/AnimationComponent";
import { CourseItemContent } from "../../shared/interfaces";
import { Link } from "react-router-dom"; // O Next.js Link si es el caso

interface Props {
  item: CourseItemContent;
  animationDelay?: number;
}

export const CourseListItem = ({ item, animationDelay = 0 }: Props) => {
  return (
    <AnimationComponent
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: animationDelay, duration: 0.3 },
        },
      }}
    >
      <div className="p-6 rounded-lg shadow-md bg-white border border-gray-400 hover:shadow-lg transition-shadow">
        <h3 className="text-2xl font-semibold text-gray-900">{item.name}</h3>
        <p className="mt-2 text-gray-700">
          <strong>📅 Inicio:</strong> {item.startDate} &nbsp;|&nbsp;
          <strong>Fin:</strong> {item.endDate}
        </p>
        <p className="mt-1 text-gray-700">
          <strong>⏱ Duración:</strong> {item.duration}
        </p>
        <p className="mt-1 text-gray-700">
          <strong>🏫 Modalidad:</strong> {item.modality}
        </p>
        <p className="mt-1 text-gray-700">
          <strong>🕒 Horario:</strong> {item.schedule}
        </p>

        <div className="mt-4">
          <Link
            to={item.moreInfoPath}
            target="_blank"
            className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
          >
            Más información
          </Link>
        </div>
      </div>
    </AnimationComponent>
  );
};
