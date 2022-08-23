class Task {
  title: String;
  isCompleted: boolean;
  id: BigInt;
  owner: String;

  constructor(
    id: BigInt,
    title: String,
    isCompleted: boolean = false,
    owner: String
  ) {
    this.title = title;
    this.isCompleted = isCompleted;
    this.owner = owner;
    this.id = id;
  }
}

export default Task;
