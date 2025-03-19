'use client';

import { useState } from 'react';
import { Task } from '../types/schedule';

export default function TaskInput({ onAddTask }: { onAddTask: (task: Task) => void }) {
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [expectedDuration, setExpectedDuration] = useState('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [type, setType] = useState<'assignment' | 'appointment' | 'class'>('assignment');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [classDays, setClassDays] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const task: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      course: type === 'assignment' ? course : undefined,
      dueDate: new Date(dueDate),
      dueTime: type === 'assignment' && dueTime ? dueTime : undefined,
      expectedDuration: expectedDuration ? parseInt(expectedDuration) : undefined,
      priority,
      completed: false,
      type,
      startTime: type === 'class' || type === 'appointment' ? startTime : undefined,
      endTime: type === 'class' ? endTime : undefined,
      location: type === 'appointment' ? location : undefined,
      notes: type === 'appointment' || type === 'class' ? notes : undefined,
      classDays: type === 'class' ? classDays : undefined,
    };

    onAddTask(task);
    setTitle('');
    setCourse('');
    setDueDate('');
    setDueTime('');
    setExpectedDuration('');
    setPriority('medium');
    setType('assignment');
    setStartTime('');
    setEndTime('');
    setLocation('');
    setNotes('');
    setClassDays([]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-primary mb-6">Add New Task</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#355238]">Title</label>
          <input
            type="text"
            placeholder="Task title"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-900"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary-dark">Priority</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'high' | 'medium' | 'low')}
            >
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-primary">Type</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
              value={type}
              onChange={(e) => setType(e.target.value as 'assignment' | 'appointment' | 'class')}
            >
              <option value="assignment">Assignment</option>
              <option value="appointment">Appointment</option>
              <option value="class">Class</option>
            </select>
          </div>
        </div>

        {type === 'assignment' && (
          <>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary-dark">Course</label>
              <input
                type="text"
                placeholder="Course name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary-dark">Due Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary-dark">Due Time (Optional)</label>
                <input
                  type="time"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
                  value={dueTime}
                  onChange={(e) => setDueTime(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary-dark">Expected Time to Complete (Optional)</label>
              <input
                type="number"
                placeholder="Duration in minutes"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
                value={expectedDuration}
                onChange={(e) => setExpectedDuration(e.target.value)}
                min="1"
              />
            </div>
          </>
        )}

        {type === 'appointment' && (
          <>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary-dark">Time</label>
              <input
                type="time"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary-dark">Location (Optional)</label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary-dark">Notes (Optional)</label>
              <textarea
                placeholder="Add any additional notes"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </div>
          </>
        )}

        {type === 'class' && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary-dark">Start Time</label>
                <input
                  type="time"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary-dark">End Time</label>
                <input
                  type="time"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary-dark">Class Days</label>
              <div className="flex flex-wrap gap-2">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <button
                    key={day}
                    type="button"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
                      classDays.includes(day)
                        ? 'bg-[#355238] text-white border border-gray-300'
                        : 'bg-white text-[#355238] border border-gray-300'
                    }`}
                    onClick={() => {
                      setClassDays(prev =>
                        prev.includes(day)
                          ? prev.filter(d => d !== day)
                          : [...prev, day]
                      );
                    }}
                  >
                    {day.slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary-dark">Notes (Optional)</label>
              <textarea
                placeholder="Add any additional notes"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light focus:border-transparent focus:text-gray-300 bg-white text-gray-400"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </div>
          </>
        )}

        <button
          className="w-full bg-[#355238] hover:bg-white text-white hover:text-[#355238] border-2 border-transparent hover:border-[#355238] py-3 px-4 rounded-md transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg mt-6 font-semibold"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
