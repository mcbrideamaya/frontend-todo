'use client';

import TaskInput from './components/TaskInput';
import Calendar from './components/Calendar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Weekly Schedule Planner</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <TaskInput onAddTask={() => {}} />
          </div>
          <div className="lg:col-span-2">
            <Calendar schedule={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
