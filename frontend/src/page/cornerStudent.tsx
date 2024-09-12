import React, { useState } from 'react';
import ClientForm from '../components/ClientStudForm';

interface Template {
  id: number;
  title: string;
  description: string;
  image: string;
}

const templates: Template[] = [
  { id: 1, title: 'E-commerce Web', description: 'A modern e-commerce layout', image: 'ecommerce.jpg' },
  { id: 2, title: 'Portfolio', description: 'A sleek portfolio design', image: 'portfolio.jpg' },
];

const ProjectTemplate: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">Choose a Project Template</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-xl p-6 shadow-md transform transition-all"
            onClick={() => handleSelectTemplate(template)}
          >
            <div className="relative w-full h-48 mb-4">
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
            <h3 className="text-3xl font-semibold text-gray-900">{template.title}</h3>
            <p className="text-gray-600 mt-2">{template.description}</p>
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <div className="mt-12 bg-white rounded-xl  p-8 max-w-4xl mx-auto">
          <ClientForm selectedTemplate={selectedTemplate.title} />
        </div>
      )}
    </div>
  );
};

export default ProjectTemplate;
