import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) return <p>No tasks yet!</p>;

  return (
    <List>
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <ListItem>
            <ListItemText primary={task.title} secondary={task.description} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default TaskList;
