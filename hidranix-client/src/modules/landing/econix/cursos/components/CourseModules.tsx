import { useState } from "react";

import { Module } from "../../../shared/interfaces";
import {
  FaBookOpen,
  FaCalendar,
  FaChevronDown,
  FaChevronUp,
  FaClock,
} from "react-icons/fa";
import { GiTargeted } from "react-icons/gi";

interface Props {
  modules: Module[];
}

export const CourseModules = ({ modules }: Props) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Temario del Curso
            </h2>
            <p className="text-xl text-gray-600">
              Explora el contenido detallado de cada módulo
            </p>
          </div>

          {/* Modules */}
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Module Header */}
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                          {module.number}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary-dark">
                            Módulo {module.number}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Semana {module.week} • Sesiones {module.sessions}
                          </p>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        {module.title}
                      </h4>

                      {/* Module Stats */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <FaClock className="w-4 h-4 mr-1" />
                          {module.hours} horas
                        </div>
                        <div className="flex items-center">
                          <FaCalendar className="w-4 h-4 mr-1" />
                          {module.dates.join(" • ")}
                        </div>
                      </div>
                    </div>

                    <div className="ml-4">
                      {expandedModule === index ? (
                        <FaChevronUp className="w-6 h-6 text-primary" />
                      ) : (
                        <FaChevronDown className="w-6 h-6 text-primary" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedModule === index && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Objective */}
                      <div>
                        <div className="flex items-center mb-4">
                          <GiTargeted className="w-5 h-5 text-primary mr-2" />
                          <h5 className="font-semibold text-primary-dark">
                            Objetivo
                          </h5>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {module.objective}
                        </p>
                      </div>

                      {/* Topics */}
                      <div>
                        <div className="flex items-center mb-4">
                          <FaBookOpen className="w-5 h-5 text-primary mr-2" />
                          <h5 className="font-semibold text-primary-dark">
                            Temas principales
                          </h5>
                        </div>
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Course Timeline */}
          <div className="mt-16 bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Cronograma del Curso
            </h3>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${Math.min(
                  modules.length,
                  6
                )}, 1fr)`,
              }}
            >
              {modules.map((module, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">{module.number}</span>
                  </div>
                  <h4 className="font-semibold mb-2">Semana {module.week}</h4>
                  <p className="text-white/80 text-sm">{module.hours} horas</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
