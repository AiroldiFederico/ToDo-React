import TaskComp from "./TaskComp"
import CreateTask from "./CreateTask";



export default function MainComp() {
  return (
    <div className="text-white w-72 h-auto bg-gradient-to-b from-sky-500 to-teal-400 text-center rounded-md p-3 drop-shadow-lg">
      <h2 className="font-bold mb-4 text-xl">ToDo List</h2>

      <CreateTask></CreateTask>

      <TaskComp></TaskComp>
      <TaskComp></TaskComp>
      <TaskComp></TaskComp>
      <TaskComp></TaskComp>
      <TaskComp></TaskComp>

    </div>
  );
}
