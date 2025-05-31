import React, { useState } from 'react';
import { X, User, Mail, Phone, BookOpen, Code, ExternalLink } from 'lucide-react';
import { matchStudents } from '../lib/api';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Student {
  id: string;
  name: string;
  email: string;
  phone?: string;
  skills: string[];
  education?: string;
  experience?: string;
  matchPercentage?: number;
  profileUrl?: string;
}

export const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState('');
  const [results, setResults] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddSkill = () => {
    if (currentSkill.trim()) {
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (skills.length === 0) return;

    setLoading(true);
    try {
      const response = await matchStudents(skills);
      setResults(response.students || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full my-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Match Students by Skills</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={currentSkill}
              onChange={(e) => setCurrentSkill(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter a skill (e.g., Python)"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Add Skill
            </button>
          </div>

          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-blue-800 hover:text-blue-900"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || skills.length === 0}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Matching...' : 'Find Matching Students'}
          </button>
        </form>

        {results.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Matching Students</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((student) => (
                <div key={student.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{student.name}</h4>
                        {student.matchPercentage && (
                          <span className="text-sm text-green-600 font-medium">
                            {student.matchPercentage}% Match
                          </span>
                        )}
                      </div>
                    </div>
                    {student.profileUrl && (
                      <a
                        href={student.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{student.email}</span>
                    </div>
                    {student.phone && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">{student.phone}</span>
                      </div>
                    )}
                    {student.education && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-sm">{student.education}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium">Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {student.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {student.experience && (
                    <div className="mt-4 text-sm text-gray-600">
                      <p>{student.experience}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {results.length === 0 && !loading && (
          <div className="mt-6 text-center text-gray-600">
            <p>No matching students found. Try different skills.</p>
          </div>
        )}
      </div>
    </div>
  );
}; 