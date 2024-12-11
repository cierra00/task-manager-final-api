const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks', error });
  }
}

const getTask = async (req, res) => {
  if (!req?.params?.id) return res.status(400).json({ 'message': 'Task ID required.' });

  const task = await Task.findOne({ _id: req.params.id }).exec();
  if (!task) {
      return res.status(204).json({ "message": `No task matches ID ${req.params.id}.` });
  }
  res.json(task);
}

const createNewTask = async (req, res) => {
    try {
      // Destructure task details from request body
      const { name, description} = req.body;
  
      // Validate input
      if (!name || !description) {
        return res.status(400).json({ message: 'All fields are required: name, description, dueDate' });
      }
  
      // Create a new task document
      const newTask = new Task({
        name,
        description
      });
  
      // Save to the database
      const savedTask = await newTask.save();
  
      // Respond with the saved task
      res.status(201).json({
        message: 'Task created successfully',
        task: savedTask,
      });
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  const updateTask = async (req, res) => {
    const { id, completed } = req.body; // Extract `id` and `completed` from the request body

  // Validate the incoming data
  if (!id || typeof completed !== 'boolean') {
    return res.status(400).json({ message: "Invalid request body" });
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id, // Use the `id` from the request body
      { completed },
      { new: true } // Return the updated task document
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(updatedTask); // Respond with the updated task
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).json({ message: 'Failed to update task' });
  }
}

const deleteTask = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'task ID required.' });

    const task = await Task.findOne({ _id: req.body.id }).exec();
    if (!task) {
        return res.status(204).json({ "message": `No task matches ID ${req.body.id}.` });
    }
    const result = await Task.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}



module.exports = {
    getAllTasks,
    createNewTask,
    updateTask,
    deleteTask,
    getTask
}